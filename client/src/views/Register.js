import { useState } from 'react'
import React from 'react'
import '../components/css/Register.css';
import logoBase from '../assets/image/yatai 10th logo-10.png';
import logoTop1 from '../assets/image/yatai 10th logo-bian.png';


const Register = () => {
  const [registerData, setRegisterData] = useState ({engSchoolName : '',chiSchoolName : '',engTeamLeaderName : '',chiTeamLeaderName : '',teamLeaderContact : '',teamLeaderEmail : '',debateTopics_1 : '',debateTopics_2 : ''});

  const addRegisterData = async (registerData) =>{
    const res = await fetch ('http://localhost:5000/register',{
      method : 'POST',
      headers:{
        'Content-type':'application/json',
      },
      body: JSON.stringify(registerData),
    })
    const data = await res.json()
    console.log(data) ;
  }

  const onSubmit = (e) =>{
    e.preventDefault()
    
    
    addRegisterData(registerData);
    setRegisterData ({engSchoolName : '',chiSchoolName : '',engTeamLeaderName : '',chiTeamLeaderName : '',teamLeaderContact : '',teamLeaderEmail : '',debateTopics_1 : '',debateTopics_2 : ''});


  }
  
  return (
    <section className="header-gradient"> 
      <div className="container main_block">
        <div className="register_header">
            <span className = "englishF"> Register / </span> <span> 注册 </span>
        </div>
        <div className="regBlock row">
          <form className="col-md-8 col-12 regForm " onSubmit = {onSubmit}>
            <div className="school container">
              <div className="schoolPart formHeader">
                  <span className = "englishF"> Particulars of School / </span> <span> 学校资料 </span>
              </div>
              <div className="row schoolPartForm">
                <div className="mb-3 col-6">
                  <input type="text" className="form-control englsihF" value={registerData.engSchoolName} placeholder="Name of School" onChange={(e) => setRegisterData({ ...registerData, engSchoolName: e.target.value })}  />
                </div>
                <div className="mb-3 col-6">
                  <input type="text" className="form-control " value={registerData.chiSchoolName} placeholder="学校名称" onChange={(e) => setRegisterData({ ...registerData, chiSchoolName: e.target.value })} />
                </div>
              </div>
            </div>
            <div className="leader container">
              <div className="leaderPart formHeader">
                  <span className = "englishF"> Particulars of Team Leader / </span> <span> 队长资料 </span>
              </div>
              <div className="row leaderPartForm">
                <div className="mb-3 col-6">
                  <input type="text" className="form-control" value={registerData.engTeamLeaderName} placeholder="Name of Team Leader" onChange={(e) => setRegisterData({ ...registerData, engTeamLeaderName: e.target.value })}/>
                </div>
                <div className="mb-3 col-6">
                  <input type="text" className="form-control" value={registerData.chiTeamLeaderName} placeholder="队长姓名" onChange={(e) => setRegisterData({ ...registerData, chiTeamLeaderName: e.target.value })} />
                </div>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" value={registerData.teamLeaderContact} placeholder="队长联络电话" onChange={(e) => setRegisterData({ ...registerData, teamLeaderContact: e.target.value })}/>
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" value={registerData.teamLeaderEmail} placeholder="队长电邮地址" onChange={(e) => setRegisterData({ ...registerData, teamLeaderEmail: e.target.value })}/>
              </div>
            </div>
            <div className="topics container">
              <div className="ldebateTopics formHeader">
                  <span className = "englishF"> Debate Topics / </span> <span> 辩题 </span>
              </div>
              <div className="row debateTopicsForm">
                <div className="col-6">
                  <input type="text" className="form-control" value={registerData.debateTopics_1} placeholder="辩题一" onChange={(e) => setRegisterData({ ...registerData, debateTopics_1: e.target.value })}/>
                </div>
                <div className="col-6">
                  <input type="text" className="form-control" value={registerData.debateTopics_2} placeholder="辩题二" onChange={(e) => setRegisterData({ ...registerData, debateTopics_2: e.target.value })}/>
                </div>
              </div>
              <div className="form-text remarks englishF">Remarks: The topics submitted will be used for this tournament. </div>
              <div className="form-text remarks">备注：所提交之辩题将会作为本赛事之用 </div>
            </div>
            <button  type="submit" className="btn btn-primary" value='Save Form'>
              <span className = "englishF"> Submit / </span> <span> 提交 </span>
            </button>
          </form>
          <div className="col-4 logo">
            <img src= {logoBase} alt="Asia-Pacific Intervarsity Chinese Debate Tournament" className="ten-logo" width="80%" />
            <img src={logoTop1} alt="Asia-Pacific Intervarsity Chinese Debate Tournament" className="bian-logo" width="80%" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
