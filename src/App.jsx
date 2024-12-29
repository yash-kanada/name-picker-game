import { useState } from 'react'
import Refreshbtn from './components/refreshbtn'
import Winner from './components/Winner'

import './App.css'

function App() {
  const [names, setNames] = useState(["name1", "name2", "name3", "name4", "name5"])

  const [showName, setShowName] = useState('')

  const [winnerKey, setWinnerKey] = useState(0)

  const namePicker = () => {
    const randomName = names[Math.floor(Math.random() * names.length)]
    setShowName(randomName)
    setWinnerKey(prevKey => prevKey + 1)
  }
  return (
    <>
      <Refreshbtn />
      <div className='container'> 
        {showName ? <h3>{showName}</h3> : <h3>Spin the wheel</h3>}
      </div>
      <div>
        <button onClick={namePicker}>Spin</button>
      </div>
      <div>
        {showName ? <Winner name={showName} key={winnerKey}/> : <h3> Spin wheel to get Winner</h3>}
      </div>
    </>
  )
}

export default App
