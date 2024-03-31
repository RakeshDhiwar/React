import { useState } from 'react'

import './App.css'


// why to use React hooks?
//   React only will do all ui updation, and we can do it using react hooks
//   normal Variable can't update in the ui
// And hooks variable changes every where in the ui no need of references(document.getElementby) for each place.

function App() {
  let [Counter, setCounter] = useState(15)
  //let counter = 5

  const addValue = () => {
    // console.log("value added", Counter);
    //Counter = Counter + 1
    if (Counter < 20) {
      let newCounter = Counter + 1
      setCounter(newCounter)
    }
  }
  const removeValue = () => {
    if (Counter > 0) {
      let newCounter = Counter - 1
      setCounter(newCounter)
    }
  }
  return (
    <>
      

      <h1>Chai aur React</h1>
      <h2>Counter Value: {Counter}</h2>

      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
