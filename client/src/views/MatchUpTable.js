import React from 'react'
import image from '../assets/image/matchUpTable.jpg';
import '../views/css/MatchUpTable.css'
import Footer from '../components/Footer'

const MatchUpTable = () => {
  return (
    <div>
      <img src={image} alt="MatchUpTable" className="matchUpTable"  width="85%" />
      <Footer/>
    </div>
  )
}

export default MatchUpTable
