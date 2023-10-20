import { connectToDatabase } from "../../src/app/db";
import Task from "../../src/app/models/tasks";

export default async (req, res) => {
  try {
    await connectToDatabase();

    // Perform Mongoose operations here, e.g., find, insert, update, delete.

    // Example: Find all documents in the collection
    const data = await Task.find();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};
