// Task.js

// import mongoose from "mongoose";
import mongoose from "mongoose";
import { connectToDatabase } from "../db";

export const Tasks = {
  name: String,
  task_polarity: Boolean,
  task_freq: Number,
  task_avg: Number,
  task_freq_t: Number,
  task_avg_t: Number,
};

// export Task extends mongoose.Document {
//  name:
// }

const taskSchema = new mongoose.Schema({
  name: String,
  task_polarity: Boolean,
  task_freq: Number,
  task_avg: Number,
  task_freq_t: Number,
  task_avg_t: Number,
});

// const _taskSchema = mongoose.Schema({
//   name: String,
//   task_polarity: Boolean,
//   task_freq: Number,
//   task_avg: Number,
//   task_freq_t: Number,
//   task_avg_t: Number,
// });

// const connection = connectToDatabase();

// console.log("CONNECTION", connection);

// const _connection = connectToDatabase();

// console.log("CONNECTION", _connection);

let Task = mongoose.model("Task", taskSchema);

Task = mongoose.model("Task");

try {
  Task = mongoose.model("Task");
} catch (error) {
  if (error.name === "MissingSchemaError") {
    Task = mongoose.model("Task", taskSchema);
  }
}

export default Task;

// alert(Task);
