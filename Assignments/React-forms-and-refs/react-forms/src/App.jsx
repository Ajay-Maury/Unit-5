import { useState } from 'react'
import './App.css'
import AddEmployee from './components/AddEmployee'
import ShowEmployeeDetails from './components/ShowEmployeeDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AddEmployee />
      <ShowEmployeeDetails />
    </div>
  )
}

export default App
