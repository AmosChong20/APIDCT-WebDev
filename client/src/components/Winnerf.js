import React from 'react'
import './css/School.css'

const Winnerf = ({area,winnerf,index}) => {
  index+=1;
  var dif = 0;
  if(area ==="my"){
    dif = (winnerf.time-1615770000000000)/1000000;
  }
  if(area ==="au"){
    dif = (winnerf.time-1615791600000000)/1000000;
  }
  if(area ==="cm"){
    dif = (winnerf.time-1615795200000000)/1000000;
  }
  if(area ==="hk"){
    dif = (winnerf.time-1615777200000000)/1000000;
  }
  if(area ==="mc"){
    dif = (winnerf.time-1615788001000000)/1000000;
  }
  if(area ==="sg"){
    dif = (winnerf.time-1615773601000000)/1000000;
  }
  if(area ==="uk"){
    dif = (winnerf.time-1615798802000000)/1000000;
  }
  
  
  return (
    <div className=" row schoolBlock">
      <div className = "col-1" >{index}</div>
      <div className = "col-7" >学校名称：{winnerf.name}</div>
      <div className = "col-4" >相差秒数：{dif} </div>
    </div>
  )
}

export default Winnerf
