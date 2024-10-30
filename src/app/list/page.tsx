"use client";

import { useState, useEffect, useContext } from "react";
import { languageContext } from "@/contexts/languageContext";
import axios from "axios";

const List = () => {
  // Data from context
  const { language } = useContext(languageContext);
  const [data, setData] = useState<any[]>([]);
  const [count, setCount] = useState<number>(0);
  const [isTrue, setIsTrue] = useState<boolean>(false);
  // Model penggunaan useEffect
  // Syntax : useEffect(callbackFn, dependencies?[])
  // 1. useEffect hanya akan menjalankan fungsi callback saat awalan render
  useEffect(() => {
    console.log("useEffect run first!!");
    getDataUser();
  }, []); // [] => dependencies

  // 2. useEffect akan menjalankan fungsi callback setiap kali ada data state yang berubah
  useEffect(() => {
    console.log("useEffect run every changes state!!");
  });

  // 3. useEffect hanya akan menjalankan fungsi callback jika state yang ditentukan berubah
  useEffect(() => {
    console.log("useEffect only run when state 'data' changes!!");
  }, [count]);

  const getDataUser = async () => {
    try {
      const respons = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(respons);
    } catch (err) {
      console.log(err);
    }
  };

  // const getView = () => {
  //   return data.map((value, index) => {
  //     return (
  //       <ul key={`${value}-${index}`}>
  //         <li>{value}</li>;
  //       </ul>
  //     );
  //   });
  // };

  return (
    <div>
      <h1 className="uppercase text-5xl">{language}</h1>
      <h1>List page</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setIsTrue(!isTrue)}>
        {isTrue ? "True" : "False"}
      </button>
      {/* <div>{getView()}</div> */}
    </div>
  );
};

export default List;
