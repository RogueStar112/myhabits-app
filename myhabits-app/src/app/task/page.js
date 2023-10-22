"use client";

// table styling credit: https://blog.logrocket.com/building-tailwind-css-table-component/

import Link from "next/link";
import Header from "../header";
import Task, { Tasks } from "../models/tasks";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { connectToDatabase } from "../db";

import { createTask } from "../../../pages/api/tasks/create.ts";
import { deleteTask } from "../../../pages/api/tasks/delete";
import { getTasks } from "../../../pages/api/tasks/get";
import { updateTask } from "../../../pages/api/tasks/update";

import axios from "axios";

const contentType = "application/json";

const connect = async () => {
  try {
    const response = await axios.get("/api/tasks/get");
  } catch (error) {
    console.error(error);
  }
};

connect();
// fetchData();

// connectToDatabase();

console.log("TASKS", Tasks);
console.log("TYPEOF TASKS", typeof Tasks);

const TasksDOM = {
  tasks: Array(Tasks),
};

console.log(TasksDOM);
console.log("TOF TDOM", TasksDOM.tasks);

export default function Page() {
  return (
    <section className="font-montserrat max-w-5xl mx-auto bg-[#333333] text-white">
      <Header />
      <HabitsList />
    </section>
  );
}

export const HabitsList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("api/tasks/get", {
          method: "GET",
          headers: {
            Accept: contentType,
            "Content-Type": contentType,
          },
        });

        if (res.ok) {
          const data = await res.json();

          if (data.success) {
            setTasks(data.data);
          } else {
            console.error("API request failed");
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [tasks]);

  const deleteTask = async (id) => {
    try {
      const res = await fetch("api/tasks/delete", {
        method: "DELETE",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
          id: id,
        },
      });

      if (res.ok) {
        const data = await res.json();

        if (data.success) {
          setTasks(
            [...tasks].filter(function (task) {
              return task !== data._id;
            })
          );
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row-reverse justify-between ">
      <div className="flex flex-col gap-4">
        <h2>Habits List</h2>
        <ul className="flex flex-col gap-4 h-screen pr-4 overflow-y-scroll">
          {tasks.map((task) => (
            <li
              className="w-[256px] pt-4 rounded-lg"
              style={{
                backgroundColor: task.task_polarity ? "#2F855A" : "#C53030",
              }}
              key={task._id}
            >
              <div className="[&>section]:hidden hover:[&>section]:visible">
                <h3 className="font-extrabold text-center">
                  {task.task_polarity ? "INCREASE" : "DECREASE"}
                </h3>
                <h3 className="text-md text-center">{task.name}</h3>
                <section className=""></section>
              </div>

              <div className="flex justify-between [&>*]:w-full ">
                <Link
                  href={`/edit/${task._id}`}
                  className="bg-gradient-to-r from-yellow-400 to-transparent text-black mt-2 p-2"
                >
                  EDIT ✏️
                </Link>
                <button
                  onClick={() => deleteTask(task._id)}
                  className="bg-gradient-to-l from-red-800 to-transparent mt-2 p-2 text-right"
                >
                  DELETE 🗑️
                </button>
              </div>

              {/* <table className="auto md:hidden text-center shadow-lg border-separate">
                <thead>
                  <tr>
                    <th></th>
                    <th className="text-left px-8 py-4">Current</th>
                    <th className="text-left px-8 py-4">Target</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="p-4">Frequency</td>
                    <td>{task.task_freq}x</td>
                    <td>{task.task_freq_t}x</td>
                  </tr>

                  <tr>
                    <td className="p-4">Spent</td>
                    <td>
                      {task.task_avg}{" "}
                      {task.name.includes("Buying") ? "GBP" : "mins"}
                    </td>
                    <td>
                      {task.task_avg_t}{" "}
                      {task.name.includes("Buying") ? "GBP" : "mins"}
                    </td>
                  </tr>
                </tbody>
              </table> */}
            </li>
          ))}
        </ul>
      </div>

      <AddHabitForm tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export function AddHabitForm({ tasks, setTasks }) {
  const [inputs, setInputs] = useState({
    habit_name: "",
    habit_polarity: "true",
    habit_frequency: "",
    habit_duration: "",
    habit_frequency_target: "",
    habit_duration_target: "",
  });
  const [selectedOption, setSelectedOption] = useState(1);

  // console.log(TaskModel);

  const postData = async (form) => {
    try {
      const res = await fetch("/api/tasks/create", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const result = await res.json();
        setTasks([...tasks, result]);
      }
    } catch (error) {
      console.log("POST DATA ERROR.");
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => {
      const inputs = { ...values, [name]: value };
      return inputs;
    });
  };

  const handleRadioChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSelectedOption(value);
    setInputs((values) => {
      const inputs = { ...values, [name]: value };
      return inputs;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const taskData = {
      name: inputs.habit_name || 0,
      task_polarity: inputs.habit_polarity === "true",
      task_freq: parseInt(inputs.habit_frequency) || 0,
      task_avg: parseInt(inputs.habit_duration) || 0,
      task_freq_t: parseInt(inputs.habit_frequency_target) || 0,
      task_avg_t: parseInt(inputs.habit_duration_target) || 0,
    };

    postData(taskData);
  };

  /* form styling taken from: https://v1.tailwindcss.com/components/forms */
  return (
    <div class="flex flex-col">
      <h2 className="font-extrabold mt-4">HABITS MANAGER</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mt-4">
        <div className="flex [&>label]:mt-4 [&>input]:mt-4">
          <label
            className="text-sm font-normal italic mb-2"
            htmlFor="habit_name"
          >
            HABIT NAME
          </label>
          <input
            className="shadow appearance-none border rounded mx-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="habit_name"
            onChange={handleChange}
            value={inputs["habit_name"]}
            placeholder="Exercise"
          ></input>
        </div>

        <label
          className="block text-sm font-normal italic mb-2"
          htmlFor="habit_polarity"
        >
          Do you want to increase/reduce this habit?
        </label>

        <div className="my-3">
          <input
            type="radio"
            id="habit_increase"
            className="mx-3"
            checked={selectedOption === "true"}
            name="habit_polarity"
            value="true"
            onChange={handleRadioChange}
          ></input>
          <label htmlFor="habit_increase">Increase</label>

          <input
            type="radio"
            id="habit_reduce"
            className="mx-3"
            checked={selectedOption === "false"}
            name="habit_polarity"
            value="false"
            onChange={handleRadioChange}
          ></input>
          <label htmlFor="habit_decrease">Reduce</label>
        </div>

        <div className="flex my-3 justify-between">
          <label
            className="block text-sm font-normal italic mb-2"
            htmlFor="habit_frequency"
            onChange={handleChange}
          >
            How frequently do you engage in this habit per week?
          </label>

          <input
            className="shadow appearance-none border rounded mx-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="habit_frequency"
            onChange={handleChange}
            value={inputs["habit_frequency"]}
            placeholder="2 (times)"
          ></input>
        </div>

        <div className="flex my-3 justify-between">
          <label
            className="block text-sm font-normal italic mb-2"
            htmlFor="habit_duration"
          >
            What's the average time or money spent per occurrence of this habit?
          </label>

          <input
            className="shadow appearance-none border rounded mx-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="habit_duration"
            placeholder="30 (minutes)"
            onChange={handleChange}
            value={inputs["habit_duration"]}
          ></input>
        </div>

        <div className="flex my-3 justify-between">
          <label
            className="block text-sm font-normal italic mb-2"
            htmlFor="habit_frequency_target"
          >
            Desired frequency of this habit per week?
          </label>

          <input
            className="shadow appearance-none border rounded mx-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="habit_frequency_target"
            onChange={handleChange}
            placeholder="3 (times)"
            value={inputs["habit_frequency_target"]}
          ></input>
        </div>

        <div className="flex my-3 justify-between">
          <label
            className="block text-sm font-normal italic mb-2"
            htmlFor="habit_duration_target"
          >
            Desired time or money spent each time you do this?
          </label>

          <input
            className="shadow appearance-none border rounded mx-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="habit_duration_target"
            onChange={handleChange}
            placeholder="45 (minutes)"
            value={inputs["habit_duration_target"]}
          ></input>
        </div>

        <br></br>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
