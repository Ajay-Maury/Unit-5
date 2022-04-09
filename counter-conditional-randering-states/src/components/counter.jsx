import { useState } from "react";
import "./counter.css"


const Counter = () => {
    const [counter, setCounter] = useState(0)
    const handleChange = (val) => {
        setCounter(counter + val)
    }
    return (
      <>
        <div>
          <h2 className={`${counter % 2 === 0 ? "greenText" : "redText"}`}>
            Counter : {counter}
          </h2>
          <button
            onClick={() => {
              handleChange(1);
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              handleChange(-1);
            }}
          >
            Decrement
          </button>
          <button
            onClick={() => {
              handleChange(counter);
            }}
          >
            Double
          </button>
        </div>
      </>
    );
}

export default Counter