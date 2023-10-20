import { connectToDatabase } from "../../src/app/db";

export default async function handler(req, res) {
  try {
    const db = await connectToDatabase();
    res.status(200).json({ message: "Connected to the database" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to connect to the database" });
  }
}
