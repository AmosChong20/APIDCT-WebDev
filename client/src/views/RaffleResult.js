import React from 'react'
import './css/RaffleResult.css';
import Footer from '../components/Footer'

const RaffleResult = () => {
  return (
    <div>
        <div className="raffleResult mainBlockBracket">
          <div className>
            <h1>辩题抽签结果</h1>
          </div>
          <div className="containerOne">
            <div className="RaffleResultTableHeader">
              <span>初赛</span>
            </div>
            <div className="AB">
              <div className="A">正：所爱隔山海，山海皆可平</div>
              <div className="B">反：所爱隔山海，山海不可平</div>
            </div>
            <div className="CD">
              <div className="C">C</div>
              <div className="D">D</div>
            </div>
            <div className="EF">
              <div className="E">E</div>
              <div className="F">F</div>
            </div>
            <div className="GH">
              <div className="G">G</div>
              <div className="H">H</div>
            </div>
            <div className="ABHead">AB</div>
            <div className="CDHead">CD</div>
            <div className="EFHead">EF</div>
            <div className="GHHead">GH</div>
          </div>
          <div className="containerTwo">
            <div className="RaffleResultTableHeader">
              <span>半决赛</span>
            </div>
            <div className="I1">
              <div className="I1A">I1A</div>
              <div className="I1B">I1B</div>
            </div>
            <div className="I2">
              <div className="I2A">I2A</div>
              <div className="I2B">I2B</div>
            </div>
            <div className="I1Head">I1</div>
            <div className="I2Head">I2</div>
          </div>
          <div className="containerThree">
            <div className="RaffleResultTableHeader">
              <span>决赛</span>
            </div>
            <div className="J1">
              <div className="J1A">J1A</div>
              <div className="J1B">J1B</div>
            </div>
            <div className="J1Head">J1</div>
          </div>
        </div>
      <Footer/>

    </div>
  )
}

export default RaffleResult
