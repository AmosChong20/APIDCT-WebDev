import { useState, useEffect } from 'react'
import React from 'react'
import './css/RegisterJudge.css';
import { useLocation, useHistory } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/BUtton';
import inis from "../components/json/inis.json";


import { serverURL } from '../config.js'

import Footer from '../components/Footer'
import StopicList from '../components/StopicList.js';

import ReactDOM from "react-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import Stepper from '../components/Stepper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

const createData = (name, team, mark1, mark2, mark3, mark4) => ({
  id: team ? name + "aff" : name + "neg",
  team,
  name,
  mark1: NaN,
  mark2: NaN,
  mark3: NaN,
  mark4: NaN,
  subt: 0,
  isEditMode: false
});

const title = {
  "1st": { "mark1": "立论(30分)", "mark2": "质询(20分)", "mark3": "答辩(10分)", "mark4": "语言风度(10分)", "subt": "得分" },
  "2nd": { "mark1": "驳论(30分)", "mark2": "质询(30分)", "mark3": "-", "mark4": "语言风度(10分)", "subt": "得分" },
  "3rd": { "mark1": "陈词(30分)", "mark2": "攻辩(30分)", "mark3": "-", "mark4": "语言风度(10分)", "subt": "得分" },
  "4th": { "mark1": "总结(60分)", "mark2": "-", "mark3": "-", "mark4": "语言风度(10分)", "subt": "得分" },
}

const speaker = { "1st": "一辩", "2nd": "二辩", "3rd": "三辩", "4th": "四辩" };

const CustomTableCell = ({ row, id, name, onChange, handleChange, checkState }) => {
  const t = title[row[id]][name];
  return (
    <TableCell align="left">
      <div style={{ fontSize: "120%" }}>{t}</div>
      {(t != "-") ?
        (name != "subt") ?
          <div class="d-flex flex-row align-items-center">
            {(name != "mark4") ?
                <Checkbox
                  checked={checkState}
                  onChange={e => handleChange(e, row, name)}
                  color="primary"
                />
              :<div></div>}
              <div>{
                checkState ?
                  <div>0</div> :
                  <Input
                    type="number"
                    value={row[name]}
                    name={name}
                    id={id}
                    onChange={e => onChange(e, row)}
                    placeholder="0"
                    inputProps={{ min: 0, max: parseInt(t.slice(-4, -2)) }}
                  />}</div>
            <div>{checkState}</div>
          </div>
          : <div style={{ fontSize: "150%", fontWeight: "bold" }}>{row[name]}</div>
        : <div>-</div>}
    </TableCell>
  );
};

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const GradingTable = () => {
  const location = useLocation();
  const [showS, setShowS] = useState(false);
  const [showF, setShowF] = useState(false);
  const [rows, setRows] = React.useState([
    createData("1st", 1, 0, 0, 0),
    createData("2nd", 1, 0, 0, 0),
    createData("3rd", 1, 0, 0, 0),
    createData("4th", 1, 0, 0, 0),
    createData("1st", 0, 0, 0, 0),
    createData("2nd", 0, 0, 0, 0),
    createData("3rd", 0, 0, 0, 0),
    createData("4th", 0, 0, 0, 0)
  ]);
  const [affDef, setAffDef] = useState();
  const [affFree, setAffFree] = useState();
  const [affTeamwork, setAffTeamwork] = useState();
  const [negDef, setNegDef] = useState();
  const [negFree, setNegFree] = useState();
  const [negTeamwork, setNegTeamwork] = useState();
  const [affTotal, setAffTotal] = useState(0);
  const [negTotal, setNegTotal] = useState(0);

  const [previous, setPrevious] = React.useState({});
  const classes = useStyles();

  const [timeout, setTimeout] = useState([]);

  const handleChange = (e, row, name) => {
    if (timeout.includes(row.id + name)) {
      setTimeout(timeout.filter(e => e !== row.id + name));
    }
    else{
      setTimeout([...timeout, row.id + name]);
      const { id } = row;
      const newRows = rows.map(row => {
        if (row.id === id) {
          row.subt = parseInt(row[name]) ? row.subt - parseInt(row[name]) : row.subt;
          return { ...row, [name]: parseInt(0) };
        }
        return row;
      });
      setRows(newRows);
    }
  };

  function total(rows, t, opt = 0) {
    var subtotal = 0;
    const def = t ? affDef : negDef;
    const free = t ? affFree : negFree;
    const tw = t ? affTeamwork : negTeamwork;
    subtotal += parseInt(def) ? parseInt(def) : 0;
    subtotal += parseInt(free) ? parseInt(free) : 0;
    subtotal += parseInt(tw) ? parseInt(tw) : 0;
    return rows.map(row => { if (row.team === t) return row.subt; else return 0 }).reduce((sum, i) => sum + i, 0) + subtotal;
  }

  React.useEffect(
    () => { setAffTotal(total(rows, 1)); setNegTotal(total(rows, 0)) }
  )

  const onChange = (e, row) => {
    if (!previous[row.id]) {
      setPrevious(state => ({ ...state, [row.id]: row }));
    }
    const value = e.target.value;
    const name = e.target.name;

    if (value > parseInt(title[row[e.target.id]][name].slice(-4, -2))) {
      setRows(rows);
      return;
    }

    const { id } = row;
    const newRows = rows.map(row => {
      if (row.id === id) {
        row.subt = parseInt(row[name]) ? row.subt - parseInt(row[name]) : row.subt;
        row.subt = parseInt(value) ? row.subt + parseInt(value) : row.subt;
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };

  const addGradingTableData = async (rows, affDef, affFree, affTeamwork, negDef, negFree, negTeamwork, affTotal, negTotal) => {
    const res = await fetch(('http://localhost:5000' + '/gradingTable'), {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        token: location.token,
        indexT: location.indexT,
        rows: rows,
        affDef: affDef,
        affFree: affFree,
        affTeamwork: affTeamwork,
        negDef: negDef,
        negFree: negFree,
        negTeamwork: negTeamwork,
        affTotal: affTotal,
        negTotal: negTotal
      }),
    })
    const data = await res.json()
    if (res.status === 201) {
      setShowS(true);
      setTimeout(() => setShowS(false), 1000);
      setShowF(false);
    }
    else {
      setShowF(true);
      setShowS(false);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()

    addGradingTableData(rows, affDef, affFree, affTeamwork, negDef, negFree, negTeamwork, affTotal, negTotal);
    setTimeout(() => history.push({
      pathname: '/gradingImpression',
      token: location.token,
      indexT: location.indexT
    }), 1000);


  }

  const history = useHistory();

  return (
    <section className="header-gradient">
      <div className="container main_block">
        <Alert show={showS} className="alert" variant="success" onClose={() => setShowS(false)} dismissible>
          <Alert.Heading className="alertHeading"> 提交成功 ！/ Registration Successful ！ </Alert.Heading>
        </Alert>
        <Alert show={showF} className="alert" variant="danger" onClose={() => setShowF(false)} dismissible>
          <Alert.Heading className="alertHeading"> 提交失败 ！/ Registration Failed ！ </Alert.Heading>
        </Alert>

        <Stepper step={0} />
        <div className="register_header">
          <span> 分数票 </span>
        </div>
        <div className="regBlock row">
          <form className="col-12 regForm" noValidate onSubmit={onSubmit}>

            <Table className={classes.table} aria-label="caption table">
              <caption></caption>
              <colgroup>
                <col style={{ width: '15%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '25%' }} />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={5}><div><h3>正方</h3><h5 style={{ fontSize: "120%", color: "grey" }}>若选手掉线超过缓冲时间，请在对应环节的分数栏打勾‘✔’，则该辩手在该环节的分数直接计为零分。</h5></div></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(0, 4).map(row => (
                  <StyledTableRow key={row.id}>
                    <TableCell align='center'>
                      <div style={{ fontSize: "150%" }}>
                        {speaker[row.name]}</div>
                    </TableCell>
                    <CustomTableCell {...{ row, id: "name", name: "mark1", onChange, handleChange, checkState: (timeout.includes(row.id + "mark1")) }} />
                    <CustomTableCell {...{ row, id: "name", name: "mark2", onChange, handleChange, checkState: (timeout.includes(row.id + "mark2")) }} />
                    <CustomTableCell {...{ row, id: "name", name: "mark3", onChange, handleChange, checkState: (timeout.includes(row.id + "mark3")) }} />
                    <CustomTableCell {...{ row, id: "name", name: "mark4", onChange, handleChange, checkState: (timeout.includes(row.id + "mark4")) }} />
                    <CustomTableCell {...{ row, id: "name", name: "subt", onChange, handleChange, checkState: (timeout.includes(row.id + "subt")) }} />
                  </StyledTableRow>
                ))}
                <TableRow>
                  <TableCell align="right" colSpan={5}><div style={{ fontSize: "120%" }}>答辩(10分)</div></TableCell>
                  <TableCell align="left"><Input type="number" value={affDef} placeholder="0" inputProps={{ min: 0, max: 10 }} onChange={e => { setAffDef(e.target.value > 10 ? affDef : e.target.value) }} /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right" colSpan={5}><div style={{ fontSize: "120%" }}>自由辩论(80分)</div></TableCell>
                  <TableCell align="left"><Input type="number" value={affFree} placeholder="0" inputProps={{ min: 0, max: 80 }} onChange={e => { setAffFree(e.target.value > 80 ? affFree : e.target.value) }} /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right" colSpan={5}><div style={{ fontSize: "120%" }}>团体配合与合作精神(30分)</div></TableCell>
                  <TableCell align="left"><Input type="number" value={affTeamwork} placeholder="0" inputProps={{ min: 0, max: 30 }} onChange={e => { setAffTeamwork(e.target.value > 30 ? affTeamwork : e.target.value) }} /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right" colSpan={5}><div style={{ fontSize: "170%" }}>总分(400分)</div></TableCell>
                  <TableCell align="left"><div style={{ fontSize: "170%", fontWeight: "bolder" }}>{affTotal}</div></TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Table className={classes.table} aria-label="caption table">
              <caption></caption>
              <colgroup>
                <col style={{ width: '15%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '25%' }} />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell colspan="5"><div><h3>反方</h3><h5 style={{ fontSize: "120%", color: "grey" }}>若选手掉线超过缓冲时间，请在对应环节的分数栏打勾‘✔’，则该辩手在该环节的分数直接计为零分。</h5></div></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(4, 8).map(row => (
                  <StyledTableRow key={row.id}>
                    <TableCell align="center">
                      <div style={{ fontSize: "150%" }}>{speaker[row.name]}</div>
                    </TableCell>
                    <CustomTableCell {...{ row, id: "name", name: "mark1", onChange, handleChange, checkState: (timeout.includes(row.id + "mark1")) }} />
                    <CustomTableCell {...{ row, id: "name", name: "mark2", onChange, handleChange, checkState: (timeout.includes(row.id + "mark2")) }} />
                    <CustomTableCell {...{ row, id: "name", name: "mark3", onChange, handleChange, checkState: (timeout.includes(row.id + "mark3")) }} />
                    <CustomTableCell {...{ row, id: "name", name: "mark4", onChange, handleChange, checkState: (timeout.includes(row.id + "mark4")) }} />
                    <CustomTableCell {...{ row, id: "name", name: "subt", onChange, handleChange, checkState: (timeout.includes(row.id + "subt")) }} />
                  </StyledTableRow>
                ))}
                <TableRow>
                  <TableCell align="right" colSpan={5}><div style={{ fontSize: "120%" }}>答辩(10分)</div></TableCell>
                  <TableCell align="left"><Input type="number" value={negDef} placeholder="0" inputProps={{ min: 0, max: 10 }} onChange={e => { setNegDef(e.target.value > 10 ? negDef : e.target.value) }} /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right" colSpan={5}><div style={{ fontSize: "120%" }}>自由辩论(80分)</div></TableCell>
                  <TableCell align="left"><Input type="number" value={negFree} placeholder="0" inputProps={{ min: 0, max: 80 }} onChange={e => { setNegFree(e.target.value > 80 ? negFree : e.target.value) }} /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right" colSpan={5}><div style={{ fontSize: "120%" }}>团体配合与合作精神(30分)</div></TableCell>
                  <TableCell align="left"><Input type="number" value={negTeamwork} placeholder="0" inputProps={{ min: 0, max: 30 }} onChange={e => { setNegTeamwork(e.target.value > 30 ? negTeamwork : e.target.value) }} /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right" colSpan={5}><div style={{ fontSize: "170%" }}>总分(400分)</div></TableCell>
                  <TableCell align="left"><div style={{ fontSize: "170%", fontWeight: "bolder" }}>{negTotal}</div></TableCell>
                </TableRow>
              </TableBody>
            </Table>

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

export default GradingTable;