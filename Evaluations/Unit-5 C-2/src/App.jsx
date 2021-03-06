import { useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";

function App() {
  const [status, setStatus] = useState(false);
  function statusHandler() {
    setStatus(!status);
  }
  return (
    <div className="App">
      <button className="togglebtn" onClick={() => statusHandler()}>
        {status ? "Add a new student" : "Go to students list"}
      </button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}

      {status ? <ShowStudents /> : <AddStudent />}
    </div>
  );
}

export default App;
