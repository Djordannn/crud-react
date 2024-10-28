"use client";

import { on } from "events";
import React from "react";
interface ITodo {
  label?: string;
  type: string;
  onChange?: (e: any) => void;
}

const Todo: React.FC<ITodo> = ({ label, type, onChange }) => {
  return (
    <div>
      <div>
        <label htmlFor="">{label}</label>
        <input
          type={type}
          className="border-slate-900 border-2 rounded-sm flex flex-col mt-2 mb-2"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Todo;
