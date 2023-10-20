// Import the Task model
import { connectToDatabase } from "../../../src/app/db";
import Task from "../../../src/app/models/tasks";

export const getTasks = async () => {
  try {
    // await connectToDatabase();

    const tasks = await Task.find();
    return tasks;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to retrieve tasks");
  }
};
