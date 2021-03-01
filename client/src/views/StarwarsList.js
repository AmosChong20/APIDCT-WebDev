import React from 'react'
import { useState, useEffect } from 'react'
import './css/SchoolList.css'
import Winner from '../components/Winner.js'
import {serverURL} from '../config'

const StarwarsList = () => {

  const [winners, setWinners] = useState([]);

  useEffect(() => {
    const getWinners = async () => {
      const winnersDB = await fetchWinners()
      setWinners(winnersDB)
    }

    getWinners()
  }, [])

  const fetchWinners = async () => {
    const res = await fetch(serverURL + '/starwars')
    const data = await res.json()
    console.log(data)
    return data
  }



  return (
    <div className="schoolsBlock container" >
      <div className = "listHeader">
        电子抽签报名成功队伍
      </div>
      {winners.map((winner, index) => (
        <Winner index={index} winner={winner}/>
      ))}
    </div>
  )
}

export default StarwarsList
