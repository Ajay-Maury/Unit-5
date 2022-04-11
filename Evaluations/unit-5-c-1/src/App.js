import './App.css';
import {useState} from "react"
function App() {

  const [val, setVal] = useState({
    Score: 76,
    Wicket: 2,
    Ball : 50
   })

  const change = (key, v) => {
    if (val.Wicket == 12 || val.Score>101) {
      return
    }
    val[key] = val[key] + v
    setVal({
      Score: val.Score,
    Wicket: val.Wicket,
    Ball : val.Ball      
    })
  }

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{""}
          <h1 className="scoreCount">
            {
              // show "score" here
              val.Score
            }
          </h1>
        </div>
        <div>
          Wicket:{""}
          <h1 className="wicketCount">
            {
              // show wicket here
              val.Wicket
            }
          </h1>
        </div>

        <div>
          Over:
          {""}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              
               `${Math.floor(val.Ball/6)}.${val.Ball - Math.floor(val.Ball/6)*6}`
              
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button
          className="addScore1"
          onClick={() => {
            change("Score", 1);
          }}
        >
          Add 1
        </button>
        <button
          className="addScore4"
          onClick={() => {
            change("Score", 4);
          }}
        >
          Add 4
        </button>
        <button
          className="addScore6"
          onClick={() => {
            change("Score", 6);
          }}
        >
          Add 6
        </button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button
          onClick={() => {
            change("Wicket", 1);
          }}
        >
          Add 1 wicket
        </button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button
          onClick={() => {
            change("Ball", 1);
          }}
        >
          Add 1
        </button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      <h1>{val.Score > 100 ? "India Won" : ""}</h1>
    </div>
  );
}

export default App;
