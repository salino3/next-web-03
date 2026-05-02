import { query } from "@/lib/db";
import { Author } from "@/types";

export default async function AuthorsPage() {
  let authors: Author[] = [];

  try {
    /**
     * Fetch all authors from the database using raw SQL.
     * We use double quotes "authors" to match the exact table name
     * usually created by ORMs or migrations.
     */
    const result = await query('SELECT * FROM "authors"');

    authors = result.rows;

    // Debug log in the terminal
    console.log("DB Data received:", authors);
  } catch (error) {
    console.error("Query execution error:", error);
    return (
      <div className="p-8 text-red-500 font-sans">
        Error: Failed to load data from the database.
      </div>
    );
  }

  // Handle empty state
  if (authors.length === 0) {
    return (
      <div className="p-8 font-sans">
        The database is empty. No authors found.
      </div>
    );
  }

  return (
    <div className="p-8 font-sans bg-dark-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-amber-50">
        Authors List (Direct SQL)
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {authors.map((author: any) => (
          <div
            key={author.id}
            className="border border-gray-200 p-5 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-bold text-blue-700 mb-2">
              {author.name}
            </h2>
            <p className="text-gray-600 mb-4 italic">
              {author.bio || "No biography available."}
            </p>
            <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
              <span className="text-xs font-mono text-gray-400">
                DATABASE_ID: {author.id}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
