import { useState } from "react";
import { TodoInput } from "./TodoInput";
import "./TodoList.css"

function TodoList() {
  // const [todoList, setTodoList] = useState(["a", "b"])
  const [todoList, setTodoList] = useState([]);
  const getData = (todo) => {
    console.log(todoList, todo)
    let x = {title : {todo},status:false}
    setTodoList([...todoList, x]);
  };
  return (
    <>
      <div>
        <TodoInput getData={getData} />
        {todoList.map((e) => (
          <div className="todolst">{e.title} <button className="lstbtn">Api</button></div>
        ))}
      </div>
    </>
  );
}
 
export default TodoList