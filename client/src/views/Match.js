import React from 'react'
import './css/match.css';
import Footer from '../components/Footer'

const Match = () => {
  return (
    <section>
      <div className="container">
        <body>
            <div className="cardtitle">
                <p className="chineseTitle">工行杯 - 第十届亚太华语辩论公开赛</p>
                <p className="englishTitle">ICBC CUP - THE 10TH ASIAN-PACIFIC INTERVARSITY CHINESE DEBTATE TOURNAMENT</p>
                <p className="resultsTitle">辩题抽签结果</p>    
            </div>
            <p className="tableheader">循环赛</p>
            <div></div>
            <table>
              <tbody>
                <tr>
                  <th className="th">&nbsp;</th>
                  <th className="th">辩题类型</th>
                  <th className="th">编号</th>
                  <th className="th">辩题</th>
                </tr>
                <tr>
                  <td rowspan="2" className="group">AB</td>
                  <td rowspan="2" className="category">政治法律</td>
                  <td className="serial">A</td>
                  <td className="topic">低度开发国家应该优先发展基建/教育</td>
                </tr>
                <tr>
                  <td className="serial">B</td>
                  <td className="topic">&ldquo;甜心宝贝&rdquo;平台应该/不应该被合法化</td>
                </tr>
                <tr>
                  <td rowspan="2" className="group">CD</td>
                  <td rowspan="2" className="category">时事热点</td>
                  <td className="serial">C</td>
                  <td className="topic">新加坡政府应/不应该推行疫苗护照</td>
                </tr>
                <tr>
                  <td className="serial">D</td>
                  <td className="topic">推广人造肉利大于弊/弊大于利</td>
                </tr>
                <tr>
                  <td rowspan="2" className="group">EF</td>
                  <td rowspan="2" className="category">文化艺术</td>
                  <td className="serial">E</td>
                  <td className="topic">文化先行/经济先行更有利于文化的海外传播</td>
                </tr>
                <tr>
                  <td className="serial">F</td>
                  <td className="topic">用现代化方法改革传统艺术，对其发扬利大于弊/弊大于利</td>
                </tr>
                <tr>
                  <td rowspan="2" className="group">GH</td>
                  <td rowspan="2" className="category">科技创新</td>
                  <td className="serial">G</td>
                  <td className="topic">当今科技发展加剧/减缓社会不平等</td>
                </tr>
                <tr>
                  <td className="serial">H</td>
                  <td className="topic">脑机接口技术是人类之福/之祸</td>
                </tr>
                <tr>
                  <td rowspan="2" className="group">IJ</td>
                  <td rowspan="2" className="category">社会风潮</td>
                  <td className="serial">I</td>
                  <td className="topic">社交媒体公司正在/未在变相操控世界</td>
                </tr>
                <tr>
                  <td className="serial">J</td>
                  <td className="topic">批判主流审美会让审美更多元化/单一化</td>
                </tr>
                <tr>
                  <td rowspan="2" className="group">KL</td>
                  <td rowspan="2" className="category">青年教育</td>
                  <td className="serial">K</td>
                  <td className="topic">重仪式感的教养对孩子成长利大于弊</td>
                </tr>
                <tr>
                  <td className="serial">L</td>
                  <td className="topic">全面推行儿童无性别教育正当其时/时机未到</td>
                </tr>
              </tbody>
            </table>
        </body>        
      </div>
      <Footer/>
    </section>
  )
}

export default Match
