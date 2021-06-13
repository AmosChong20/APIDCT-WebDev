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
    const [speakers, setSpeakers] = useState([{ 'name': "正方一辩" },{ 'name': "正方二辩" },{ 'name': "正方三辩" },{ 'name': "正方四辩" },{ 'name': "反方一辩" },{ 'name': "反方二辩" },{ 'name': "反方三辩" },{ 'name': "反方四辩" }]);
    const [selected,setSelected]=useState([])
    const location = useLocation();

    const [showS, setShowS] = useState(false);
    const [showF, setShowF] = useState(false);

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
        if (selected.includes('')) {
            setShowF(true);
            setShowS(false);
            return;
        }

        setShowF(false);
        setShowS(true);

        addGradingBestFinal(selected);
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

                <Stepper step={4} />
                <div className="register_header d-flex justify-content-center">
                    <span> 印象票 </span>
                </div>
                <div className="regBlock row">
                    <form className="col-12 regForm" noValidate onSubmit={onSubmit}>
                        <div className="d-flex justify-content-center">请选择一位最佳辩手</div>
                        <div className="school container col d-flex justify-content-center">
                            <Form.Control className="selectspeaker" as="select" onChange={(e) => getSelection(e,0)} style={{ width: "50vw", margin: "10px" }}>
                                <option value='0' >
                                    请选择最佳辩手
                                </option>
                                {speakers.map(speaker => (
                                    <option key={speaker.name} value={speaker.name} >{speaker.name}</option>
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