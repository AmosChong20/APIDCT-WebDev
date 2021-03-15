import React from 'react'
import './css/School.css'

const Winnerf = ({area,winnerf,index}) => {
  index+=1;
  var dif = 0;
  if(area ==="my"){
    dif = (winnerf.time-1615770000371367)/1000000;
  }
  if(area ==="au"){
    dif = (winnerf.time-1615791600301820)/1000000;
  }
  if(area ==="cm"){
    dif = (winnerf.time-1615795200321433)/1000000;
  }
  if(area ==="hk"){
    dif = (winnerf.time-1615777200310067)/1000000;
  }
  if(area ==="mc"){
    dif = (winnerf.time-1615788001885822)/1000000;
  }
  if(area ==="sg"){
    dif = (winnerf.time-1615773601372166)/1000000;
  }
  if(area ==="uk"){
    dif = (winnerf.time-1615798802232038)/1000000;
  }
  
  
  return (
    <div className=" row schoolBlock">
      <div className = "col-2" >{index}</div>
      <div className = "col-6" >学校名称：{winnerf.name}</div>
      <div className = "col-4" >相差秒数：{dif} </div>
    </div>
  )
}

export default Winnerf
