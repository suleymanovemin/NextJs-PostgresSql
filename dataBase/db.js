import { Client } from "pg";

const {
  POSTGRES_URL,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
  POSTGRES_HOST,
} = process.env;

const db = new Client({
  connectionString: POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function connectToDatabase() {
  try {
    await db.connect();
    console.log("Connected to Postgres database");
  } catch (error) {
    console.error("Error connecting to Postgres database:", error);
  }
}

export { db, connectToDatabase };
