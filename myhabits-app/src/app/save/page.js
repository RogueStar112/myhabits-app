"use client";
import Header from "../header";
import { useState, useEffect } from "react";
// import { experimental_useFormState as useFormState } from "react-dom";
// import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function Page() {
  return (
    <section className="font-montserrat max-w-5xl mx-auto bg-[#333333] text-white">
      <Header />
    </section>
  );
}

export function AddHabitForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        HABIT NAME
        <input type="text" name="habit-name"></input>
      </label>
    </form>
  );
}
