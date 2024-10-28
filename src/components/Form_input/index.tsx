"use client";
import React from "react";

interface IFromInput {
  type: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
}

const FormInput: React.FC<IFromInput> = ({
  type,
  label,
  placeholder,
  onChange,
}) => {
  return (
    <div>
      <div className="flex flex-col gap-3 mt-3">
        <label htmlFor="" className="font-semibold text-lg">
          {label}
        </label>
        <input
          className="border-2 border-slate-600 p-2 rounded-md"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FormInput;
