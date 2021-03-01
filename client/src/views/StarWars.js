import React from 'react'
import { useState, useEffect } from 'react'
import './css/StarWars.css'

import Alert from 'react-bootstrap/Alert';
import {serverURL} from '../config'

const StarWars = () => {
  const [offS, setOffS] = useState(0);
  const [starwarsData,setStarwarsData] = useState({token : '',name :''});
  const [dataf,setDataf] = useState([]);
  const [datac,setDatac] = useState([]);
  const [second,setSecond] = useState(0);
  const [minute,setMinute] = useState(0);
  const [hour,setHour] = useState(0);
  const currentOS = -480;

  const [showU, setShowU] = useState(false);
  const [showS, setShowS] = useState(false);
  const [showI, setShowI] = useState(false);
  const [showA, setShowA] = useState(false);
  const [changed, setChanged] = useState(false);


  useEffect(() => {
    var offset = new Date().getTimezoneOffset();
    setOffS(offset);
    startTime();
    if(changed){
      fetchTZ(starwarsData.token);
      checkUsed(starwarsData.token);
      setChanged(false);
    }
  })

  const fetchTZ = async (token) => {
    if(token === ''){
      return;
    }
    const res = await fetch(serverURL + '/registerTest/'+token)
    const data = await res.json()
    setDataf (data);
  }

  const checkUsed= async (token) => {
    if(token === ''){
      return;
    }
    const res = await fetch(serverURL + '/starwars/'+token)
    const data = await res.json()
    setDatac (data)
  }

  const addStarwarsData = async (starwarsData) =>{
    const res = await fetch ((serverURL + '/starwars'),{
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

  
  const onSubmit = async (e) =>{
    e.preventDefault()
    setChanged(true);

    //check area & time
    // if (dataf[0].area==="my"){
    //   return;
    // }
    // if((hour != 21)||(minute <=34)||(minute >= 40)){
    //   return;
    // }

    try{
      if(datac[0].token){
        setShowU(true);
        setShowS(false);
        setShowI(false);
        setShowA(false);
        return;
      }
    } catch(error){
      // setTokenUsed(true);
    }
    try{
      if (dataf[0].token){
        starwarsData.name = dataf[0].chiTeamLeaderName;
        addStarwarsData(starwarsData);
        setShowS(true);
        setShowU(false);
        setShowI(false);
        setShowA(false);
      }
      else{
        console.log("token invalid");
        setShowI(true);
        setShowU(false);
        setShowS(false);
        setShowA(false);
      }
    } catch (error) {
      // console.log(error)
      console.log("token invalid!!!");
      setShowI(true);
      setShowU(false);
      setShowS(false);
      setShowA(false);
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
    setSecond(s);
    setMinute(m);
    setHour(h);
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  return (
      <div>
        <header className="SWtitle">电子抽签</header>
        <div className="time">
          <div id="time-box"><em id="current-time" /></div>
        </div>
        <section className="SWsection">
          <Alert show={showS} className= "alert" variant="success" onClose={() => setShowS(false)} dismissible>
            <Alert.Heading className = "alertHeading"> Submit Successful ！ </Alert.Heading>
          </Alert>
          <Alert show={showU} className= "alert" variant="danger" onClose={() => setShowU(false)} dismissible>
            <Alert.Heading className = "alertHeading"> Token Used ！ </Alert.Heading>
          </Alert>
          <Alert show={showI} className= "alert" variant="danger" onClose={() => setShowI(false)} dismissible>
            <Alert.Heading className = "alertHeading"> Token Invalid ！ </Alert.Heading>
          </Alert>
          <Alert show={showA} className= "alert" variant="danger" onClose={() => setShowI(false)} dismissible>
            <Alert.Heading className = "alertHeading"> 地区于时间不相符 ！ </Alert.Heading>
          </Alert>
          <form className="SWform" onSubmit = {onSubmit}>
            <input type="text" className={`form-control englsihF`}  value={starwarsData.token} placeholder="请输入代码" onChange={(e) => setStarwarsData({ ...starwarsData, token: e.target.value }) & setChanged(true) } autoFocus/> 
            <button  type="submit" className="btn btn-primary SWbutton " data-toggle="modal" value='Save Form' >
              <span className = "englishF" > Submit / </span> <span> 提交 </span>
            </button>
            {/* <a href="#" target="_blank">忘记代码？</a> */}
          </form>
        </section>
      </div>
  )
}

export default StarWars
