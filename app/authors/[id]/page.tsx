import { query } from "@/lib/db";
import { Author } from "@/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import "./styles.css";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AuthorDetailPage({ params }: PageProps) {
  // In Next.js 15+, params is a Promise
  const { id } = await params;

  let author: Author | null = null;

  try {
    /**
     * SECURITY: Use $1 as a placeholder for the ID.
     * The 'pg' driver handles the sanitization to prevent SQL Injection.
     */
    const sql = 'SELECT * FROM "authors" WHERE id = $1 LIMIT 1';
    const result = await query(sql, [id]);

    if (result.rows.length > 0) {
      author = result.rows[0];
    }
  } catch (error) {
    console.error("Database error while fetching author:", error);
    throw new Error("Failed to fetch author details.");
  }

  // If no author is found, trigger the Next.js 404 page
  if (!author) {
    // No rendered html out of 'notFound()'
    return <div className="trigger404page">{notFound()}</div>;
  }

  return (
    <div className="containerPage  p-8 font-sans max-w-2xl mx-auto">
      <header className="mb-8 border-b pb-4">
        <Link
          href={"/authors"}
          className="text-blue-600 hover:underline text-sm"
        >
          ← Back to Authors List
        </Link>
      </header>

      <article className="bg-white shadow-lg rounded-xl p-8 border border-gray-100">
        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
          Author Profile
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">
          {author.name}
        </h1>

        <div className="prose prose-blue">
          <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">
            Biography
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg italic">
            {author.bio || "No biography provided for this author."}
          </p>
        </div>

        <footer className="mt-10 pt-6 border-t border-gray-50 text-right">
          <p className="text-sm text-gray-400 font-mono">
            System ID: {author.id}
          </p>
        </footer>
      </article>
    </div>
  );
}
