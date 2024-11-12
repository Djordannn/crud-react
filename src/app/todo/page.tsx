"use client";

import { useState } from "react";
import Todo from "./todo";

const Todolist = () => {
  // Todo
  const [todo, setTodo] = useState<string>("");
  const [dataTodo, setTodoData] = useState<any[]>([]);
  const [isTrue, setIsTrue] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const saveTodo = () => {
    setTodoData([...dataTodo, { todo, completed: false }]);
    console.log(dataTodo);
  };

  const addTodo = () => {
    return dataTodo.map((value: any, index: number) => {
      return (
        <div key={`${value}-${index}`}>
          <div className="flex gap-3 justify-evenly">
            <input
              type="checkbox"
              checked={value.completed}
              onChange={() => onCheck(index)}
            />
            <p>{value.todo}</p>
            <button type="button" onClick={() => onDelete(index)}>
              delete
            </button>
          </div>
        </div>
      );
    });
  };

  const onDelete = (index: any) => {
    // console.log(index);
    setTodoData((prevData) => prevData.filter((kosong, i) => i !== index));
  };

  const onCheck = (index: number) => {
    if (dataTodo[index].completed) {
      setCount(count - 1);
      // setIsTrue(!isTrue);
    } else {
      setCount(count + 1);
    }

    dataTodo[index].completed = !dataTodo[index].completed;
  };

  return (
    <div className="mt-24 w-[80%] mx-auto">
      <div className="h-[300px] border-2 border-slate-950">
        <div>{addTodo()}</div>
      </div>
      <div>
        <Todo
          type="text"
          onChange={(e: any) => {
            setTodo(e.target.value);
          }}
        />
        <button type="button" onClick={saveTodo}>
          Add
        </button>
      </div>
      <h1>{count}</h1>
    </div>
  );
};

export default Todolist;
