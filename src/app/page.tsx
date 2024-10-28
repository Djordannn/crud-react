"use client";

import React, { useState } from "react";
import FormInput from "@/components/Form_input/index";
import Todo from "@/Todolist/todo";
import { todo } from "node:test";
import { text } from "stream/consumers";

const Home = () => {
  // Declare useState
  const [count, setCount] = React.useState<number>(0);
  // count = array[0], setCount = array[1]
  const [inputValue, setInputValue] = useState<string>("");

  // state for form-data
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [data, setData] = useState<any>("");
  // Todo
  const [todoValue, setTodoValue] = useState<string>("");
  const [todoData, setTodoData] = useState<string>("");

  const onIncrement = () => {
    setCount(count + 1); // Memperbarui data pada state "count" melalui fungsi setCount
  };

  const onHandleInput = (e: any) => {
    setInputValue(e.target.value);
  };

  // const onHandleName = (e: any) => {
  //   setName(e.target.value);
  // };

  const onHandleAge = (e: any) => {
    setAge(e.target.value);
  };

  const onHandleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onSave = () => {
    // cara 1
    // const temp = [...data];
    // temp.push({name, age, email});
    // setData(temp);

    // cara 2
    setData([...data, { name, age, email }]);
    printData;
  };

  const printData = () => {
    return data.map((value: any, index: number) => {
      return (
        <tr key={`${value} ${index}`} className="border border-collapse">
          <td className="text-center border border-collapse">{value.name}</td>
          <td className="text-center border border-collapse">{value.age}</td>
          <td className="text-center border border-collapse">{value.email}</td>
        </tr>
      );
    });
  };

  // Todo
  const onTodo = (e: any) => {
    setTodoValue(e.target.value);
  };

  const onTodoSave = () => {
    setTodoData([...todoData, { todoValue }]);
    console.log(todoData);
  };

  const printTodo = () => {
    return todoData.map((value, index) => {
      return (
        <div key={`${value}-${index}`}>
          <div>{value.todoValue}</div>
        </div>
      );
    });
  };

  // console.log("Data from state", data);

  return (
    <div className="w-[80%] mt-4 m-auto">
      <h1 className="text-5xl text-center uppercase">Management Data</h1>
      <div className="mt-3 hidden">
        <input
          type="text"
          placeholder="Type something"
          className="p-2 border-2 border-blue-500"
          onChange={onHandleInput}
        />
        <h1 className="text-9xl">{count}</h1>
        <button
          type="button"
          className="bg-gray-400 p-2 rounded-md"
          onClick={onIncrement}
        >
          Increment
        </button>
        <span>{inputValue}</span>
      </div>
      <div id="form-data" className="">
        <FormInput
          onChange={(e: any) => {
            setName(e.target.value);
          }}
          type="text"
          label="Name"
          placeholder="Type your name"
        />
        <FormInput
          type="number"
          label="Age"
          placeholder="Type your age"
          onChange={onHandleAge}
        />
        <FormInput
          type="email"
          label="Email"
          placeholder="Type your email"
          onChange={onHandleEmail}
        />
        <button
          type="button"
          className="bg-gray-400 p-2 rounded-md mt-3"
          onClick={onSave}
        >
          Submit
        </button>
      </div>
      <div className="">
        <table>
          <thead>
            <td className="border border-collapse">
              <th className="border border-collapse">No</th>
              <th className="border border-collapse">Name</th>
              <th className="border border-collapse">Age</th>
              <th className="border border-collapse">Email</th>
              <th className="border border-collapse">
                <button type="button">Edit</button>
                <button type="button">Delete</button>
              </th>
            </td>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div className="py-52">
        <span>{printTodo}</span>
        <Todo type="text" label="Form input" onChange={onTodo} />
        <button
          type="button"
          className="bg-slate-900 text-white rounded-sm p-2 block mt-2"
          onClick={onTodoSave}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Home;
