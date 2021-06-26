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
              <p className="tableheader">循环赛</p>
              <table>
                <tbody>
                <tr>
                <td rowspan="2">价值型</td>
                <td rowspan="2">AB</td>
                <td>正：科技是自由意志的牢笼</td>
                </tr>
                <tr>
                <td>反：科技是自由意志的羽翼</td>
                </tr>
                <tr>
                <td rowspan="2">价值型</td>
                <td rowspan="2">CD</td>
                <td>正：低欲望社会的形成是社会进步的表现</td>
                </tr>
                <tr>
                <td>反：低欲望社会的形成是社会退步的表现</td>
                </tr>
                <tr>
                <td rowspan="2">事实型</td>
                <td rowspan="2">EF</td>
                <td>正：应该以侵权为由遏止短视频二创的疯狂增长</td>
                </tr>
                <tr>
                <td>反：不应该以侵权为由遏止短视频二创的疯狂增长</td>
                </tr>
                <tr>
                <td rowspan="2">价值型</td>
                <td rowspan="2">GH</td>
                <td>正：当代文学作品在翻译时，应该支持译者的&ldquo;创造性叛逆&rdquo;</td>
                </tr>
                <tr>
                <td>反：当代文学作品在翻译时，不应该支持译者的&ldquo;创造性叛逆&rdquo;</td>
                </tr>
                <tr>
                <td rowspan="2">事实型</td>
                <td rowspan="2">IJ</td>
                <td>正：后疫情时代加速了全球化趋势</td>
                </tr>
                <tr>
                <td>反：后疫情时代减缓了全球化趋势</td>
                </tr>
                <tr>
                <td rowspan="2">事实型</td>
                <td rowspan="2">KL</td>
                <td>正：选举后，民选议员跳槽应该接受法律制裁</td>
                </tr>
                <tr>
                <td>反：选举后，民选议员跳槽不应该接受法律制裁</td>
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
