import React from 'react'
import './css/match.css';
import Footer from '../components/Footer'

const MatchTwo = () => {
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
              <p className="tableheader">12进6淘汰赛</p>
              <table>
                <tbody>
                <tr>
                <td rowspan="2" className="category">价值型</td>
                <td rowspan="2" className="group">AB</td>
                <td className="topic">正：科技是自由意志的牢笼</td>
                </tr>
                <tr>
                <td className="topic">反：科技是自由意志的羽翼</td>
                </tr>
                <tr>
                <td rowspan="2" className="category">价值型</td>
                <td rowspan="2" className="group">CD</td>
                <td className="topic">正：低欲望社会的形成是社会进步的表现</td>
                </tr>
                <tr>
                <td className="topic">反：低欲望社会的形成是社会退步的表现</td>
                </tr>
                <tr>
                <td rowspan="2" className="category">事实型</td>
                <td rowspan="2" className="group">EF</td>
                <td className="topic">正：应该以侵权为由遏止短视频二创的疯狂增长</td>
                </tr>
                <tr>
                <td className="topic">反：不应该以侵权为由遏止短视频二创的疯狂增长</td>
                </tr>
                <tr>
                <td rowspan="2" className="category">价值型</td>
                <td rowspan="2" className="group">GH</td>
                <td className="topic">正：当代文学作品在翻译时，应该支持译者的&ldquo;创造性叛逆&rdquo;</td>
                </tr>
                <tr>
                <td className="topic">反：当代文学作品在翻译时，不应该支持译者的&ldquo;创造性叛逆&rdquo;</td>
                </tr>
                <tr>
                <td rowspan="2" className="category">事实型</td>
                <td rowspan="2" className="group">IJ</td>
                <td className="topic">正：后疫情时代加速了全球化趋势</td>
                </tr>
                <tr>
                <td className="topic">反：后疫情时代减缓了全球化趋势</td>
                </tr>
                <tr>
                <td rowspan="2" className="category">事实型</td>
                <td rowspan="2" className="group">KL</td>
                <td className="topic">正：选举后，民选议员跳槽应该接受法律制裁</td>
                </tr>
                <tr>
                <td className="topic">反：选举后，民选议员跳槽不应该接受法律制裁</td>
                </tr>
                </tbody>
            </table>
              <p className="tableheader">6进4排位赛</p>
              <table>
                <tbody>
                <tr>
                <td rowspan="2" className="serial">M</td>
                <td className="topic">正：积极冲浪是后真相时代更好的生存之道</td>
                </tr>
                <tr>
                <td className="topic">反：远离喧嚣是后真相时代更好的生存之道</td>
                </tr>
                <tr>
                <td rowspan="2" className="serial">N</td>
                <td className="topic">正：艺术作品评级对艺术文化发展利大于弊</td>
                </tr>
                <tr>
                <td className="topic">反：艺术作品评级对艺术文化发展弊大于利</td>
                </tr>
                </tbody>
              </table>
              <p className="tableheader">半决赛</p>
              <table>
                <tbody>
                <tr>
                <td rowspan="2" className="serial">O1</td>
                <td className="topic">正：无用之用方为大用</td>
                </tr>
                <tr>
                <td className="topic">反：有用之用方为大用</td>
                </tr>
                <tr>
                <td rowspan="2" className="serial">O2</td>
                <td className="topic">正：喜剧贵在引人发笑</td>
                </tr>
                <tr>
                <td className="topic">反：喜剧贵在引人思考</td>
                </tr>
                </tbody>
              </table> 
              <p className="tableheader">决赛</p>
              <table>
                <tbody>
                <tr>
                <td rowspan="2" className="serial">P1</td>
                <td className="topic">正： 把人生看作一幅蓝图的人生态度更应该被追求</td>
                </tr>
                <tr>
                <td className="topic">反： 把人生看作一场冒险的人生态度更应该被追求</td>
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

export default MatchTwo
