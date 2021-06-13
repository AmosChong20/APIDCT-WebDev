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
import Checkbox from '@material-ui/core/Checkbox';
import {useHistory} from 'react-router';
import './css/ResultFan.css';


const GradingFan = () => {
  const [start,setStart] = useState(true);
  const [cal,setCal] = useState(true);
  const [showS, setShowS] = useState(false);
  const [showF, setShowF] = useState(false);
  const [dataT, setDataT] = useState([]);
  const [dataF, setDataF] = useState([]);
  const [dataIF, setDataIF] = useState([]);
  const [dataSF, setDataSF] = useState([]);
  const [scoreF,setScoreF] = useState({ aff : 0, neg : 0});
  const [scoreIF,setScoreIF] = useState({ aff : 0, neg : 0});
  const [scoreSF,setScoreSF] = useState({ aff : 0, neg : 0});
  const [scoreT,setScoreT] = useState({ aff : 0, neg : 0});
  const location = useLocation();
  const history = useHistory();

  const findTZTopic = async (indexT) => {
    if(indexT === ''){
      return;
    }
    const res = await fetch('http://localhost:5000'+'/registerTopic/'+indexT)
    // const res = await fetch('https://apicdt-server.com'+'registerJudge/'+indexT)
    const data = await res.json()
    setDataT(data)
    // console.log(data)
   
  }

  const findGradingSummaryFan = async (indexT) => {
    if(indexT === ''){
      return;
    }
    const res = await fetch('http://localhost:5000'+'/gradingSummaryFan/'+indexT)
    // const res = await fetch('https://apicdt-server.com'+'registerJudge/'+indexT)
    const data = await res.json()
    setDataSF(data)
  }
  const findGradingImpressionFan = async (indexT) => {
    if(indexT === ''){
      return;
    }
    const res = await fetch('http://localhost:5000'+'/gradingImpressionFan/'+indexT)
    // const res = await fetch('https://apicdt-server.com'+'registerJudge/'+indexT)
    const data = await res.json()
    setDataIF(data)
  }
  const findGradingFan = async (indexT) => {
    if(indexT === ''){
      return;
    }
    const res = await fetch('http://localhost:5000'+'/gradingFan/'+indexT)
    // const res = await fetch('https://apicdt-server.com'+'registerJudge/'+indexT)
    const data = await res.json()
    setDataF(data)
  }

  const fetchData = () =>{
    findTZTopic(location.indexT)
    findTZTopic(location.indexT);
    findGradingSummaryFan(location.indexT);
    findGradingImpressionFan(location.indexT);
    findGradingFan(location.indexT);
    // console.log(dataT)
    // console.log(dataF)
    // console.log(dataIF)
    // console.log(dataSF)
  }

  const calResult = () =>{
    console.log(dataT)
    console.log(dataF)
    console.log(dataIF)
    console.log(dataSF)
    var lengthIF = dataIF.length;
    var lengthF = dataF.length;
    var lengthSF = dataSF.length; 
    var i;
    var tempFAff =scoreF.aff;
    var tempFNeg = scoreF.neg;
    var tempIFAff =scoreIF.aff;
    var tempIFNeg = scoreIF.neg;
    var tempSFAff =scoreSF.aff;
    var tempSFNeg = scoreSF.neg;

    for (i = 0; i < lengthF; i++) {
      // console.log(i)
      if(dataF[i].affTotal < dataF[i].negTotal){
        tempFNeg += 1;
      }
      else if(dataF[i].affTotal > dataF[i].negTotal){
        tempFAff += 1;
      }
      else{
        var tempAff = dataF[i].affFree + dataF[i].affTeamwork
        var tempNeg = dataF[i].negFree + dataF[i].negTeamwork

        if(tempAff < tempNeg){
          tempFNeg += 1;
        }
        else if(tempAff > tempNeg){
          tempFAff += 1;
        }
        else{
          if(dataF[i].affTeamwork < dataF[i].negTeamwork){
            tempFNeg += 1;
          }
          else if(dataF[i].affTeamwork > dataF[i].negTeamwork){
            tempFAff += 1;
          }
          else{
            var x;
            for (x = 0; x < lengthSF ; x++){
              if(dataSF[x].token === dataF[i].token){
                if(dataSF[x].summary === 1){
                  tempFAff += 1;
                }
                else{
                  tempFNeg += 1;
                }
              }
            }
          }
        }
      }
    }

    for (i = 0; i < lengthSF ; i++){
      if(dataSF[i].summary===1){
        tempSFAff += 1;
      }
      else{
        tempSFNeg += 1;
      }
    }

    for (i = 0; i < lengthIF ; i++){
      if(dataIF[i].impression===1){
        tempIFAff += 1;
      }
      else{
        tempIFNeg += 1;
      }
    }
    console.log(tempFNeg)
    console.log(tempFAff)
    console.log(tempSFNeg)
    console.log(tempSFAff)
    console.log(tempIFNeg)
    console.log(tempIFAff)
    
    scoreF.neg = tempFNeg
    scoreF.aff = tempFAff
    // setScoreF({ ...scoreF, neg: tempFNeg})
    // setScoreF({ ...scoreF, aff: tempFAff})
    scoreSF.neg = tempSFNeg
    scoreSF.aff = tempSFAff
    // setScoreSF({ ...scoreSF, neg: tempSFNeg})
    // setScoreSF({ ...scoreSF, aff: tempSFAff})
    scoreIF.neg = tempIFNeg
    scoreIF.aff = tempIFAff
    // setScoreIF({ ...scoreIF, neg: tempIFNeg})
    // setScoreIF({ ...scoreIF, aff: tempIFAff})
  }

  if(start){
    fetchData();
    setStart(false);
  }

  useEffect(() => {
    if((dataT.length!==0)&&(dataF.length!==0)&&(dataIF.length!==0)&&(dataSF.length!==0)&&(cal)){
      calResult();
      setCal(false)
    }
  })


  return (
    <section className="header-gradient">
      <div className="container mainBlockResult">
        <div className="fan_title">
          <span> 返尔赛成绩 </span>
        </div>
        <Table  aria-label="caption table">
          <colgroup>
            <col style={{ width: '40%' }} />
            <col style={{ width: '30%' }} />
            <col style={{ width: '30%' }} />
          </colgroup>
          <TableHead>
            <TableRow className = "shade">
              <TableCell align="center" colSpan={1}><div><h2>题目</h2></div></TableCell>
              <TableCell align="center" colSpan={2}>{dataT[0] ? <div><h2>{dataT[0].topic}</h2></div> : <div>hi</div>} </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className ="rowResult">
              <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>获胜方</div></TableCell>
              <TableCell align="center" colSpan={2}>
                <div  style={{ fontSize: "170%" }}>反方</div> 
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="container subBlockResult">
        <Table  aria-label="caption table">
          <caption>备注：XXXXX</caption>
          <colgroup>
            <col style={{ width: '40%' }} />
            <col style={{ width: '30%' }} />
            <col style={{ width: '30%' }} />
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={1}><div><h2>项目</h2></div></TableCell>
              <TableCell align="left" colSpan={1}><div><h2>正方</h2></div></TableCell>
              <TableCell align="left" colSpan={1}><div><h2>反方</h2></div></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            <TableRow className = "shade">
              <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>印象票</div></TableCell>
              <TableCell align="left">
                <div  style={{ fontSize: "120%" }}>{scoreIF.aff}</div> 
              </TableCell>
              <TableCell align="left">
                <div  style={{ fontSize: "120%" }}>{scoreIF.neg}</div> 
              </TableCell>
            </TableRow>

            <TableRow >
              <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>总结票</div></TableCell>
              <TableCell align="left">
                <div  style={{ fontSize: "120%" }}>{scoreSF.aff}</div> 
              </TableCell>
              <TableCell align="left">
                <div  style={{ fontSize: "120%" }}>{scoreSF.neg}</div> 
              </TableCell>
            </TableRow>

            <TableRow className = "shade">
              <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>分数票</div></TableCell>
              <TableCell align="left">
                <div  style={{ fontSize: "120%" }}>{scoreF.aff}</div> 
              </TableCell>
              <TableCell align="left">
                <div  style={{ fontSize: "120%" }}>{scoreF.neg}</div> 
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>总票数</div></TableCell>
              <TableCell align="left">
                <div  style={{ fontSize: "120%" }}>6</div> 
              </TableCell>
              <TableCell align="left">
                <div  style={{ fontSize: "120%" }}>9</div> 
              </TableCell>
            </TableRow>

            <TableRow className = "shade">
              <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>评审总分</div></TableCell>
              <TableCell align="left">
                <div  style={{ fontSize: "120%" }}>{6/15*50}%</div> 
              </TableCell>
              <TableCell align="left">
                <div  style={{ fontSize: "120%" }}>{9/15*50}%</div> 
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center" colSpan={1}><div style={{ fontSize: "170%" }}>观众投票分</div></TableCell>
              <TableCell align="left">
                <div  style={{ fontSize: "120%" }}>25%</div> 
              </TableCell>
              <TableCell align="left">
                <div  style={{ fontSize: "120%" }}>25%</div> 
              </TableCell>
            </TableRow>


            <TableRow className = "shade">
              <TableCell align="right" colSpan={1}><div style={{ fontSize: "200%" }}>总分</div></TableCell>
              <TableCell align="left">
                <div  style={{ fontSize: "200%" }}>45%</div> 
              </TableCell>
              <TableCell align="left">
                <div  style={{ fontSize: "200%" }}>55%</div> 
              </TableCell>
            </TableRow>
      
          </TableBody>
        </Table>



      </div>
      <Footer />
    </section>
  );
}

export default GradingFan;
