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

const GradingImpressionFan = () => {
  const location = useLocation();
  const [gradingImpressionFanData, setGradingImpressionFanData] = useState ({token:location.token, indexT: location.indexT ,impression: 0 });

  const [showS, setShowS] = useState(false);
  const [showF, setShowF] = useState(false);

  const onClickTeam = (selectedTeam) =>{
    if(parseInt(selectedTeam)!=gradingImpressionFanData.impression){
      setGradingImpressionFanData({ ...gradingImpressionFanData, impression: parseInt(selectedTeam) })
    }
  }
  const addGradingImpression = async (impression) =>{
    const res = await fetch (('http://localhost:5000/'+'gradingImpressionFan'),{
      method : 'POST',
      headers:{
        'Content-type':'application/json',
      },
      body: JSON.stringify(impression),
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
    if(!gradingImpressionFanData.impression){
      setShowF(true);
      setShowS(false);
      return;
    }

    setShowF(false);
    setShowS(true);

    addGradingImpression(gradingImpressionFanData);
    setGradingImpressionFanData({ ...gradingImpressionFanData, impression: 0})

    setTimeout(() => history.push({
      pathname: '/gradingFan',
      token: gradingImpressionFanData.token,
      indexT: gradingImpressionFanData.indexT
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

        <StepperFan step={0} />
        <div className="register_header d-flex justify-content-center">
           <span> 印象票 </span>
        </div>
        <div className="regBlock row">
          <form className="col-12 regForm" noValidate onSubmit = {onSubmit}>
            <div className="d-flex justify-content-center">请选择正方或反方</div>
            <div className="school container d-flex justify-content-center">
              <Button variant="contained" size="large" style={{color:"#fff", margin:"20px"}} className={gradingImpressionFanData.impression===1?"pressedButton btn-hover":"normalButton btn-hover"} onClick={()=>onClickTeam('1')}><div style={{width:"120%",margin:"20%",fontSize:"250%"}}>正方</div></Button>
              <Button variant="contained" size="large" style={{color:"#fff", margin:"20px"}} className={gradingImpressionFanData.impression===2?"pressedButton btn-hover":"normalButton btn-hover"} onClick={()=>onClickTeam('2')}><div style={{width:"120%",margin:"20%",fontSize:"250%"}}>反方</div></Button>
            </div>
            <div className="d-flex justify-content-center">{gradingImpressionFanData.impression===0?"":<div><span>您选择的是：</span><span>{gradingImpressionFanData.impression===1?"正方":"反方"}</span></div>}</div>
 
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

export default GradingImpressionFan;
