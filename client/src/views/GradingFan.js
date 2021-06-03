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
import {useHistory} from 'react-router';
import './css/GradingFan.css';


const GradingTable = () => {
  const [showS, setShowS] = useState(false);
  const [showF, setShowF] = useState(false);
  const location = useLocation();
  const [gradingFanData, setGradingFanData] = useState({
    token: location.token,
    indexT: location.indexT,
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

  const addGradingFanData = async (gradingFanData) =>{
    const res = await fetch (('http://localhost:5000'+'/gradingFan'),{
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

    setTimeout(() => history.push({
      pathname: '/gradingSummaryFan',
      token: gradingFanData.token,
      indexT: gradingFanData.indexT
    }), 1000);

  }

  return (
    <section className="header-gradient">
      <div className="container main_block">
        <Alert show={showS} className="alert" variant="success" onClose={() => setShowS(false)} dismissible>
          <Alert.Heading className="alertHeading"> 提交成功 ！/ Registration Successful ！ </Alert.Heading>
        </Alert>
        <Alert show={showF} className="alert" variant="danger" onClose={() => setShowF(false)} dismissible>
          <Alert.Heading className="alertHeading"> 提交失败 ！/ Registration Failed ！ </Alert.Heading>
        </Alert>
        <StepperFan step={1} />
        <div className="fan_title">
          <span> 分数票 </span>
        </div>
        <form className="col-12 regForm" noValidate onSubmit={onSubmit}>
          <Table  aria-label="caption table">
            <caption>备注：XXXXX</caption>
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
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => affChange(e.target.value,1)}/>
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => negChange(e.target.value,1)}/>
                </TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>质询</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => affChange(e.target.value,2)}/>
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => negChange(e.target.value,2)}/>
                </TableCell>
              </TableRow>

              <TableRow className = "shade">
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>答辩</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（20分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => affChange(e.target.value,3)}/>
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（20分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => negChange(e.target.value,3)}/>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>驳论</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => affChange(e.target.value,4)}/>
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => negChange(e.target.value,4)}/>
                </TableCell>
              </TableRow>

              <TableRow className = "shade">
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>第一次攻辩</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => affChange(e.target.value,5)}/>
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => negChange(e.target.value,5)}/>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>陈词</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => affChange(e.target.value,6)}/>
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => negChange(e.target.value,6)}/>
                </TableCell>
              </TableRow>

              <TableRow className = "shade">
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>第二次攻辩</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => affChange(e.target.value,7)}/>
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => negChange(e.target.value,7)}/>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>第一次总结</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => affChange(e.target.value,8)}/>
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => negChange(e.target.value,8)}/>
                </TableCell>
              </TableRow>

              <TableRow className = "shade">
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>第二次总结</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => affChange(e.target.value,9)}/>
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => negChange(e.target.value,9)}/>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>语言风度</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（40分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => affChange(e.target.value,10)}/>
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（40分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => negChange(e.target.value,10)}/>
                </TableCell>
              </TableRow>

              <TableRow className = "shade">
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>自由辩论</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（80分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => affChange(e.target.value,11) }/>
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（80分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => negChange(e.target.value,11)}/>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>团体配合与合作精神</div></TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => affChange(e.target.value,12) }/> 
                </TableCell>
                <TableCell align="left">
                  <div  style={{ fontSize: "120%" }}>分数（30分）</div> <Input type="number" placeholder="分数" 
                  onChange={(e) => negChange(e.target.value,12)}/>
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

          <button type="submit" className="btn sub btn btn-primary">
            <span className="englishF"> Submit / </span> <span> 提交 </span>
          </button>
        </form>
      </div>
      <Footer />
    </section>
  );
}

export default GradingTable;
