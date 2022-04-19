import { Button1 } from "./components/Button"
import "./App.css"
function App() {

  return (
    <div className="App">
      <Button1 type={"primary"}>Primary Button</Button1>
      <Button1 type={"default"}>Default Button</Button1>
      <Button1 type={"dashed"}>Dashed Button</Button1>
      <Button1 type={"text"}>Text Button</Button1>
      <Button1 type={"link"}>Link Button</Button1>
    </div>
  );
}

export default App
