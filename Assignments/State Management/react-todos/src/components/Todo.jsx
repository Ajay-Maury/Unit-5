import { useState } from "react";
import { TodoInput } from "./TodoInput";

function Todo() {
  const [todoList, settodoList] = useState([]);
  const getData = (todo) => {
    settodoList([...todoList, todo]);
  };
  return (
    <div>
      <TodoInput getData={getData} />
      {todoList.map((e) => (
        <div>{e}</div>
      ))}
    </div>
  );
}
export { Todo };
