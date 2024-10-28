"use client";

import { type } from "os";
import React from "react";
interface ITodo {
  type: string;
  label?: string;
  onChange?: () => void;
}

const Todo: React.FC<ITodo> = (props) => {
  return (
    <div>
      <div>
        <label htmlFor="">Add todo</label>
        <input
          type={props.type}
          className="border-slate-900 border-2 flex flex-col"
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default Todo;
