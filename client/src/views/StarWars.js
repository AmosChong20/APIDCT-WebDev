import React from 'react'
import { useState, useEffect } from 'react'
import './css/StarWars.css'
import {serverURL} from '../config'

const StarWars = () => {
  const [offS, setOffS] = useState(0);
  const [starwarsData,setStarwarsData] = useState({token : ''});
  const [dataf,setDataf] = useState([]);
  const [datac,setDatac] = useState([]);
  const [second,setSecond] = useState(0);
  const [minute,setMinute] = useState(0);
  const [hour,setHour] = useState(0);
  const [tokenUsed, setTokenUsed] =useState(false);
  const currentOS = -480;


  useEffect(() => {
    var offset = new Date().getTimezoneOffset();
    setOffS(offset);
    startTime();
  })

  const fetchTZ = async (token) => {
    const res = await fetch(('http://localhost:5000/register/'+token))
    const data = await res.json()
    // console.log(data);
    setDataf (data)
  }

  const checkUsed= async (token) => {
    const res = await fetch(('http://localhost:5000/starwars/'+token))
    const data = await res.json()
    setDatac (data)
  }

  const addStarwarsData = async (starwarsData) =>{
    const res = await fetch ('http://localhost:5000/starwars',{
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


  const onSubmit = (e) =>{
    e.preventDefault()
    fetchTZ(starwarsData.token);
    checkUsed(starwarsData.token);
    // console.log(token);
  
    if(offS != currentOS){
      return;
    }
    // if(second != 50){
    //   return;
    // }
    // console.log(second)
    // console.log(datac[0].token)
    try{
      if(datac[0].token){
        setTokenUsed(true);
      }
      
    } catch(error){
      setTokenUsed(false);
    }

    try{
      if((dataf[0].token) && !tokenUsed){
        addStarwarsData(starwarsData);
        console.log(dataf[0])
      }
    } catch (error) {
      console.log(error)
      console.log("token invalid");
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
          <form className="SWform" onSubmit = {onSubmit}>
            <input type="text" className={`form-control englsihF`}  value={starwarsData.token} placeholder="请输入代码" onChange={(e) => checkUsed(starwarsData.token) & fetchTZ(starwarsData.token) & setStarwarsData({ ...starwarsData, token: e.target.value })} autoFocus/>
            <button  type="submit" className="SWbutton " data-toggle="modal" value='Save Form' >
              <span className = "englishF"> Submit / </span> <span> 提交 </span>
            </button>
            {/* <a href="#" target="_blank">忘记代码？</a> */}
          </form>
        </section>
      </div>
  )
}

export default StarWars
