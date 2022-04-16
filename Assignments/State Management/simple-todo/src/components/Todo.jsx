import { useState } from "react";
import { TodoInput } from "./TodoInput";
import TodoList from "./TodoList";

function Todo() {
  // const [todoList, setTodoList] = useState([]);
  // const getData = (todo) => {
  //   setTodoList([...todoList, todo]);
  // };
  return (
    <div>
      {/* <TodoInput getData={getData} />
      {todoList.map((e) => (
        <div>{e}</div>
      ))} */}
      <TodoList  />
    </div>
  );
}
export { Todo };
