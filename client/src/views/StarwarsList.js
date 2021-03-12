import React from 'react'
import { useState, useEffect } from 'react'
import './css/SchoolList.css'
import Winner from '../components/Winner.js'
import {serverURL} from '../config'
import Form from 'react-bootstrap/Form';
import areas from "../components/json/areas.json";

const StarwarsList = () => {

  const [winners, setWinners] = useState([]);
  const [area,setArea] = useState("");
  const [areaC,setAreaC] = useState("");


  const getSelection=(event)=>{
    fetchWinners(event.target.value);
    if(event.target.value==="my"){
      setAreaC("马来西亚");
    }
    else if(event.target.value==="sg"){
      setAreaC("新加坡");
    }
    else if(event.target.value==="hk"){
      setAreaC("香港");
    }
    else if(event.target.value==="mc"){
      setAreaC("澳门");
    }
    else if(event.target.value==="au"){
      setAreaC("澳大利亚");
    }
    else if(event.target.value==="cm"){
      setAreaC("中国大陆");
    }
    else if(event.target.value==="uk"){
      setAreaC("英国");
    }
    else{
      setAreaC("");
    }
  }

  const fetchWinners = async (area1) => {
    // const res = await fetch('https://apicdt-server.com/starwars')
    // const res = await fetch('http://localhost:5000' + '/starwars')
    const res = await fetch(serverURL + 'starwars'+area1)

    const data = await res.json()
    var temp = data.length;
    var i;
    for (i = 0; i < temp; i++) {
      if(!(data[i].count)){
        delete data[i]
      }
    }
    
    var array = data.filter(function () { return true });

    array.sort(function (a, b) {
      return a.time - b.time;
    });

    // console.log(array)
    setWinners(array);
  }



  return (
    <div className="schoolsBlock container" >
      <Form.Control
      as="select"
      className="areaSelection"
      id="inlineFormCustomSelect"
      onChange={(e) => getSelection(e)}
      >
      <option className = "area" value="">请选择地区</option>
      {areas.map(area => (
        <option value={area.value} >{area.area}</option>
      ))}
      </Form.Control>
   
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
