import React from 'react'
import './refreshbtn.css'

function Refreshbtn() {
    const handleRefresh = () => {
         window.location.reload();
    }
  return (
    <div className='refreshbtn'>
        <button onClick={handleRefresh}>New Game</button>
    </div>
  )
}

export default Refreshbtn
