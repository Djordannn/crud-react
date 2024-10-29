"use client";

import React, { useState, useRef, useEffect } from "react";
import FormInput from "@/components/Form_input/index";

import Todo from "@/app/todo/todo";

import { FcGoogle } from "react-icons/fc";
// import { FiEye } from "react-icons/fi";
// import { FiEyeOff } from "react-icons/fi";

const Home = () => {
  // create ref object
  const passwordRef = useRef<HTMLInputElement>(null);
  // Declare useState
  const [count, setCount] = React.useState<number>(0);
  // count = array[0], setCount = array[1]
  const [inputValue, setInputValue] = useState<string>("");

  // state for form-data
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  // other option
  const [user, setUser] = useState<{
    name: string;
    age: string;
    email: string;
  }>({
    name: "",
    age: "",
    email: "",
  });
  const [data, setData] = useState<any>("");

  // Password
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  // const [icon, setIcon] = useState(FiEyeOff);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  if (type === "password");
  let activeType;
  if (isVisible) {
    activeType = "text";
  } else {
    activeType = "password";
  }

  const onIncrement = () => {
    setCount(count + 1); // Memperbarui data pada state "count" melalui fungsi setCount
  };

  const onHandleInput = (e: any) => {
    setInputValue(e.target.value);
  };

  const onHandleName = (e: any) => {
    setName(e.target.value);
  };

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
    // setData([...data, { name, age, email }]);
    // printData;
    if (passwordRef.current) {
      console.log("Ref from password INPUT :", passwordRef.current.value);
    }
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
            setUser({ ...user, name: e.target.value });
          }}
          type="text"
          label="Name"
          placeholder="Type your name"
        />
        <FormInput
          type="number"
          label="Age"
          placeholder="Type your age"
          onChange={(e: any) => {
            setUser({ ...user, age: e.target.value });
          }}
        />
        <div>
          <div>
            <FormInput
              ref={passwordRef}
              type={activeType}
              label="Password"
              placeholder="Type your password"
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
            />
            <button
              type="button"
              onClick={() => setIsVisible(!isVisible)}
              className="bg-slate-600 rounded-lg"
            >
              click
            </button>
          </div>
          s
        </div>
        <button
          type="button"
          className="bg-gray-400 p-2 rounded-md mt-3"
          onClick={onSave}
        >
          Submit
        </button>
        <FcGoogle />
      </div>
      <div className="mt-5">
        <table className="w-[100%]">
          <thead>
            <tr className="border border-collapse">
              <th className="border border-collapse">No</th>
              <th className="border border-collapse">Name</th>
              <th className="border border-collapse">Age</th>
              <th className="border border-collapse">Email</th>
              <th className="border border-collapse">Action</th>
            </tr>
          </thead>
          <tbody>{printData}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
