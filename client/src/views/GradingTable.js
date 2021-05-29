import { useState, useEffect } from 'react'
import React from 'react'
import './css/RegisterJudge.css';

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
  id: team?name+"aff":name+"neg",
  team,
  name,
  mark1: 0,
  mark2: 0,
  mark3: 0,
  mark4: 0,
  subt: 0,
  isEditMode: false
});

const title = {
  "1st": { "mark1": "立论(30分)", "mark2": "质询(20分)", "mark3": "答辩(20分)", "mark4": "语言风度(10分)", "subt": "得分" },
  "2nd": { "mark1": "驳论(30分)", "mark2": "质询(30分)", "mark3": "-", "mark4": "语言风度(10分)", "subt": "得分" },
  "3rd": { "mark1": "陈词(30分)", "mark2": "攻辩(30分)", "mark3": "-", "mark4": "语言风度(10分)", "subt": "得分" },
  "4th": { "mark1": "总结(60分)", "mark2": "-", "mark3": "-", "mark4": "语言风度(10分)", "subt": "得分" },
}

const speaker = { "1st": "一辩", "2nd": "二辩", "3rd": "三辩", "4th": "四辩" };

const CustomTableCell = ({ row, id, name, onChange }) => {
  const classes = useStyles();
  const { isEditMode } = row;
  const t = title[row[id]][name];
  return (
    <TableCell align="left">
      <div style={{ fontSize: "120%" }}>{t}</div>
      {(t != "-") ?
        (name != "subt") ?
          <Input
            type="number"
            value={row[name]}
            name={name}
            onChange={e => onChange(e, row)}
          />
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
  const [affDef,setAffDef]=useState(0);
  const [affFree,setAffFree]=useState(0);
  const [affTeamwork,setAffTeamwork]=useState(0);
  const [negDef,setNegDef]=useState(0);
  const [negFree,setNegFree]=useState(0);
  const [negTeamwork,setNegTeamwork]=useState(0);
  const [affTotal, setAffTotal] = useState(0);
  const [negTotal, setNegTotal] = useState(0);

  const [previous, setPrevious] = React.useState({});
  const classes = useStyles();

  function total(rows,t) {
    const subtotal=t?(parseInt(affDef)+parseInt(affFree)+parseInt(affTeamwork)):(negDef+negFree+negTeamwork);
    return rows.map(row => {if (row.team===t) return row.subt; else return 0}).reduce((sum, i) => sum + i, 0)+parseInt(subtotal);
  }

  const onChange = (e, row) => {
    if (!previous[row.id]) {
      setPrevious(state => ({ ...state, [row.id]: row }));
    }
    const value = e.target.value;
    const name = e.target.name;
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
    setAffTotal(total(newRows,1));
    setNegTotal(total(newRows,0));
  };

  const onSubmit = (e) => {
    e.preventDefault()
    // console.log(isEmail1);
    // registerJudgeData.indexA = stopics;
    // if(registerJudgeData.judgeChiName === '' ||
    // registerJudgeData.indexA === []){
    //   setShowF(true);
    //   setShowS(false);
    //   return;
    // }

    /*To add */


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

        <Stepper step={0} />
        <div className="register_header">
          <span> 分数票 </span>
        </div>
        <div className="regBlock row">
          <form className="col-12 regForm" noValidate onSubmit={onSubmit}>

            <Table className={classes.table} aria-label="caption table">
              <caption>备注备注备注备注备注备注</caption>
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
                  <TableCell><div><h3>正方</h3></div></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(0, 4).map(row => (
                  <StyledTableRow key={row.id}>
                    <TableCell align='center'>
                      <div style={{ fontSize: "150%" }}>{speaker[row.name]}</div>
                    </TableCell>
                    <CustomTableCell {...{ row, id: "name", name: "mark1", onChange }} />
                    <CustomTableCell {...{ row, id: "name", name: "mark2", onChange }} />
                    <CustomTableCell {...{ row, id: "name", name: "mark3", onChange }} />
                    <CustomTableCell {...{ row, id: "name", name: "mark4", onChange }} />
                    <CustomTableCell {...{ row, id: "name", name: "subt", onChange }} />
                  </StyledTableRow>
                ))}
                <TableRow>
                  <TableCell align="right" colSpan={5}><div style={{ fontSize: "120%" }}>答辩（10分)</div></TableCell>
                  <TableCell align="left"><Input type="number" value={affDef} onChange={e => {setAffDef(e.target.value);if(parseInt(e.target.value)&& !setAffDef(e.target.value))setAffTotal(total(rows,1))}}/></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right" colSpan={5}><div style={{ fontSize: "120%" }}>自由辩论</div></TableCell>
                  <TableCell align="left"><div style={{ fontSize: "120%", fontWeight: "bolder" }}>{affFree}</div></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right" colSpan={5}><div style={{ fontSize: "120%" }}>团体配合与合作精神</div></TableCell>
                  <TableCell align="left"><div style={{ fontSize: "120%", fontWeight: "bolder" }}>{affTeamwork}</div></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right" colSpan={5}><div style={{ fontSize: "170%" }}>总分</div></TableCell>
                  <TableCell align="left"><div style={{ fontSize: "170%", fontWeight: "bolder" }}>{affTotal}</div></TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Table className={classes.table} aria-label="caption table">
              <caption>记得改这里哈哈哈哈哈哈</caption>
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
                  <TableCell><div><h3>反方</h3></div></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(4,8).map(row => (
                  <StyledTableRow key={row.id}>
                    <TableCell align="center">
                      <div style={{ fontSize: "150%" }}>{speaker[row.name]}</div>
                    </TableCell>
                    <CustomTableCell {...{ row, id: "name", name: "mark1", onChange }} />
                    <CustomTableCell {...{ row, id: "name", name: "mark2", onChange }} />
                    <CustomTableCell {...{ row, id: "name", name: "mark3", onChange }} />
                    <CustomTableCell {...{ row, id: "name", name: "mark4", onChange }} />
                    <CustomTableCell {...{ row, id: "name", name: "subt", onChange }} />
                  </StyledTableRow>
                ))}
                <TableRow>
                  <TableCell align="right" colSpan={5}><div style={{ fontSize: "170%" }}>总分</div></TableCell>
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
