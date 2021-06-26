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
            
            <div className="match mainBlockBracket">
              <p className="tableheader">循环赛</p>
              <table>
              <tbody>
              <tr>
              <td width="64">&nbsp;</td>
              <td width="64">辩题类型</td>
              <td width="64">编号</td>
              <td>辩题</td>
              </tr>
              <tr>
              <td rowspan="4" className="group">AB</td>
              <td rowspan="4" className="category">政治法律</td>
              <td rowspan="2" className="serial">A</td>
              <td className="topic">正：低度开发国家应该优先发展基建</td>
              </tr>
              <tr>
              <td className="topic">反：低度开发国家应该优先发展教育</td>
              </tr>
              <tr>
              <td rowspan="2" className="serial">B</td>
              <td className="topic">正：&ldquo;甜心宝贝&rdquo;平台应该被合法化</td>
              </tr>
              <tr>
              <td className="topic">反：&ldquo;甜心宝贝&rdquo;平台不应该被合法化</td>
              </tr>
              <tr>
              <td rowspan="4" className="group">CD</td>
              <td rowspan="4" className="category">时事热点</td>
              <td rowspan="2" className="serial">C</td>
              <td className="topic">正：新加坡政府应该推行疫苗护照</td>
              </tr>
              <tr>
              <td className="topic">反：新加坡政府不应该推行疫苗护照</td>
              </tr>
              <tr>
              <td rowspan="2" className="serial">D</td>
              <td className="topic">正：推广人造肉利大于弊</td>
              </tr>
              <tr>
              <td className="topic">反：推广人造肉弊大于利</td>
              </tr>
              <tr>
              <td rowspan="4" className="group">EF</td>
              <td rowspan="4" className="category">文化艺术</td>
              <td rowspan="2" className="serial">E</td>
              <td className="topic">正：文化先行更有利于文化的海外传播</td>
              </tr>
              <tr>
              <td className="topic">反：经济先行更有利于文化的海外传播</td>
              </tr>
              <tr>
              <td rowspan="2" className="serial">F</td>
              <td className="topic">正：用现代化方法改革传统艺术，对其发扬利大于弊</td>
              </tr>
              <tr>
              <td className="topic">反：用现代化方法改革传统艺术，对其发扬弊大于利</td>
              </tr>
              <tr>
              <td rowspan="4" className="group">GH</td>
              <td rowspan="4" className="category">科技创新</td>
              <td rowspan="2" className="serial">G</td>
              <td className="topic">正：当今科技发展加剧社会不平等</td>
              </tr>
              <tr>
              <td className="topic">反：当今科技发展减缓社会不平等</td>
              </tr>
              <tr>
              <td rowspan="2" className="serial">H</td>
              <td className="topic">正：脑机接口技术是人类之福</td>
              </tr>
              <tr>
              <td className="topic">反：脑机接口技术是人类之祸</td>
              </tr>
              <tr>
              <td rowspan="4" className="group">IJ</td>
              <td rowspan="4" className="category">社会风潮</td>
              <td rowspan="2" className="serial">I</td>
              <td className="topic">正：社交媒体公司正在变相操控世界</td>
              </tr>
              <tr>
              <td className="topic">反：社交媒体公司未在变相操控世界</td>
              </tr>
              <tr>
              <td rowspan="2" className="serial">J</td>
              <td className="topic">正：批判主流审美会让审美更多元化</td>
              </tr>
              <tr>
              <td className="topic">反：批判主流审美会让审美更单一化</td>
              </tr>
              <tr>
              <td rowspan="4" className="group">KL</td>
              <td rowspan="4" className="category">青年教育</td>
              <td rowspan="2" className="serial">K</td>
              <td className="topic">正：重仪式感的教养对孩子成长利大于弊</td>
              </tr>
              <tr>
              <td className="topic">反：重仪式感的教养对孩子成长弊大于利</td>
              </tr>
              <tr>
              <td rowspan="2" className="serial">L</td>
              <td className="topic">正：全面推行儿童无性别教育正当其时</td>
              </tr>
              <tr>
              <td className="topic">反：全面推行儿童无性别教育时机未到</td>
              </tr>
              </tbody>
              </table>
            </div>
        </body>        
      </div>
      <Footer/>
    </section>
  )
}

export default Match
