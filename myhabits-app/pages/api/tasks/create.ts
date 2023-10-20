// Import the Task model
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../src/app/db";
import Task from "../../../src/app/models/tasks";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;

    await connectToDatabase();

    switch (method) {
      case "POST":
        try {
          const newTask = await Task.create(req.body);

          res.status(201).json({ success: true, data: newTask });
        } catch (error) {
          console.error(error);
          res
            .status(500)
            .json({ success: false, error: "Unable to create a new task" });
        }
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, error: "Unable to create a new task" });
  }
};

export default handler;
