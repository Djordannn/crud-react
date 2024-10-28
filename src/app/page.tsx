"use client";

import React, { useState } from "react";
import FormInput from "@/components/Form_input/index";
import Todo from "@/Todolist/todo";

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
  const [todo, setTodo] = useState<string>("");
  const [dataTodo, setTodoData] = useState<any>("");

  const saveTodo = () => {
    setTodoData([...dataTodo, { todo }]);
  };

  const addTodo = () => {
    return dataTodo.map((value: any, index: number) => {
      return (
        <div>
          <div key={`${value}-${index}`}>
            <input type="checkbox" />
            <p>{value.todo}</p>
            <button type="button">delete</button>
          </div>
        </div>
      );
    });
  };

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
            <tr className="border border-collapse">
              <th className="border border-collapse">No</th>
              <th className="border border-collapse">Name</th>
              <th className="border border-collapse">Age</th>
              <th className="border border-collapse">Email</th>
              <th className="border border-collapse">
                <button type="button">Edit</button>
                <button type="button">Delete</button>
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>

      <div className="mt-24">
        <h1>{todo}</h1>
        <Todo
          onChange={(e: any) => {
            setTodo(e.target.value);
          }}
        />
        <button type="button" onClick={saveTodo}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Home;
