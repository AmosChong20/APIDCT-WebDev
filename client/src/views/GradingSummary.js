import { useState, useEffect} from 'react'
import React from 'react'

import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import inis from "../components/json/inis.json";


import {serverURL} from '../config.js'

import Footer from '../components/Footer'
import Button from '@material-ui/core/Button';
import './css/GradingImpression.css';
import Stepper from '../components/Stepper.js';
import GradingBestCand from './GradingBestCand';
import { useHistory,useLocation } from 'react-router';

const GradingSummary = () => {
  const [summary, setSummary] = useState (0);
  const location = useLocation();
  const [showS, setShowS] = useState(false);
  const [showF, setShowF] = useState(false);

  const onClickTeam = (selectedTeam) =>{
    if(parseInt(selectedTeam)!=summary){
        setSummary(parseInt(selectedTeam))
    }
  }

  const addGradingSummary = async (summary) =>{
    const res = await fetch (('http://localhost:5000/'+'gradingSummary'),{
      method : 'POST',
      headers:{
        'Content-type':'application/json',
      },
      body: JSON.stringify({
        summary:summary,
        token:location.token,
        indexT:location.indexT,
        judgeChiName:location.judgeChiName
      }),
    })
    const data = await res.json()
    if (res.status === 201){
      setShowS(true);
      setShowF(false);
    }
    else{
      setShowF(true);
      setShowS(false);
    }
  }

  const onSubmit = (e) =>{
    e.preventDefault()
    if(!summary){
      setShowF(true);
      setShowS(false);
      return;
    }

    setShowF(false);
    setShowS(true);

    addGradingSummary(summary);
    setSummary(0);

    setTimeout(() => history.push({
      pathname:'/gradingBestFinal',
      token:location.token,
      indexT:location.indexT,
      judgeChiName:location.judgeChiName
    }), 1000);
  }
  
  const history = useHistory();

  return (
    <section className="header-gradient"> 
      <div className="container main_block">
        <Alert show={showS} className= "alert" variant="success" onClose={() => setShowS(false)} dismissible>
          <Alert.Heading className = "alertHeading"> 提交成功 ！/ Submitted Successfully ！ </Alert.Heading>
        </Alert>
        <Alert show={showF} className= "alert" variant="danger" onClose={() => setShowF(false)} dismissible>
          <Alert.Heading className = "alertHeading"> 提交失败 ！/ Submission Failed ！ </Alert.Heading>
        </Alert>

        <Stepper step={3} />
        <div className="register_header d-flex justify-content-center">
           <span> 总结票 </span>
        </div>
        <div className="regBlock row">
          <form className="col-12 regForm" noValidate onSubmit = {onSubmit}>
            <div className="d-flex justify-content-center">请选择正方或反方</div>
            <div className="school container d-flex justify-content-center">
              <Button variant="contained" size="large" style={{color:"#fff", margin:"20px"}} className={summary===1?"pressedButton btn-hover":"normalButton btn-hover"} onClick={()=>onClickTeam('1')}><div style={{width:"120%",margin:"20%",fontSize:"250%"}}>正方</div></Button>
              <Button variant="contained" size="large" style={{color:"#fff", margin:"20px"}} className={summary===2?"pressedButton btn-hover":"normalButton btn-hover"} onClick={()=>onClickTeam('2')}><div style={{width:"120%",margin:"20%",fontSize:"250%"}}>反方</div></Button>
            </div>
            <div className="d-flex justify-content-center">{summary===0?"":<div><span>您选择的是：</span><span>{summary===1?"正方":"反方"}</span></div>}</div>
 
            <button  type="submit" className="btn sub btn btn-primary" data-toggle="modal" data-target="#exampleModal" value='Save Form'>
              <span className = "englishF"> Submit / </span> <span> 提交 </span>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default GradingSummary;
