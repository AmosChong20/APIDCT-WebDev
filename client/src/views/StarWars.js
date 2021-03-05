import React from 'react'
import { useState, useEffect } from 'react'
import './css/StarWars.css'
import { useHistory } from "react-router-dom";

import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import {serverURL} from '../config'
import areas from "../components/json/areas.json";

const StarWars = () => {
  // const [offS, setOffS] = useState(0);
  const [starwarsData,setStarwarsData] = useState({token : '',name :'',day:0,hour:0,minute:0,second:0});
  const [dataf,setDataf] = useState([]);
  const [datac,setDatac] = useState([]);
  const currentOS = -480;

  const [areaC,setAreaC] = useState("");
  const [area,setArea] = useState("");

  const [startDate,setStartDate] = useState(0);
  const [startHour,setStartHour] = useState(0);
  const [endHour,setEndHour] =useState(0);
  const [startMinute,setStartMinute] =useState(0);
  const [endMinute,setEndMinute] =useState(0);

  const [showU, setShowU] = useState(false);
  const [showS, setShowS] = useState(false);
  const [showI, setShowI] = useState(false);
  const [showA, setShowA] = useState(false);
  const [changed, setChanged] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [chosen,setChosen] = useState(false);


  useEffect(() => {
    // var offset = new Date().getTimezoneOffset();
    // setOffS(offset);
    startTime();
    if(changed){
      fetchTZ(starwarsData.token);
      // setTimeout(() => checkUsed(starwarsData.token), 0);
      checkUsed(starwarsData.token);
      setChanged(false);
    }
  })

  const fetchTZ = async (token) => {
    if(token === ''){
      return;
    }
    const res = await fetch(serverURL+'registerTest/'+token)
    // const res = await fetch('https://apicdt-server.com/registerTest/'+token)
    const data = await res.json()
    setDataf (data);
  }


  const checkUsed= async (token) => {
    if(token === ''){
      return;
    }
    const res = await fetch(serverURL+'starwars/'+token)
    // const res = await fetch('https://apicdt-server.com/starwars/'+token)
    const data = await res.json()
    console.log(data[0].count);
    setDatac (data)
  }


  const addStarwarsData = async (starwarsData) =>{
    const res = await fetch ((serverURL+'starwars'),{
      method : 'POST',
      headers:{
        'Content-type':'application/json',
      },
      body: JSON.stringify(starwarsData),
    })
    // const data = await res.json()
    if(res.status === 201){
      console.log("added successfully!")
    }
  }

  const history = useHistory();

  const onSubmit = async (e) =>{
    e.preventDefault();
    setChanged(true);

    //check area & time
    // if (area==={dataf[0].area}){
    //   return;
    // }
    if(starwarsData.day!==startDate){
      return;
    }
    // if((starwarsData.hour !== startHour)||(starwarsData.minute <startMinute)||(starwarsData.minute >= endMinute)){
    //   setShowI(false);
    //   setShowU(false);
    //   setShowS(false);
    //   setShowA(true);
    //   // setTimeout(() => setShowA(false), 3000);
    //   return;
    // }

    try{
      if(datac[0].token){
        setShowU(true);
        setShowS(false);
        setShowI(false);
        setShowA(false);
        setTimeout(() => setShowU(false), 3000);
        return;
      }
    } catch(error){
      // setTokenUsed(true);
    }
    try{
      if (dataf[0].token){
        starwarsData.name = dataf[0].chiTeamLeaderName;
        setSubmitted(true);
        addStarwarsData(starwarsData);
        setShowS(true);
        setShowU(false);
        setShowI(false);
        setShowA(false);
        setTimeout(() => setShowS(false), 3000);
        setTimeout(() => history.push('/starwarslist'), 1000);
        
      }
      else{
        console.log("token invalid");
        setShowI(true);
        setShowU(false);
        setShowS(false);
        setShowA(false);
        setTimeout(() => setShowI(false), 3000);
      }
    } catch (error) {
      // console.log(error)
      console.log("token invalid!!!");
      setShowI(true);
      setShowU(false);
      setShowS(false);
      setShowA(false);
      setTimeout(() => setShowI(false), 3000);
    }
  }
  const getSelection=(event)=>{
    setChosen(true);
    setArea(event.target.value);
    if(event.target.value==="sg"){
      setAreaC("新加坡");
      setStartDate (5);
      setStartHour (20);
      setEndHour (20);
      setStartMinute (0);
      setEndMinute (5);
    }
    else{
      setChosen(false);
      setAreaC("");
      setStartDate (0);
      setStartHour (0);
      setEndHour (0);
      setStartMinute (0);
      setEndMinute (0);
    }
  }
  
  const startTime = () => {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var n = Intl.DateTimeFormat().resolvedOptions().timeZone
    m = checkTime(m);
    s = checkTime(s);
    try {
      document.getElementById('current-time').innerHTML =
      h + ":" + m + ":" + s;
    } catch(error){
      console.log(error);
      return;
    }
  
    var t = setTimeout(startTime, 500);
    
    starwarsData.second = s;
    starwarsData.minute = m;
    starwarsData.hour = h;
    starwarsData.day = today.getDay()
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  return (
      <div className = "starwarscont">
        <Alert show={showS} className= "swalert" variant="success" onClose={() => setShowS(false)} dismissible>
          <Alert.Heading className = "alertHeading"> 提交成功！ </Alert.Heading>
        </Alert>
        <Alert show={showU} className= "swalert" variant="danger" onClose={() => setShowU(false)} dismissible>
          <Alert.Heading className = "alertHeading"> 代码已被使用！ </Alert.Heading>
        </Alert>
        <Alert show={showI} className= "swalert" variant="danger" onClose={() => setShowI(false)} dismissible>
          <Alert.Heading className = "alertHeading"> 代码不存在！ </Alert.Heading>
        </Alert>
        <Alert show={showA} className= "swalert" variant="danger" onClose={() => setShowA(false)} dismissible>
          <Alert.Heading className = "alertHeading"> 地区与时间不相符 ！ </Alert.Heading>
        </Alert>
        <header className="SWtitle">电子抽签</header>
        <div className="time">
          <div id="time-box"><em id="current-time" /></div>
        </div>

        <div className={`counttime ${!chosen ? "invi" : ""}`}>
          <div className = "area">
            <span>{areaC}</span>
            <span>地区抽签时段</span>
          </div>
          <div className="start">
            <span>开始时间 </span>
            <span>{startHour}:{startMinute}:00</span>
          </div>
          <div className="end">
            <span>结束时间 </span>
            <span>{endHour}:{endMinute}:00</span>
          </div>
        </div>
        <section className="SWsection">
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
          <form className="SWform" onSubmit = {onSubmit}>
            <input type="text" className={`form-control englsihF`}  value={starwarsData.token} placeholder="请输入代码" onChange={(e) => setStarwarsData({ ...starwarsData, token: e.target.value }) } autoFocus disabled={!chosen}/> 
            <button  type="submit" className="btn btn-primary SWbutton " data-toggle="modal" value='Save Form' disabled={submitted||!chosen}>
              <span className = "englishF" > Submit / </span> <span> 提交 </span>
            </button>
            {/* <a href="#" target="_blank">忘记代码？</a> */}
          </form>
        </section>
      </div>
  )
}

export default StarWars
