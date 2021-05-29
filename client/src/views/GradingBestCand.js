import { useState, useEffect } from 'react'
import React from 'react'

import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import inis from "../components/json/inis.json";


import { serverURL } from '../config.js'

import Footer from '../components/Footer'
import './css/GradingBestCand.css'
import Stepper from '../components/Stepper';
import {useHistory} from 'react-router';

const GradingBestCand = () => {
    const [speakers, setSpeakers] = useState([{ indexT: 'A1', 'name': "李阿华" }]);
    const [selected, setSelected] = useState(['', '', ''])


    const [showS, setShowS] = useState(false);
    const [showF, setShowF] = useState(false);

    const getSelection = (e, i) => {
        const temp = (e.target.value);
        const newS = selected.map((x) => x);
        newS[i] = temp;

        setSelected(newS);
    }

    const addGradingBestCand = async (selected) => {
        const res = await fetch((serverURL + 'gradingBestCand'), {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(selected),
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

        //addGradingBestCand(selected);
        setSelected(['','','']);

        setTimeout(() => history.push('/gradingSummary'), 1000);
    }

    const history = useHistory();

    return (
        <section className="header-gradient">
            <div className="container main_block">
                <Alert show={showS} className="alert" variant="success" onClose={() => setShowS(false)} dismissible>
                    <Alert.Heading className="alertHeading"> 提交成功 ！/ Submitted Successfully ！ </Alert.Heading>
                </Alert>
                <Alert show={showF} className="alert" variant="danger" onClose={() => setShowF(false)} dismissible>
                    <Alert.Heading className="alertHeading"> 提交失败 ！/ Submission Failed ！ </Alert.Heading>
                </Alert>

                <Stepper step={2} />
                <div className="register_header d-flex justify-content-center">
                    <span> 印象票 </span>
                </div>
                <div className="regBlock row">
                    <form className="col-12 regForm" noValidate onSubmit={onSubmit}>
                        <div className="d-flex justify-content-center">请选择三位最佳辩手候选人(请勿复选)</div>
                        <div className="school container col d-flex justify-content-center">
                            <Form.Control className="selectspeaker" as="select" onChange={(e) => getSelection(e, 0)} style={{ width: "50vw", margin: "10px" }}>
                                <option value='0' >
                                    第一位候选人
                                </option>
                                {speakers.map(speaker => (
                                    <option key={speaker.indexT} value={speaker.name} >{speaker.indexT} {speaker.name}</option>
                                ))}

                            </Form.Control>

                            <Form.Control className="selectspeaker" as="select" onChange={(e) => getSelection(e, 1)} style={{ width: "50vw", margin: "10px" }}>
                                <option value='0' >
                                    第二位候选人
                                </option>
                                {speakers.map(speaker => (
                                    <option key={speaker.indexT} value={speaker.name} >{speaker.indexT} {speaker.name}</option>
                                ))}

                            </Form.Control>

                            <Form.Control className="selectspeaker" as="select" onChange={(e) => getSelection(e, 2)} style={{ width: "50vw", margin: "10px" }}>
                                <option value='0' >
                                    第三位候选人
                                </option>
                                {speakers.map(speaker => (
                                    <option key={speaker.indexT} value={speaker.name} >{speaker.indexT} {speaker.name}</option>
                                ))}

                            </Form.Control>
                            {selected.map((x)=>x)}
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