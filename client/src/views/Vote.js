import React from 'react'
import { useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import './css/JudgeLogin.css'

const Vote = () => {
  const [voteData,setVoteData] = useState({indexT: '', affVote: '', negVote: ''});
  const [time,setTime] = useState({hour:'',minute:'',day:''});
  const [changed, setChanged] = useState(false);
  const [changed_1, setChanged_1] = useState(false);
  const [changed_2, setChanged_2] = useState(false);

  const[topics,setTopics] = useState([]);
  const [start,setStart] = useState(true);

  const [showS, setShowS] = useState(false);
  const [showF, setShowF] = useState(false);


  const addVoteData = async (voteData) =>{
    const res = await fetch (('http://localhost:5000'+'/vote'),{
      method : 'POST',
      headers:{
        'Content-type':'application/json',
      },
      body: JSON.stringify(voteData),
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

  const getTime = async () => {
    const res = await fetch('http://localhost:5000/'+'starwars/time')
    const data = await res.json()
    // console.log(data);
    return data;
  }

  const onSubmit = async (e) =>{
    e.preventDefault()

    if(voteData.indexT === '' ||
      voteData.affVote === '' ||
      voteData.negVote === ''){
      setShowF(true);
      setShowS(false);
      return;
    }
    addVoteData(voteData);
    setVoteData ({indexT: '', affVote: '', negVote: ''});

    setTopics([]);
    setChanged(false)
    setChanged_1(false);
    setChanged_2(false);
  }

  const fetchTopic = async () => {
    // const res = await fetch('https://apicdt-server.com/registerTopic')
    const res = await fetch('http://localhost:5000' + '/registerTopic')
    // const res = await fetch(serverURL+'registerTopic')
    const data = await res.json()

    var temp = data.length;
    var i;
    for (i = 0; i < temp; i++) {
      if(!(data[i].isRoadShow)){
        delete data[i]
      }

    }
    var array = data.filter(function () { return true });

    getTime().then(result=>{
      time.hour = result.hour;
      time.minute = result.minute;
      time.day = result.day;
      var min = ((time.hour*60)+ time.minute);

      temp = array.length;
      for (i = 0; i < temp; i++) {
        var temps = ((array[i].stimeh)*60)+(array[i].stimem);
        var tempe = ((array[i].etimeh)*60)+(array[i].etimem);
        if(((temps>min)||(tempe<min))||(array[i].day!==time.day)){
          delete array[i];
        }
      }
      array = array.filter(function () { return true });
      setTopics(array);
    });
  }

  useEffect(() => {
    if(start){
      fetchTopic();
      setStart(false);
    }
  },[start])

    
  return (
    <div>
      <Alert show={showS} className= "jalert" variant="success" onClose={() => setShowS(false)} dismissible>
        <Alert.Heading className = "alertHeading"> 登入成功！ </Alert.Heading>
      </Alert>
      <Alert show={showF} className= "alert" variant="danger" onClose={() => setShowF(false)} dismissible>
          <Alert.Heading className = "alertHeading"> 提交失败 ！ </Alert.Heading>
      </Alert>
      <form className="SWform JudgeForm" onSubmit = {onSubmit}>
        <div className="JudgeTitle"> 
          票数提交
        </div>
        

        <Form.Control  className="JudgeLoginSel" as="select" onChange={(e) =>  setChanged(true) & setVoteData({ ...voteData, indexT: e.target.value }) }>
            <option value = '0' >
              请选择辩题
            </option>
            {topics.map(topic => (
              <option key = {topic.indexT} value={topic.indexT} > {topic.topic}</option>
            ))}

        </Form.Control>
        <input type="text" className={`form-control  ${voteData.affVote ? "is-valid" : ""} ${(!voteData.affVote && changed_1) ? "is-invalid" : ""}`}  value={voteData.affVote} placeholder="正反获得票数" onChange={(e) => setChanged_1(true) & setVoteData({ ...voteData, affVote: e.target.value })} />
        <input type="text" className={`form-control  ${voteData.negVote ? "is-valid" : ""} ${(!voteData.negVote && changed_2) ? "is-invalid" : ""}`}  value={voteData.negVote} placeholder="反方获得票数" onChange={(e) => setChanged_2(true) & setVoteData({ ...voteData, negVote: e.target.value })} />


        <button  type="submit" className="btn btn-primary SWbutton " data-toggle="modal" value='Save Form' >
          <span className = "englishF" > Login / </span> <span> 登入 </span>
        </button>
      </form>
    </div>
  )
}

export default Vote
