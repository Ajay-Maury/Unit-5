import './App.css';

const mobileOs = ["Android", "Blckberry", "iPhone", "Windows Phone"];
const mobileManufact = [
  { Name: "Samsung", style: "square" },
  { Name: "HTC", style: "square" },
  { Name: "Micromax", style: "disc" },
  { Name: "Apple", style: "circle" },
];
const services = [
  { Name: "Services", link: "" },
  { Name: "Products", link: "" },
  { Name: "About", link: "" },
];

function App() {
  return (
    <div className="App">
      
      <div className="Nav">
        <div className="Logo">
          <strong>LOGOBAKERY</strong>
        </div>
        <div className="Services">
          {services.map((e) => {
            return (
              <span className="ser">
                <Links ele={e} />
              </span>
            );
          })}
        </div>
        <div className="btn">
          <button>Contact</button>
        </div>
      </div>

      <div>
        <h1>Mobile Operating System</h1>
        <ul>
          {mobileOs.map((e) => {
            return (
              <li>
                <Fn e={e} />
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h1>Mobile Manufacturers</h1>
        <ul>
          {mobileManufact.map((e) => {
            return (
              <li className={e.style}>
                <Fn e={e.Name} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function Fn(props) {
  // console.log(props);
  return <p>{props.e}</p>;
}

function Links(props) {
  console.log(props);
  return <a href={props.ele.link}>{props.ele.Name}</a>;
}

export default App;
