import { useState, useEffect } from 'react'
import React from 'react'
import { useLocation } from "react-router-dom";
import './css/RegisterJudge.css';
import Alert from 'react-bootstrap/Alert';
import { serverURL } from '../config.js'
import Footer from '../components/Footer'
import ReactDOM from "react-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import StepperFan from '../components/StepperFan';
import Checkbox from '@material-ui/core/Checkbox';
import {useHistory} from 'react-router';
import GradingDialog from '../components/GradingDialog'
import './css/GradingFan.css';


const GradingFan = () => {
  const [showS, setShowS] = useState(false);
  const [showF, setShowF] = useState(false);
  const location = useLocation();
  const [gradingFanData, setGradingFanData] = useState({
    token: location.token,
    indexT: location.indexT,
    judgeChiName:location.judgeChiName,
    affLilun : 0,
    affZhixun : 0,
    affDabian : 0,
    affBolun : 0,
    affFirstAttack : 0,
    affChenci : 0,
    affSecondAttack : 0,
    affFirstFinal : 0,
    affSecondFinal : 0,
    affLanguage : 0,
    affFree : 0,
    affTeamwork : 0,
    affTotal : 0,
    negLilun : 0,
    negZhixun : 0,
    negDabian : 0,
    negBolun : 0,
    negFirstAttack : 0,
    negChenci : 0,
    negSecondAttack : 0,
    negFirstFinal : 0,
    negSecondFinal : 0,
    negLanguage : 0,
    negFree : 0,
    negTeamwork : 0,
    negTotal : 0
  })
  const [checked1,setChecked1] = useState(false);
  const [checked2,setChecked2] = useState(false);
  const [checked3,setChecked3] = useState(false);
  const [checked4,setChecked4] = useState(false);
  const [checked5,setChecked5] = useState(false);
  const [checked6,setChecked6] = useState(false);
  const [checked7,setChecked7] = useState(false);
  const [checked8,setChecked8] = useState(false);
  const [checked9,setChecked9] = useState(false);
  const [checked10,setChecked10] = useState(false);
  const [checked11,setChecked11] = useState(false);
  const [checked12,setChecked12] = useState(false);
  const [checked13,setChecked13] = useState(false);
  const [checked14,setChecked14] = useState(false);
  const [checked15,setChecked15] = useState(false);
  const [checked16,setChecked16] = useState(false);
  const [checked17,setChecked17] = useState(false);
  const [checked18,setChecked18] = useState(false);
  const [dialogOpen,setDialogOpen]=useState(false);
  const history = useHistory();


  const affChange = (e,a) => {
    if(!e){
      e = 0
    }
    var temp = parseInt(gradingFanData.affLilun) + parseInt(gradingFanData.affZhixun) + parseInt(gradingFanData.affDabian) + parseInt(gradingFanData.affBolun) + parseInt(gradingFanData.affFirstAttack) + parseInt(gradingFanData.affChenci) + parseInt(gradingFanData.affSecondAttack) + parseInt(gradingFanData.affFirstFinal) + parseInt(gradingFanData.affSecondFinal) + parseInt(gradingFanData.affLanguage) + parseInt(gradingFanData.affFree) + parseInt(gradingFanData.affTeamwork)

    if(a===1){
      temp = temp - parseInt(gradingFanData.affLilun) + parseInt(e);
      gradingFanData.affLilun = parseInt(e);
    }
    if(a===2){
      temp = temp - parseInt(gradingFanData.affZhixun) + parseInt(e);
      gradingFanData.affZhixun = parseInt(e);
    }
    if(a===3){
      temp = temp - parseInt(gradingFanData.affDabian) + parseInt(e);
      gradingFanData.affDabian = parseInt(e);
    }
    if(a===4){
      temp = temp - parseInt(gradingFanData.affBolun) + parseInt(e);
      gradingFanData.affBolun = parseInt(e);
    }
    if(a===5){
      temp = temp - parseInt(gradingFanData.affFirstAttack) + parseInt(e);
      gradingFanData.affFirstAttack = parseInt(e);
    }
    if(a===6){
      temp = temp - parseInt(gradingFanData.affChenci) + parseInt(e);
      gradingFanData.affChenci = parseInt(e);
    }
    if(a===7){
      temp = temp - parseInt(gradingFanData.affSecondAttack) + parseInt(e);
      gradingFanData.affSecondAttack = parseInt(e);
    }
    if(a===8){
      temp = temp - parseInt(gradingFanData.affFirstFinal) + parseInt(e);
      gradingFanData.affFirstFinal = parseInt(e);
    }
    if(a===9){
      temp = temp - parseInt(gradingFanData.affSecondFinal) + parseInt(e);
      gradingFanData.affSecondFinal = parseInt(e);
    }
    if(a===10){
      temp = temp - parseInt(gradingFanData.affLanguage) + parseInt(e);
      gradingFanData.affLanguage = parseInt(e);
    }
    if(a===11){
      temp = temp - parseInt(gradingFanData.affFree) + parseInt(e);
      gradingFanData.affFree = parseInt(e);
    }
    if(a===12){
      temp = temp - parseInt(gradingFanData.affTeamwork) + parseInt(e);
      gradingFanData.affTeamwork = parseInt(e);
    }
    
    setGradingFanData({ ...gradingFanData, affTotal: temp })

    // console.log(temp)
  };

  const negChange = (e,a) => {
    if(!e){
      e = 0
    }
    var temp = parseInt(gradingFanData.negLilun) + parseInt(gradingFanData.negZhixun) + parseInt(gradingFanData.negDabian) + parseInt(gradingFanData.negBolun) + parseInt(gradingFanData.negFirstAttack) + parseInt(gradingFanData.negChenci) + parseInt(gradingFanData.negSecondAttack) + parseInt(gradingFanData.negFirstFinal) + parseInt(gradingFanData.negSecondFinal) + parseInt(gradingFanData.negLanguage) + parseInt(gradingFanData.negFree) + parseInt(gradingFanData.negTeamwork)

    if(a===1){
      temp = temp - parseInt(gradingFanData.negLilun) + parseInt(e);
      gradingFanData.negLilun = parseInt(e);
    }
    if(a===2){
      temp = temp - parseInt(gradingFanData.negZhixun) + parseInt(e);
      gradingFanData.negZhixun = parseInt(e);
    }
    if(a===3){
      temp = temp - parseInt(gradingFanData.negDabian) + parseInt(e);
      gradingFanData.negDabian = parseInt(e);
    }
    if(a===4){
      temp = temp - parseInt(gradingFanData.negBolun) + parseInt(e);
      gradingFanData.negBolun = parseInt(e);
    }
    if(a===5){
      temp = temp - parseInt(gradingFanData.negFirstAttack) + parseInt(e);
      gradingFanData.negFirstAttack = parseInt(e);
    }
    if(a===6){
      temp = temp - parseInt(gradingFanData.negChenci) + parseInt(e);
      gradingFanData.negChenci = parseInt(e);
    }
    if(a===7){
      temp = temp - parseInt(gradingFanData.negSecondAttack) + parseInt(e);
      gradingFanData.negSecondAttack = parseInt(e);
    }
    if(a===8){
      temp = temp - parseInt(gradingFanData.negFirstFinal) + parseInt(e);
      gradingFanData.negFirstFinal = parseInt(e);
    }
    if(a===9){
      temp = temp - parseInt(gradingFanData.negSecondFinal) + parseInt(e);
      gradingFanData.negSecondFinal = parseInt(e);
    }
    if(a===10){
      temp = temp - parseInt(gradingFanData.negLanguage) + parseInt(e);
      gradingFanData.negLanguage = parseInt(e);
    }
    if(a===11){
      temp = temp - parseInt(gradingFanData.negFree) + parseInt(e);
      gradingFanData.negFree = parseInt(e);
    }
    if(a===12){
      temp = temp - parseInt(gradingFanData.negTeamwork) + parseInt(e);
      gradingFanData.negTeamwork = parseInt(e);
    }
    
    setGradingFanData({ ...gradingFanData, negTotal: temp })

    // console.log(temp)
  };


  const onChecked = (e,a) => {
    var temp1 = parseInt(gradingFanData.affLilun) + parseInt(gradingFanData.affZhixun) + parseInt(gradingFanData.affDabian) + parseInt(gradingFanData.affBolun) + parseInt(gradingFanData.affFirstAttack) + parseInt(gradingFanData.affChenci) + parseInt(gradingFanData.affSecondAttack) + parseInt(gradingFanData.affFirstFinal) + parseInt(gradingFanData.affSecondFinal) + parseInt(gradingFanData.affLanguage) + parseInt(gradingFanData.affFree) + parseInt(gradingFanData.affTeamwork)
    var temp2 = parseInt(gradingFanData.negLilun) + parseInt(gradingFanData.negZhixun) + parseInt(gradingFanData.negDabian) + parseInt(gradingFanData.negBolun) + parseInt(gradingFanData.negFirstAttack) + parseInt(gradingFanData.negChenci) + parseInt(gradingFanData.negSecondAttack) + parseInt(gradingFanData.negFirstFinal) + parseInt(gradingFanData.negSecondFinal) + parseInt(gradingFanData.negLanguage) + parseInt(gradingFanData.negFree) + parseInt(gradingFanData.negTeamwork)

    if(a===1){
      temp1 = temp1 - parseInt(gradingFanData.affLilun) ;
      gradingFanData.affLilun = 0;
      e ? setChecked1(true) : setChecked1(false);
    }
    else if(a===2){
      temp1 = temp1 - parseInt(gradingFanData.affZhixun) ;
      gradingFanData.affZhixun = 0;
      e ? setChecked2(true) : setChecked2(false);
    }
    else if(a===3){
      temp1 = temp1 - parseInt(gradingFanData.affDabian) ;
      gradingFanData.affDabian = 0;
      e ? setChecked3(true) : setChecked3(false);
    }
    else if(a===4){
      temp1 = temp1 - parseInt(gradingFanData.affBolun) ;
      gradingFanData.affBolun = 0;
      e ? setChecked4(true) : setChecked4(false);
    }
    else if(a===5){
      temp1 = temp1 - parseInt(gradingFanData.affFirstAttack) ;
      gradingFanData.affFirstAttack = 0;
      e ? setChecked5(true) : setChecked5(false);
    }
    else if(a===6){
      temp1 = temp1 - parseInt(gradingFanData.affChenci) ;
      gradingFanData.affChenci = 0;
      e ? setChecked6(true) : setChecked6(false);
    }
    else if(a===7){
      temp1 = temp1 - parseInt(gradingFanData.affSecondAttack) ;
      gradingFanData.affSecondAttack = 0;
      e ? setChecked7(true) : setChecked7(false);
    }
    else if(a===8){
      temp1 = temp1 - parseInt(gradingFanData.affFirstFinal) ;
      gradingFanData.affFirstFinal = 0;
      e ? setChecked8(true) : setChecked8(false);
    }
    else if(a===9){
      temp1 = temp1 - parseInt(gradingFanData.affSecondFinal) ;
      gradingFanData.affSecondFinal = 0;
      e ? setChecked9(true) : setChecked9(false);
    }
    else if(a===10){
      temp2 = temp2 - parseInt(gradingFanData.negLilun) ;
      gradingFanData.negLilun = 0;
      e ? setChecked10(true) : setChecked10(false);
    }
    else if(a===11){
      temp2 = temp2 - parseInt(gradingFanData.negZhixun) ;
      gradingFanData.negZhixun = 0;
      e ? setChecked11(true) : setChecked11(false);
    }
    else if(a===12){
      temp2 = temp2 - parseInt(gradingFanData.negDabian) ;
      gradingFanData.negDabian = 0;
      e ? setChecked12(true) : setChecked12(false);
    }
    else if(a===13){
      temp2 = temp2 - parseInt(gradingFanData.affBolun) ;
      gradingFanData.affBolun = 0;
      e ? setChecked13(true) : setChecked13(false);
    }
    else if(a===14){
      temp2 = temp2 - parseInt(gradingFanData.negFirstAttack) ;
      gradingFanData.negFirstAttack = 0;
      e ? setChecked14(true) : setChecked14(false);
    }
    else if(a===15){
      temp2 = temp2 - parseInt(gradingFanData.negChenci) ;
      gradingFanData.negChenci = 0;
      e ? setChecked15(true) : setChecked15(false);
    }
    else if(a===16){
      temp2 = temp2 - parseInt(gradingFanData.negSecondAttack) ;
      gradingFanData.negSecondAttack = 0;
      e ? setChecked16(true) : setChecked16(false);
    }
    else if(a===17){
      temp2 = temp2 - parseInt(gradingFanData.negFirstFinal) ;
      gradingFanData.negFirstFinal = 0;
      e ? setChecked17(true) : setChecked17(false);
    }
    else if(a===18){
      temp2 = temp2 - parseInt(gradingFanData.negSecondFinal) ;
      gradingFanData.negSecondFinal = 0;
      e ? setChecked18(true) : setChecked18(false);
    }

    if(a>9){
      setGradingFanData({ ...gradingFanData, negTotal: temp2 })
    }
    else{
      setGradingFanData({ ...gradingFanData, affTotal: temp1 })
    }
    

    // console.log(temp)
  };


  const addGradingFanData = async (gradingFanData) =>{
    const res = await fetch (('https://apicdt-server.com'+'/gradingFan'),{
      method : 'POST',
      headers:{
        'Content-type':'application/json',
      },
      body: JSON.stringify(gradingFanData),
    })
    const data = await res.json()
    if (res.status === 201){
      setShowS(true);
      setTimeout(() => setShowS(false), 1000);
      setShowF(false);
    }
    else{
      setShowF(true);
      setShowS(false);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()

    addGradingFanData(gradingFanData);
    // console.log(gradingFanData)
    setTimeout(() => history.push({
      pathname: '/gradingImpressionFan',
      token: gradingFanData.token,
      indexT: gradingFanData.indexT,
      judgeChiName:gradingFanData.judgeChiName,
    }), 1000);

  }

  return (
    <section className="header-gradient">
      <GradingDialog open={dialogOpen} setOpen={setDialogOpen} content={
      <div>
        <Table  aria-label="caption table">
            <colgroup>
              <col style={{ width: '40%' }} />
              <col style={{ width: '30%' }} />
              <col style={{ width: '30%' }} />
            </colgroup>
            <TableHead>
              <TableRow>
                <TableCell align="center" ><div><h2>项目</h2></div></TableCell>
                <TableCell align="left" ><div><h2>正方</h2></div></TableCell>
                <TableCell align="left" ><div><h2>反方</h2></div></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className = "shade">
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>立论</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <div> {gradingFanData.affLilun} </div> 
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <div> {gradingFanData.negLilun} </div> 
                </TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>质询</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <div> {gradingFanData.affZhixun} </div> 
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <div> {gradingFanData.negZhixun} </div> 
                </TableCell>
              </TableRow>

              <TableRow className = "shade">
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>答辩</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（20分）</div> 
                  <div> {gradingFanData.affDabian} </div> 
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（20分）</div> 
                  <div> {gradingFanData.negDabian} </div> 
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>驳论</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <div> {gradingFanData.affBolun} </div> 
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <div> {gradingFanData.negBolun} </div> 
                </TableCell>
              </TableRow>

              <TableRow className = "shade">
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>第一次攻辩</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <div> {gradingFanData.affFisrtAttack} </div> 
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <div> {gradingFanData.negFisrtAttack} </div> 
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>陈词</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <div> {gradingFanData.affChenci} </div> 
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <div> {gradingFanData.negChenci} </div> 
                </TableCell>
              </TableRow>

              <TableRow className = "shade">
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>第二次攻辩</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <div> {gradingFanData.affSecondAttack} </div> 
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <div> {gradingFanData.negSecondAttack} </div> 
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>第一次总结</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <div> {gradingFanData.affFirstFinal} </div> 
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <div> {gradingFanData.negFirstFinal} </div> 
                </TableCell>
              </TableRow>

              <TableRow className = "shade">
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>第二次总结</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <div> {gradingFanData.affSecondFinal} </div> 
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <div> {gradingFanData.negSecondFinal} </div> 
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>语言风度</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（40分）</div> 
                  <div> {gradingFanData.affLanguage} </div> 
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（40分）</div> 
                  <div> {gradingFanData.neLanguage} </div> 
                </TableCell>
              </TableRow>

              <TableRow className = "shade">
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>自由辩论</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（80分）</div> 
                  <div> {gradingFanData.affFree} </div> 
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（80分）</div> 
                  <div> {gradingFanData.negFree} </div> 
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>团体配合与合作精神</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <div> {gradingFanData.affTeamwork} </div> 
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <div> {gradingFanData.negTeamwork} </div> 
                </TableCell>
              </TableRow>

              <TableRow className = "shade">
                <TableCell align="right" colSpan={1}><div style={{ fontSize: "200%" }}>总分</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>（满分400分）</div> 
                  <div  style={{ fontSize: "200%" }}>{gradingFanData.affTotal}</div> 
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>（满分400分）</div> 
                  <div  style={{ fontSize: "200%" }}>{gradingFanData.negTotal}</div> 
                </TableCell>
              </TableRow>
        
            </TableBody>
          </Table>
       
      </div>} 
      submit={onSubmit} />

      <div className="container main_block">
        <Alert show={showS} className="alert" variant="success" onClose={() => setShowS(false)} dismissible>
          <Alert.Heading className="alertHeading"> 提交成功 ！/ Registration Successful ！ </Alert.Heading>
        </Alert>
        <Alert show={showF} className="alert" variant="danger" onClose={() => setShowF(false)} dismissible>
          <Alert.Heading className="alertHeading"> 提交失败 ！/ Registration Failed ！ </Alert.Heading>
        </Alert>
        <div className="fan_title">
          <span> 返尔赛 </span>
        </div>
        <StepperFan step={0} />
        <div className="fan_title">
          <span> 分数票 </span>
        </div>
        <form className="col-12 regForm" noValidate >
          <Table  aria-label="caption table">
            <caption>备注：XXXXX</caption>
            <colgroup>
              <col style={{ width: '40%' }} />
              <col style={{ width: '30%' }} />
              <col style={{ width: '30%' }} />
            </colgroup>
            <TableHead>
                <TableRow>
                  <TableCell colSpan={3}> <h5 style={{ fontSize: "120%", color: "grey" }}>若选手掉线超过缓冲时间，请在对应环节的分数栏打勾‘✔’，则该辩手在该环节的分数直接计为零分。</h5></TableCell>
                </TableRow>
              </TableHead>
            <TableHead>
              <TableRow>
                <TableCell align="center" ><div><h2>项目</h2></div></TableCell>
                <TableCell align="left" ><div><h2>正方</h2></div></TableCell>
                <TableCell align="left" ><div><h2>反方</h2></div></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className = "shade">
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>立论</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <Checkbox color="primary" onChange={e => {onChecked(e.target.checked,1)}}/>
                  {checked1  ? <span style={{ fontSize: "120%" }} > 0 </span> : <Input type="number"  onWheel={(e) => e.target.blur()} placeholder="0" value={gradingFanData.affLilun===0? '':gradingFanData.affLilun} inputProps={{ min: 0, max: 30 }} onChange={(e) => affChange((e.target.value > 30 ? gradingFanData.affLilun : e.target.value),1)}/>}
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <Checkbox color="primary" onChange={e => {onChecked(e.target.checked,10)}}/>
                  {checked10  ? <span style={{ fontSize: "120%" }} > 0 </span> : <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" value={gradingFanData.negLilun===0? '':gradingFanData.negLilun} inputProps={{ min: 0, max: 30 }} onChange={(e) => negChange((e.target.value > 30 ? gradingFanData.negLilun : e.target.value),1)}/>}
                </TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>质询</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <Checkbox color="primary" onChange={e => {onChecked(e.target.checked,2)}}/>
                  {checked2  ? <span style={{ fontSize: "120%" }} > 0 </span> : <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" value={gradingFanData.affZhixun===0? '':gradingFanData.affZhixun} inputProps={{ min: 0, max: 30 }} onChange={(e) => affChange((e.target.value > 30 ? gradingFanData.affZhixun : e.target.value),2)}/>}
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <Checkbox color="primary" onChange={e => {onChecked(e.target.checked,11)}}/>
                  {checked11  ? <span style={{ fontSize: "120%" }} > 0 </span> : <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" value={gradingFanData.negZhixun===0? '':gradingFanData.negZhixun} inputProps={{ min: 0, max: 30 }} onChange={(e) => negChange((e.target.value > 30 ? gradingFanData.negZhixun : e.target.value),2)}/>}
                </TableCell>
              </TableRow>

              <TableRow className = "shade">
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>答辩</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（20分）</div> 
                  <Checkbox color="primary" onChange={e => {onChecked(e.target.checked,3)}}/>
                  {checked3  ? <span style={{ fontSize: "120%" }} > 0 </span> : <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" value={gradingFanData.affDabian===0? '':gradingFanData.affDabian} inputProps={{ min: 0, max: 20 }} onChange={(e) => affChange((e.target.value > 20 ? gradingFanData.affDabian : e.target.value),3)}/>}
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（20分）</div> 
                  <Checkbox color="primary" onChange={e => {onChecked(e.target.checked,12)}}/>
                  {checked12  ? <span style={{ fontSize: "120%" }} > 0 </span> : <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" value={gradingFanData.negDabian===0? '':gradingFanData.negDabian} inputProps={{ min: 0, max: 20 }} onChange={(e) => negChange((e.target.value > 20 ? gradingFanData.negDabian : e.target.value),3)}/>}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>驳论</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <Checkbox color="primary" onChange={e => {onChecked(e.target.checked,4)}}/>
                  {checked4  ? <span style={{ fontSize: "120%" }} > 0 </span> : <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" value={gradingFanData.affBolun===0? '':gradingFanData.affBolun} inputProps={{ min: 0, max: 30 }} onChange={(e) => affChange((e.target.value > 30 ? gradingFanData.affBolun : e.target.value),4)}/>}
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <Checkbox color="primary" onChange={e => {onChecked(e.target.checked,13)}}/>
                  {checked13  ? <span style={{ fontSize: "120%" }} > 0 </span> : <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" value={gradingFanData.negBolun===0? '':gradingFanData.negBolun} inputProps={{ min: 0, max: 30 }} onChange={(e) => negChange((e.target.value > 30 ? gradingFanData.negBolun : e.target.value),4)}/>}
                </TableCell>
              </TableRow>

              <TableRow className = "shade">
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>第一次攻辩</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <Checkbox color="primary" onChange={e => {onChecked(e.target.checked,5)}}/>
                  {checked5  ? <span style={{ fontSize: "120%" }} > 0 </span> : <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" value={gradingFanData.affFirstAttack===0? '':gradingFanData.affFirstAttack} inputProps={{ min: 0, max: 30 }} onChange={(e) => affChange((e.target.value > 30 ? gradingFanData.affFirstAttack : e.target.value),5)}/>}
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <Checkbox color="primary" onChange={e => {onChecked(e.target.checked,14)}}/>
                  {checked14  ? <span style={{ fontSize: "120%" }} > 0 </span> : <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" value={gradingFanData.negFirstAttack===0? '':gradingFanData.negFirstAttack} inputProps={{ min: 0, max: 30 }} onChange={(e) => negChange((e.target.value > 30 ? gradingFanData.negFirstAttack : e.target.value),5)}/>}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>陈词</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <Checkbox color="primary" onChange={e => {onChecked(e.target.checked,6)}}/>
                  {checked6  ? <span style={{ fontSize: "120%" }} > 0 </span> : <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" value={gradingFanData.affChenci===0? '':gradingFanData.affChenci} inputProps={{ min: 0, max: 30 }} onChange={(e) => affChange((e.target.value > 30 ? gradingFanData.affChenci : e.target.value),6)}/>}
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <Checkbox color="primary" onChange={e => {onChecked(e.target.checked,15)}}/>
                  {checked15  ? <span style={{ fontSize: "120%" }} > 0 </span> : <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" value={gradingFanData.negChenci===0? '':gradingFanData.negChenci} inputProps={{ min: 0, max: 30 }} onChange={(e) => negChange((e.target.value > 30 ? gradingFanData.negChenci : e.target.value),6)}/>}
                </TableCell>
              </TableRow>

              <TableRow className = "shade">
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>第二次攻辩</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <Checkbox color="primary" onChange={e => {onChecked(e.target.checked,7)}}/>
                  {checked7  ? <span style={{ fontSize: "120%" }} > 0 </span> : <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" value={gradingFanData.affSecondAttack===0? '':gradingFanData.affSecondAttack} inputProps={{ min: 0, max: 30 }} onChange={(e) => affChange((e.target.value > 30 ? gradingFanData.affSecondAttack : e.target.value),7)}/>}
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <Checkbox color="primary" onChange={e => {onChecked(e.target.checked,16)}}/>
                  {checked16  ? <span style={{ fontSize: "120%" }} > 0 </span> : <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" value={gradingFanData.negSecondAttack===0? '':gradingFanData.negSecondAttack} inputProps={{ min: 0, max: 30 }} onChange={(e) => negChange((e.target.value > 30 ? gradingFanData.negSecondAttack : e.target.value),7)}/>}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>第一次总结</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <Checkbox color="primary" onChange={e => {onChecked(e.target.checked,8)}}/>
                  {checked8  ? <span style={{ fontSize: "120%" }} > 0 </span> : <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" value={gradingFanData.affFirstFinal===0? '':gradingFanData.affFirstFinal} inputProps={{ min: 0, max: 30 }} onChange={(e) => affChange((e.target.value > 30 ? gradingFanData.affFirstFinal : e.target.value),8)}/>}
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <Checkbox color="primary" onChange={e => {onChecked(e.target.checked,17)}}/>
                  {checked17  ? <span style={{ fontSize: "120%" }} > 0 </span> : <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" value={gradingFanData.negFirstFinal===0? '':gradingFanData.negFirstFinal} inputProps={{ min: 0, max: 30 }} onChange={(e) => negChange((e.target.value > 30 ? gradingFanData.negFirstFinal : e.target.value),8)}/>}
                </TableCell>
              </TableRow>

              <TableRow className = "shade">
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>第二次总结</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <Checkbox color="primary" onChange={e => {onChecked(e.target.checked,9)}}/>
                  {checked9  ? <span style={{ fontSize: "120%" }} > 0 </span> : <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" value={gradingFanData.affSecondFinal===0? '':gradingFanData.affSecondFinal} inputProps={{ min: 0, max: 30 }} onChange={(e) => affChange((e.target.value > 30 ? gradingFanData.affSecondFinal : e.target.value),9)}/>}
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> 
                  <Checkbox color="primary" onChange={e => {onChecked(e.target.checked,18)}}/>
                  {checked18  ? <span style={{ fontSize: "120%" }} > 0 </span> : <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" value={gradingFanData.negSecondFinal===0? '':gradingFanData.negSecondFinal} inputProps={{ min: 0, max: 30 }} onChange={(e) => negChange((e.target.value > 30 ? gradingFanData.negSecondFinal : e.target.value),9)} />}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>语言风度</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（40分）</div> <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" 
                  value={gradingFanData.affLanguage===0? '':gradingFanData.affLanguage} inputProps={{ min: 0, max: 40 }} onChange={(e) => affChange((e.target.value > 40 ? gradingFanData.affLanguage : e.target.value),10)}/>
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（40分）</div> <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" 
                  value={gradingFanData.negLanguage===0? '':gradingFanData.negLanguage} inputProps={{ min: 0, max: 40 }} onChange={(e) => negChange((e.target.value > 40 ? gradingFanData.negLanguage : e.target.value),10)}/>
                </TableCell>
              </TableRow>

              <TableRow className = "shade">
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>自由辩论</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（80分）</div> <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" 
                  value={gradingFanData.affFree===0? '':gradingFanData.affFree} inputProps={{ min: 0, max: 80 }} onChange={(e) => affChange((e.target.value > 80 ? gradingFanData.affFree : e.target.value),11)}/>
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（80分）</div> <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" 
                  value={gradingFanData.negFree===0? '':gradingFanData.negFree} inputProps={{ min: 0, max: 80 }} onChange={(e) => negChange((e.target.value > 80 ? gradingFanData.negFree : e.target.value),11)}/>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>团体配合与合作精神</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" 
                  value={gradingFanData.affTeamwork===0? '':gradingFanData.affTeamwork} inputProps={{ min: 0, max: 30 }} onChange={(e) => affChange((e.target.value > 30 ? gradingFanData.affTeamwork : e.target.value),12)}/> 
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> <Input type="number" onWheel={(e) => e.target.blur()} placeholder="0" 
                  value={gradingFanData.negTeamwork===0? '':gradingFanData.negTeamwork} inputProps={{ min: 0, max: 30 }} onChange={(e) => negChange((e.target.value > 30 ? gradingFanData.negTeamwork : e.target.value),12)}/>
                </TableCell>
              </TableRow>

              <TableRow className = "shade">
                <TableCell align="right" colSpan={1}><div style={{ fontSize: "200%" }}>总分</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>（满分400分）</div> 
                  <div  style={{ fontSize: "200%" }}>{gradingFanData.affTotal}</div> 
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>（满分400分）</div> 
                  <div  style={{ fontSize: "200%" }}>{gradingFanData.negTotal}</div> 
                </TableCell>
              </TableRow>
        
            </TableBody>
          </Table>

          <button type="button" onClick={()=>setDialogOpen(true)} className="btn sub btn btn-primary">
            <span className="englishF"> Submit / </span> <span> 提交 </span>
          </button>
        </form>
      </div>
      <Footer />
    </section>
  );
}

export default GradingFan;
