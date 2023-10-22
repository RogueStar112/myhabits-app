"use client";

import Link from "next/link";

import Header from "../header";

import { useState, useEffect } from "react";

import Task, { Tasks } from "../models/tasks";

const contentType = "application/json";

export default function Page() {
  const [daysOfWeek, setDaysOfWeek] = useState(0);
  const [tasks, setTasks] = useState([]);
  const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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

  return (
    <form>
      <section className="font-montserrat max-w-5xl mx-auto bg-[#333333] text-white">
        <Header />
        <div className="flex place-items-start mt-6 min-h-screen">
          <div className="flex flex-col gap-4">
            <h2 className="text-center">Habits List</h2>
            <ul className="flex flex-col gap-4 h-screen pr-4 overflow-y-scroll">
              {tasks.map((task) => (
                <li
                  className="w-[192px] p-4 rounded-lg"
                  style={{
                    backgroundColor: task.task_polarity ? "#2F855A" : "#C53030",
                  }}
                  key={task._id}
                >
                  <div className="">
                    {/* <h3 className="font-extrabold text-center">
  
                  </h3> */}
                    <h3 className="text-sm text-center">
                      {task.name}
                      <br></br>
                    </h3>
                    <section className=""></section>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <table className="w-screen  table-fixed">
            <thead>
              <tr>
                {daysOfTheWeek.map((day) => (
                  <th>{day}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {tasks.map((task) => (
                <tr className="text-center h-[52px] p-4">
                  {daysOfTheWeek.map((day) => (
                    <td>
                      <input type="checkbox"></input>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </form>
  );
}
