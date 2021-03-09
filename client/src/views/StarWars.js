import React from 'react'
import { useState, useEffect } from 'react'
import './css/StarWars.css'
import { useHistory } from "react-router-dom";

import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import {serverURL} from '../config'
import areas from "../components/json/areas.json";

// import axios from "axios";


const StarWars = () => {
  // const [offS, setOffS] = useState(0);
  const [starwarsData,setStarwarsData] = useState({token : '',name :'',day:0,hour:0,minute:0,second:0});
  const [dataf,setDataf] = useState([]);
  const [datac,setDatac] = useState([]);
  const currentOS = -480;
  const [offS,setOffS] = useState(0);

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

  const getStarwarsData = async () => {
    const res = await fetch(serverURL+'starwars/')
    const data = await res.json()
    // console.log(data);
    return data;
  }


  const checkUsed= async (token) => {
    if(token === ''){
      return;
    }
    const res = await fetch(serverURL+'starwars/'+token)
    // const res = await fetch('https://apicdt-server.com/starwars/'+token)
    const data = await res.json()
    setDatac (data)
  }

  const updateToken= async (token) => {
    if(token === ''){
      return;
    }
    const res = await fetch((serverURL+'starwars/'+token),{
      method: 'PUT',
    })
    // const res = await fetch('https://apicdt-server.com/starwars/'+token)
    const data = await res.json()
    // console.log(data[0].count);
    // setDatac (data)
  }

  // const getTime = () =>{
  //   var link = "http://worldtimeapi.org/api/timezone/Asia/Singapore";
  //   return axios.get(link);
  // }

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
      console.log("added successfully!");
      setTimeout(() => history.push('/starwarslist'), 1000);
    }
  }

  const history = useHistory();

  const onSubmit = async (e) =>{
    e.preventDefault();
    // console.log(getTime());
    setChanged(true);
    getStarwarsData().then(result=>{
      starwarsData.second = result.second;
      starwarsData.minute = result.minute;
      starwarsData.hour = result.hour;
    })
    var today = new Date();
    starwarsData.day = today.getDate();
    // starwarsData.time1 = ptime()[0];
    // starwarsData.time2 = ptime()[1];
  
    //check area & time
    // if (area==={dataf[0].area}){
      // setShowI(false);
      // setShowU(false);
      // setShowS(false);
      // setShowA(true);
      // console.log("area not same");
    //   return;
    // }
    if(starwarsData.day!==startDate){
      setShowI(false);
      setShowU(false);
      setShowS(false);
      setShowA(true);
      console.log("day not same");
      return;
    }
    if((starwarsData.hour !== startHour)||(starwarsData.minute <startMinute)||(starwarsData.minute >= endMinute)){
      setShowI(false);
      setShowU(false);
      setShowS(false);
      setShowA(true);
      // setTimeout(() => setShowA(false), 3000);
      return;
    }

    try{
      if(datac[0].token){
        setShowU(true);
        setShowS(false);
        setShowI(false);
        setShowA(false);
        setTimeout(() => setShowU(false), 3000);
        updateToken(datac[0].token);
        starwarsData.name = datac[0].name;
        setSubmitted(true);
        addStarwarsData(starwarsData);
        return;
      }
    } catch(error){
        // nothing here
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
      setStartDate (8);
      setStartHour (21);
      setEndHour (21);
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
    getStarwarsData().then(result=>{
      // console.log(result);
      var h = result.hour;
      var m = result.minute;
      var s = result.second;
      m = checkTime(m);
      s = checkTime(s);
      try {
        document.getElementById('current-time').innerHTML =
        h + ":" + m + ":" + s;
      } catch(error){
        console.log(error);
        return;
      }
    });
    // var n = Intl.DateTimeFormat().resolvedOptions().timeZone
    var t = setTimeout(startTime, 100);
  }

  function checkTime(i) {
    if (i < 10) {i = '0' + i};  // add zero in front of numbers < 10
    return i;
  }

  return (
      <div className = "starwarscont">

        {/* <iframe id = "times" src="https://freesecure.timeanddate.com/clock/i7plm3sb/n236/fn7/fs20/tct/pct/ftb/th1" frameBorder="0" width="93" height="30" allowtransparency="true"></iframe> */}

        <Alert show={showS} className= "swalert" variant="success" onClose={() => setShowS(false)} dismissible>
          <Alert.Heading className = "alertHeading"> 提交成功！ </Alert.Heading>
        </Alert>
        <Alert show={showU} className= "swalert" variant="danger" onClose={() => setShowU(false)} dismissible>
          <Alert.Heading className = "alertHeading"> 代码已被使用！成绩将按照此次提交时间为准！ </Alert.Heading>
        </Alert>
        <Alert show={showI} className= "swalert" variant="danger" onClose={() => setShowI(false)} dismissible>
          <Alert.Heading className = "alertHeading"> 代码不存在！ </Alert.Heading>
        </Alert>
        <Alert show={showA} className= "swalert" variant="danger" onClose={() => setShowA(false)} dismissible>
          <Alert.Heading className = "alertHeading"> 地区与时间不相符 ！ </Alert.Heading>
        </Alert>
        <header className="SWtitle">电子抽签</header>
        <div className="time">
          <div className = "sgtime">
            新加坡时间
          </div>
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
            <input type="text" className={`form-control englsihF`}  value={starwarsData.token} placeholder="请输入代码" onChange={(e) => setChanged(true) & setStarwarsData({ ...starwarsData, token: e.target.value }) } autoFocus disabled={!chosen}/> 
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
