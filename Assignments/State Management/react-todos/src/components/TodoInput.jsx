import { useState } from "react";
import "./TodoInput.css"
import {HiPlus} from "react-icons/hi"
export const TodoInput = ({ getData }) => {
  const [text, setText] = useState("");

  return (
    <div className="todoinptbtn">
      <button
        onClick={() => {
          getData(text);
        }}
      >
        <HiPlus />
        
      </button>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        placeholder="Enter Todo"
      />
    </div>
  );
};
