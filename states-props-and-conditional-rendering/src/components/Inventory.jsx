import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    // NO value given for inkpens  Can i add it as below
    inkpens: 40,
  });
  // Create add and remove functions here that changes the
  // state.
  const counter = (key, val) => {
    console.log(inv, key)
    inv[key] = inv[key] + val
    setInv({
      books: inv.books,
      notebooks: inv.notebooks,
      pens: inv.pens,
      
      inkpens: inv.inkpens,
    });
}


  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button
          className="circlularButton"
          onClick={() => {
            counter("books", 1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            counter("books", -1);
          }}
        >
          -
        </button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button
          className="circlularButton"
          onClick={() => {
            counter("notebooks", 1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            counter("notebooks", -1);
          }}
        >
          -
        </button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button
          className="circlularButton"
          onClick={() => {
            counter("pens", 1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            counter("pens", -1);
          }}
        >
          -
        </button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button
          className="circlularButton"
          onClick={() => {
            counter("inkpens", 1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            counter("inkpens", -1);
          }}
        >
          -
        </button>
        <span>{inv.inkpens}</span>
      </div>
      {/*calculate total and show it*/}
      total: {inv.inkpens + inv.pens + inv.notebooks + inv.books}
    </div>
  );
};
