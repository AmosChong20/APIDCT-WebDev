import { useState, useEffect } from 'react'
import React from 'react'

import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import inis from "../components/json/inis.json";


import { serverURL } from '../config.js'

import Footer from '../components/Footer'
import './css/GradingBestCand.css'
import Stepper from '../components/Stepper';
import {useLocation} from 'react-router-dom';

const GradingBestCand = () => {
    // const [speakers, setSpeakers] = useState([{ 'name': "正方一辩" },{ 'name': "正方二辩" },{ 'name': "正方三辩" },{ 'name': "正方四辩" },{ 'name': "反方一辩" },{ 'name': "反方二辩" },{ 'name': "反方三辩" },{ 'name': "反方四辩" }]);
    const [start,setStart] = useState(true);
    const [heirList, setHeirList] = useState([]);
    const [selected,setSelected]=useState([''])
    const [cal1,setCal1] = useState(true);
    const [dataTable, setDataTable] = useState([]);
    const [dataBC, setDataBC] = useState([]);
    const location = useLocation();

    const [showS, setShowS] = useState(false);
    const [showF, setShowF] = useState(false);



    const findGradingTable = async (indexT) => {
        if(indexT === ''){
            return;
        }
        const res = await fetch('http://localhost:5000'+'/gradingTable/'+indexT)
        // const res = await fetch('https://apicdt-server.com'+'registerJudge/'+indexT)
        const data = await res.json()
        setDataTable(data)
    }
    const findGradingBestCand = async (indexT) => {
        if(indexT === ''){
            return;
        }
        const res = await fetch('http://localhost:5000'+'/gradingBestCand/'+indexT)
        // const res = await fetch('https://apicdt-server.com'+'registerJudge/'+indexT)
        const data = await res.json()
        setDataBC(data)
    }

    const fetchData = () =>{
        findGradingTable(location.indexT);
        findGradingBestCand(location.indexT);
    }

    if(start){
        fetchData();
        setStart(false);
    }


    const getHeir = () =>{
        // console.log(dataBC)
        // console.log(dataTable)
        var tempHeirList = [];
        var lengthBC = dataBC.length; 
        var lengthTable = dataTable.length; 
        var i;
        var list = { aff1: 0, aff2: 0 , aff3: 0,  aff4: 0, neg1: 0, neg2: 0 , neg3: 0, neg4: 0 }
  
        for ( i = 0 ; i < lengthBC; i++){
          var tempArr = dataBC[i].selected;
          for ( const ppl of tempArr){
            if(ppl === "正方一辩"){
              list.aff1 += 1;
            }
            else if(ppl === "正方二辩"){
              list.aff2 += 1;
            }
            else if(ppl === "正方三辩"){
              list.aff3 += 1;
            }
            else if(ppl === "正方四辩"){
              list.aff4 += 1;
            }
            else if(ppl === "反方一辩"){
              list.neg1 += 1;
            }
            else if(ppl === "反方二辩"){
              list.neg2 += 1;
            }
            else if(ppl === "反方三辩"){
              list.neg3 += 1;
            }
            else if(ppl === "反方四辩"){
              list.neg4 += 1;
            }
          }
        }
  
        var keysSorted = Object.keys(list).sort(function(a,b){return list[b]-list[a]})
        var keysSortedValue = Object.keys(list).sort(function(a,b){return list[b]-list[a]}).map(key => list[key])
        // console.log(keysSorted);  
        // console.log(keysSortedValue);  
        var count = 0;
        var min = 0;
        for ( const val of keysSortedValue){
          if(val>0){
            if(count<3){
              min = val;
              count ++;
            }
            else if(val === min){
              count ++;
            }
          }
          else{
            break;
          }
        }
        var subHeirList = { aff1: 0, aff2: 0 , aff3: 0,  aff4: 0, neg1: 0, neg2: 0 , neg3: 0, neg4: 0, }
        for ( i = 0 ; i < lengthTable; i++){
          var y;
          for (y = 0; y < 8; y++){
            if (y===0){
              subHeirList.aff1 += (dataTable[i].rows)[y].subt
            }
            if (y===1){
              subHeirList.aff2 += (dataTable[i].rows)[y].subt
            }
            if (y===2){
              subHeirList.aff3 += (dataTable[i].rows)[y].subt
            }
            if (y===3){
              subHeirList.aff4 += (dataTable[i].rows)[y].subt
            }
            if (y===4){
              subHeirList.neg1 += (dataTable[i].rows)[y].subt
            }
            if (y===5){
              subHeirList.neg2 += (dataTable[i].rows)[y].subt
            }
            if (y===6){
              subHeirList.neg3 += (dataTable[i].rows)[y].subt
            }
            if (y===7){
              subHeirList.neg4 += (dataTable[i].rows)[y].subt
            }
          }
        }
  
        var arrLength = 0;
        var countSub = 0;
        var subHeirSorted;
        if(count>3){
          var x;
          var tempSubArr = []
          var tempSubHeirList = { aff1: 0, aff2: 0 , aff3: 0,  aff4: 0, neg1: 0, neg2: 0 , neg3: 0, neg4: 0, }
          for ( x = 0; x < count; x++) {
            if(keysSortedValue[x]===min){
              tempSubArr.push(x)
              arrLength++;
            }
          }
          for ( x = 0; x < arrLength; x++) {
            if (keysSorted[tempSubArr[x]] === "aff1"){
              // tempSubHeirList.push({ "aff1" : (dataTable[i].rows)[0].subt})
              tempSubHeirList.aff1 = subHeirList.aff1
            }
            else if (keysSorted[tempSubArr[x]] === "aff2"){
              // tempSubHeirList.push({ "aff2" : (dataTable[i].rows)[1].subt})
              tempSubHeirList.aff2 = subHeirList.aff2
            }
            else if (keysSorted[tempSubArr[x]] === "aff3"){
              // tempSubHeirList.push({ "aff3" : (dataTable[i].rows)[2].subt})
              tempSubHeirList.aff3 = subHeirList.aff3
            }
            else if (keysSorted[tempSubArr[x]] === "aff4"){
              // tempSubHeirList.push({ "aff4" : (dataTable[i].rows)[3].subt})
              tempSubHeirList.aff4 = subHeirList.aff4
            }
            else if (keysSorted[tempSubArr[x]] === "neg1"){
              // tempSubHeirList.push({ "neg1" : (dataTable[i].rows)[4].subt})
              tempSubHeirList.neg1 = subHeirList.neg1
            }
            else if (keysSorted[tempSubArr[x]] === "neg2"){
              // tempSubHeirList.push({ "neg2" : (dataTable[i].rows)[5].subt})
              tempSubHeirList.neg2 = subHeirList.neg2
            }
            else if (keysSorted[tempSubArr[x]] === "neg3"){
              // tempSubHeirList.push({ "neg3" : (dataTable[i].rows)[6].subt})
              tempSubHeirList.neg3 = subHeirList.neg3
            }
            else if (keysSorted[tempSubArr[x]] === "neg4"){
              // tempSubHeirList.push({ "neg4" : (dataTable[i].rows)[7].subt})
              tempSubHeirList.neg4 = subHeirList.neg4
            }
          }
          // console.log(tempSubHeirList)
          subHeirSorted = Object.keys(tempSubHeirList).sort(function(a,b){return tempSubHeirList[b]-tempSubHeirList[a]})
          var subHeirSortedValue = Object.keys(tempSubHeirList).sort(function(a,b){return tempSubHeirList[b]-tempSubHeirList[a]}).map(key => tempSubHeirList[key])
  
          // console.log(subHeirSorted)
          // console.log(subHeirSortedValue)
          var minSub = 0;
          var limit  = (3 - count + arrLength);
          for ( const val of subHeirSortedValue){
            if(countSub<limit){
              minSub = val;
              countSub ++;
            }
            else if(val === minSub){
              countSub ++;
            }
          }
        }
        
        for ( i = 0; i< count-arrLength; i++){
          if(keysSorted[i] === "aff1"){
            tempHeirList.push({'name':"正方一辩",'score': subHeirList.aff1})
          }
          else if(keysSorted[i] === "aff2"){
            tempHeirList.push({'name':"正方二辩",'score': subHeirList.aff2})
          }
          else if(keysSorted[i] === "aff3"){
            tempHeirList.push({'name':"正方三辩",'score': subHeirList.aff3})
          }
          else if(keysSorted[i] === "aff4"){
            tempHeirList.push({'name':"正方四辩",'score': subHeirList.aff4})
          }
          else if(keysSorted[i] === "neg1"){
            tempHeirList.push({'name':"反方一辩",'score': subHeirList.neg1})
          }
          else if(keysSorted[i] === "neg2"){
            tempHeirList.push({'name':"反方二辩",'score': subHeirList.neg2})
          }
          else if(keysSorted[i] === "neg3"){
            tempHeirList.push({'name':"反方三辩",'score': subHeirList.neg3})
          }
          else if(keysSorted[i] === "neg4"){
            tempHeirList.push({'name':"反方四辩",'score': subHeirList.neg4})
          }
        }
        for ( i = 0; i< countSub; i++){
          if(subHeirSorted[i] === "aff1"){
            tempHeirList.push({'name':"正方一辩",'score': subHeirList.aff1})
          }
          else if(subHeirSorted[i] === "aff2"){
            tempHeirList.push({'name':"正方二辩",'score': subHeirList.aff2})
          }
          else if(subHeirSorted[i] === "aff3"){
            tempHeirList.push({'name':"正方三辩",'score': subHeirList.aff3})
          }
          else if(subHeirSorted[i] === "aff4"){
            tempHeirList.push({'name':"正方四辩",'score': subHeirList.aff4})
          }
          else if(subHeirSorted[i] === "neg1"){
            tempHeirList.push({'name':"反方一辩",'score': subHeirList.neg1})
          }
          else if(subHeirSorted[i] === "neg2"){
            tempHeirList.push({'name':"反方二辩",'score': subHeirList.neg2})
          }
          else if(subHeirSorted[i] === "neg3"){
            tempHeirList.push({'name':"反方三辩",'score': subHeirList.neg3})
          }
          else if(subHeirSorted[i] === "neg4"){
            tempHeirList.push({'name':"反方四辩",'score': subHeirList.neg4})
          }
        }
        setHeirList(tempHeirList);
        // console.log(tempHeirList)
          
    }

    useEffect(() => {
        if((dataBC.length!==0)&&(dataTable.length!==0)&&(cal1)){
            getHeir();
            setCal1(false)
        }
    })

    const getSelection=(e,i)=>{
        const temp=(e.target.value);
        const newS = selected.map((x) => x);
        newS[i]=temp;
        setSelected(newS);
      }

      const addGradingBestFinal = async (selected) => {
        const res = await fetch(('http://localhost:5000/' + 'gradingBestFinal'), {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                selected:selected,
                token:location.token,
                indexT:location.indexT,
                judgeChiName:location.judgeChiName
            }),
        })
        const data = await res.json()
        // console.log(data)
        if (res.status === 201) {
            setShowS(true);
            setShowF(false);
        }
        else {
            setShowF(true);
            setShowS(false);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        // console.log(selected)
        if (selected.includes('')) {
            setShowF(true);
            setShowS(false);
            return;
        }
        addGradingBestFinal(selected);
        // setShowF(false);
        // setShowS(true);
        setSelected([]);
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
                <div className="register_header">
                    <span> 正赛 </span>
                </div>
                <Stepper step={4} />
                <div className="register_header d-flex justify-content-center">
                    <span> 最佳辩手 </span>
                </div>
                <div className="regBlock row">
                    <form className="col-12 regForm" noValidate onSubmit={onSubmit}>
                        <div className="d-flex justify-content-center">请选择一位最佳辩手</div>
                        <div className="school container col d-flex justify-content-center">
                            <Form.Control className="selectspeaker" as="select" onChange={(e) => getSelection(e,0)} style={{ width: "50vw", margin: "10px" }}>
                                <option value='0' >
                                    请选择最佳辩手
                                </option>
                                {heirList.map(heir=> (
                                    <option key={heir.name} value={heir.name} >{heir.name}</option>
                                ))}

                            </Form.Control>
                        </div>

                        <button type="submit" className="btn sub btn btn-primary" data-toggle="modal" data-target="#exampleModal" value='Save Form'>
                            <span className="englishF"> Submit / </span> <span> 提交 </span>
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default GradingBestCand;