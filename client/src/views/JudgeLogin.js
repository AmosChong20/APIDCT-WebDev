import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import Footer from '../components/Footer'
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useHistory } from "react-router-dom";
import './css/JudgeLogin.css'

const JudgeLogin = () => {
  const [judgeLoginData,setJudgeLoginData] = useState({token : '', indexT: ''});
  const [changed, setChanged] = useState(false);
  const [changed_1, setChanged_1] = useState(false);
  const[topics,setTopics] = useState([]);
  const [start,setStart] = useState(true);

  const [dataf,setDataf] = useState([]);
  const [datat,setDatat] = useState([]);
  const [showS, setShowS] = useState(false);
  const [showI, setShowI] = useState(false);
  const [showF, setShowF] = useState(false);

  const history = useHistory();

  const onSubmit = async (e) =>{
    e.preventDefault()

    if(judgeLoginData.token === '' ||
    judgeLoginData.indexT === ''){
      setShowF(true);
      setShowS(false);
      setShowI(false);
      return;
    }



    try{
      if(dataf[0].token){
        // console.log(dataf[0]);
        setShowI(false);
        setShowS(true);
        setShowF(false);
        setTimeout(() => setShowS(false), 1000);
        if(datat[0].isRoadShow){
          setTimeout(() => history.push({
            pathname: '/test',
            judge: judgeLoginData.token,
            topic: judgeLoginData.indexT
          }), 1000);
        }
        else{
          setTimeout(() => history.push({
            pathname: '/test',
            judge: judgeLoginData .token,
            topic: judgeLoginData.indexT
          }), 1000);
        }


        return;
      }
      else{
        setShowI(true);
        setShowS(false);
        setShowF(false);
        setTimeout(() => setShowI(false), 1000);
      }
      
    } catch(error){
      setShowI(true);
      setShowS(false);
      setShowF(false);
      setTimeout(() => setShowI(false), 1000);
    }
  }

  const fetchTopic = async () => {
    // const res = await fetch('https://apicdt-server.com/registerTopic')
    const res = await fetch('http://localhost:5000' + '/registerTopic')
    // const res = await fetch(serverURL+'registerTopic')
    const data = await res.json()
    setTopics(data);
  }

  const fetchTZJudge = async (token) => {
    if(token === ''){
      return;
    }
    
    const res = await fetch('http://localhost:5000'+'/registerJudge/'+token)
    // const res = await fetch('https://apicdt-server.com'+'registerJudge/'+token)
    const data = await res.json()

    setDataf (data);
  }

  const fetchTZTopic = async (indexT) => {
    if(indexT === ''){
      return;
    }
    
    const res = await fetch('http://localhost:5000'+'/registerTopic/'+indexT)
    // const res = await fetch('https://apicdt-server.com'+'registerJudge/'+indexT)
    const data = await res.json()

    setDatat (data);
  }

  // const getSelection=(event)=>{
  //   event.preventDefault()
  //   judgeLoginData.indexT = event.target.value;
  //   fetchTZTopic(event.target.value);
  //   console.log(datat);

  // }


  useEffect(() => {
    if(start){
      fetchTopic();
      setStart(false);
    }

    if(changed){
      fetchTZJudge(judgeLoginData.token); 
      fetchTZTopic(judgeLoginData.indexT);
      setChanged(false);
    }
  },[changed,judgeLoginData])

    
  return (
    <div>
      <Alert show={showS} className= "jalert" variant="success" onClose={() => setShowS(false)} dismissible>
        <Alert.Heading className = "alertHeading"> 登入成功！ </Alert.Heading>
      </Alert>
      <Alert show={showI} className= "jalert" variant="danger" onClose={() => setShowI(false)} dismissible>
        <Alert.Heading className = "alertHeading"> 代码不存在！ </Alert.Heading>
      </Alert>
      <Alert show={showF} className= "alert" variant="danger" onClose={() => setShowF(false)} dismissible>
          <Alert.Heading className = "alertHeading"> 提交失败 ！ </Alert.Heading>
      </Alert>
      <form className="SWform JudgeForm" onSubmit = {onSubmit}>
        <div className="JudgeTitle"> 
          评审登入
        </div>
        <input type="text" className={`form-control englsihF`}  value={judgeLoginData.token} placeholder="请输入代码" onChange={(e) => setChanged(true) & setJudgeLoginData({ ...judgeLoginData, token: e.target.value }) } autoFocus /> 

        <Form.Control  className="JudgeLoginSel" as="select" onChange={(e) => setChanged(true) & setJudgeLoginData({ ...judgeLoginData, indexT: e.target.value }) }>
            <option value = '0' >
              请选择辩题
            </option>
            {topics.map(topic => (
              <option key = {topic.indexT} value={topic.indexT} > {topic.topic}</option>
            ))}

        </Form.Control>

        <button  type="submit" className="btn btn-primary SWbutton " data-toggle="modal" value='Save Form' >
          <span className = "englishF" > Login / </span> <span> 登入 </span>
        </button>
      </form>
    </div>
  )
}

export default JudgeLogin
