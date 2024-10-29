"use client";

import { useState, useEffect } from "react";

const List = () => {
  const [data, setData] = useState<any[]>([]);
  const [count, setCount] = useState<number>(0);
  const [isTrue, setIsTrue] = useState<boolean>(false);
  // Model penggunaan useEffect
  // Syntax : useEffect(callbackFn, dependencies?[])
  // 1. useEffect hanya akan menjalankan fungsi callback saat awalan render
  useEffect(() => {
    alert("useEffect run first!!");
  }, []);

  // 2. useEffect akan menjalankan fungsi callback setiap kali ada data state yang berubah
  useEffect(() => {
    alert("useEffect run every changes state!!");
  });

  // 3. useEffect hanya akan menjalankan fungsi callback jika state yang ditentukan berubah
  useEffect(() => {
    alert("useEffect only run when state 'data' changes!!");
  }, [count]);

  return (
    <div>
      <h1>List page</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setIsTrue(!isTrue)}>
        {isTrue ? "True" : "False"}
      </button>
    </div>
  );
};

export default List;
