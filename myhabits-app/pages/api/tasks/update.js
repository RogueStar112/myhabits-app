// Import the Task model
import { connectToDatabase } from "../../../src/app/db";
import Task from "../../../src/app/models/tasks";

export const updateTask = async (taskId, taskData) => {
  try {
    // await connectToDatabase();

    const task = await Task.findById(taskId);

    if (!task) {
      throw new Error("Task not found");
    }

    Object.assign(task, taskData);
    await task.save();
    return task;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to update the task");
  }
};
