import { useState } from "react";
import { TodoInput } from "./TodoInput";
import "./TodoList.css"

function TodoList() {
  // const [todoList, setTodoList] = useState(["a", "b"])
  const [todoList, setTodoList] = useState([]);
  const getData = (todo) => {
    setTodoList([...todoList, todo]);
  };
  return (
    <>
      <div>
        <TodoInput getData={getData} />
        {todoList.map((e) => (
          <div className="todolst">
            <div className="item"> {e}</div>
            <div className="lstbtn">
              <input type="checkbox" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
 
export default TodoList