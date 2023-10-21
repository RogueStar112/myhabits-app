// Import the Task model
import { connectToDatabase } from "../../../src/app/db";
import Task from "../../../src/app/models/tasks";

const handler = async (req, res) => {
  try {
    const { method } = req;

    await connectToDatabase();

    switch (method) {
      case "GET":
        try {
          const tasks = await Task.find({});
          res.status(200).json({ success: true, data: tasks });
        } catch (error) {
          res.status(400).json({ success: false });
        }
    }
  } catch (error) {
    console.error(error);
    throw new Error("Unable to retrieve tasks");
  }
};

export default handler;
