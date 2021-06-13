import { useState, useEffect} from 'react'
import React from 'react'
import Alert from 'react-bootstrap/Alert';
import { useLocation } from "react-router-dom";
import {serverURL} from '../config.js'
import Footer from '../components/Footer'
import Button from '@material-ui/core/Button';
import './css/GradingImpression.css';
import StepperFan from '../components/StepperFan';
import {useHistory} from 'react-router';

const GradingSummaryFan = () => {
  const location = useLocation();
  const [gradingSummaryFanData, setGradingSummaryFanData] = useState ({token:location.token, indexT: location.indexT ,judgeChiName:location.judgeChiName ,summary: 0 });

  const [showS, setShowS] = useState(false);
  const [showF, setShowF] = useState(false);

  const onClickTeam = (selectedTeam) =>{
    if(parseInt(selectedTeam)!=gradingSummaryFanData.summary){
      setGradingSummaryFanData({ ...gradingSummaryFanData, summary: parseInt(selectedTeam) })
    }
  }
  const addGradingSummary = async (summary) =>{
    const res = await fetch (('http://localhost:5000/'+'gradingSummaryFan'),{
      method : 'POST',
      headers:{
        'Content-type':'application/json',
      },
      body: JSON.stringify(summary),
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
    if(!gradingSummaryFanData.summary){
      setShowF(true);
      setShowS(false);
      return;
    }

    setShowF(false);
    setShowS(true);
    // console.log(gradingSummaryFanData)
    addGradingSummary(gradingSummaryFanData);
    setGradingSummaryFanData({ ...gradingSummaryFanData, summary: 0})

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

        <StepperFan step={2} />
        <div className="register_header d-flex justify-content-center">
           <span> 总结票 </span>
        </div>
        <div className="regBlock row">
          <form className="col-12 regForm" noValidate onSubmit = {onSubmit}>
            <div className="d-flex justify-content-center">请选择正方或反方</div>
            <div className="school container d-flex justify-content-center">
              <Button variant="contained" size="large" style={{color:"#fff", margin:"20px"}} className={gradingSummaryFanData.summary===1?"pressedButton btn-hover":"normalButton btn-hover"} onClick={()=>onClickTeam('1')}><div style={{width:"120%",margin:"20%",fontSize:"250%"}}>正方</div></Button>
              <Button variant="contained" size="large" style={{color:"#fff", margin:"20px"}} className={gradingSummaryFanData.summary===2?"pressedButton btn-hover":"normalButton btn-hover"} onClick={()=>onClickTeam('2')}><div style={{width:"120%",margin:"20%",fontSize:"250%"}}>反方</div></Button>
            </div>
            <div className="d-flex justify-content-center">{gradingSummaryFanData.summary===0?"":<div><span>您选择的是：</span><span>{gradingSummaryFanData.summary===1?"正方":"反方"}</span></div>}</div>
 
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

export default GradingSummaryFan;
