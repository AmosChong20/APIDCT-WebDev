import React from 'react'
import './css/RaffleResult.css';
import Footer from '../components/Footer'

const RaffleResult = () => {
  return (
    <div>
        <div className="raffleResult mainBlockBracket">
          <div>
            <h2>辩题抽签结果</h2>
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
              <div className="C">正：笑傲江湖必当武功盖世</div>
              <div className="D">反：笑傲江湖不必当武功盖世</div>
            </div>
            <div className="EF">
              <div className="E">正：距离感是维持当代伴侣关系的解药</div>
              <div className="F">反：距离感是维持当代伴侣关系的毒药</div>
            </div>
            <div className="GH">
              <div className="G">正：遗憾为青春增色</div>
              <div className="H">反：遗憾让青春失色</div>
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
              <div className="I1A">正：社会性死亡是网络谴责可承受之重</div>
              <div className="I1B">反：社会性死亡不是网络谴责可承受之重</div>
            </div>
            <div className="I2">
              <div className="I2A">正：如果牺牲艺术性追求商业化才能让自己的电影叫座，电影从业者应该选择牺牲</div>
              <div className="I2B">反：如果牺牲艺术性追求商业化才能让自己的电影叫座，电影从业者不应该选择牺牲</div>
            </div>
            <div className="I1Head">I1</div>
            <div className="I2Head">I2</div>
          </div>
          <div className="containerThree">
            <div className="RaffleResultTableHeader">
              <span>决赛</span>
            </div>
            <div className="J1">
              <div className="J1A">正：唯心主义更能回应世界</div>
              <div className="J1B">反：唯物主义更能回应世界</div>
            </div>
            <div className="J1Head">J1</div>
          </div>
        </div>
      <Footer/>

    </div>
  )
}

export default RaffleResult
