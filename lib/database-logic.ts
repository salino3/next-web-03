import "server-only"; // <--- The Lock

export async function getDataFromDB() {
  const secretKey = process.env.DB_TEST_PASSWORD;

  return { content: "Data from Backend", secretKey };
}
