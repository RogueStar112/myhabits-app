"use client";

import Link from "next/link";
import Header from "../header";
import { useState, useEffect } from "react";
import { connectToDatabase } from "../db";
import Task from "../models/tasks";

import { createTask } from "../../../pages/api/tasks/create.ts";
import { deleteTask } from "../../../pages/api/tasks/delete";
import { getTasks } from "../../../pages/api/tasks/get";
import { updateTask } from "../../../pages/api/tasks/update";

import axios from "axios";

const connect = async () => {
  try {
    const response = await axios.get("/api/connect");
    console.log("RESPONSE", response);
  } catch (error) {
    console.error(error);
  }
};

connect();
// fetchData();

// connectToDatabase();

export default function Page() {
  return (
    <section className="font-montserrat max-w-5xl mx-auto bg-[#333333] text-white">
      <Header />
      <h2 className="font-extrabold">HABITS MANAGER</h2>
      <AddHabitForm />
    </section>
  );
}

export function AddHabitForm() {
  const contentType = "application/json";

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
    } catch (error) {
      console.log("POST DATA ERROR.");
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => {
      const inputs = { ...values, [name]: value };
      return inputs; // Return the updated state
    });
    console.log("INPUTS", inputs);
  };

  const handleRadioChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSelectedOption(value);
    setInputs((values) => {
      const inputs = { ...values, [name]: value };
      console.log("INPUTS", inputs);
      return inputs; // Return the updated state
    });
    console.log("VAL", value);
    console.log("INPUTS HRC", inputs);
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
    // alert("TD", taskData);
    // alert("IHBN", inputs["habit_name"]);
    // alert("ITFRQ", inputs["habit_frequency"]);
    postData(taskData);

    console.log("TD", taskData);
  };

  /* form styling taken from: https://v1.tailwindcss.com/components/forms */
  return (
    <form onSubmit={handleSubmit} className="max-w-xl justify-center">
      <div className="flex">
        <label className="text-sm font-normal italic mb-2" htmlFor="habit_name">
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
  );
}
