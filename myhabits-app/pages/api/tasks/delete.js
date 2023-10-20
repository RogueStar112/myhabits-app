// Import the Task model

import { connectToDatabase } from "../../../src/app/db";
import Task from "../../../src/app/models/tasks";

export const deleteTask = async (taskId) => {
  try {
    // await connectToDatabase();
    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      throw new Error("Task not found");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Unable to delete the task");
  }
};
