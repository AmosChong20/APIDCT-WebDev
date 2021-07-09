import React from 'react'
import './css/Sponsor.css';
import ICBCsponsor from '../assets/image/sponsorlogotransp.png';
import Footer from '../components/Footer'

const Sponsor = () => {
  return (
    <div>
      <div className="mainBlockBracket">
        <div className = "STitle">
          鸣谢
        </div>
        <a href="https://singapore.icbc.com.cn/ICBC/%E6%B5%B7%E5%A4%96%E5%88%86%E8%A1%8C/%E6%96%B0%E5%8A%A0%E5%9D%A1%E7%BD%91%E7%AB%99/en/" target="_blank"><img src={ICBCsponsor} alt="ICBC" className="ICBCsponsor"/></a>
        <div className = "SSubTitle">
          中国工商银行新加坡分行
        </div>
        <div className = "content">
          &nbsp;  &nbsp; 中国工商银行新加坡分行成立于1993年，是中国工商银行第一家海外机构。经过多年的不懈努力，新加坡分行现已成为新加坡领先的商业银行之一， 业务领域覆盖了个人金融服务、私人银行金融服务、企业金融服务以及机构金融服务。
        </div>
        <div className = "SSubTitle1" > 
          &nbsp;  &nbsp;  中国境外第一家、新加坡唯一人民币清算行
        </div>
        <div className = "content">
          &nbsp;  &nbsp; 2013年，中国人民银行任命中国工商银行新加坡分行为中国境外第一家人民币清算行，同时也是新加坡唯一的人民币清算行。
        </div>
        <div className = "SSubTitle1" > 
          &nbsp;  &nbsp;  新加坡首选人民币银行
        </div>
        <div className = "content">
          &nbsp;  &nbsp;  为推动新加坡人民币业务的发展，我们成立了私人银行中心、大宗商品及结构性贸易融资中心、现金管理中心以及金融机构营销中心致力为客户提供全方位的、卓越的跨境人民币产品和服务，涵盖人民币存款、人民币跨境贸易结算、资本结算、贸易融资、全球现金管理、资产管理、人民币现钞、人民币债 券发行、特别定制人民币业务服务等。我们也是第一家在新加坡成立债券资本 市场专业团队的中资银行。中国工商银行是全世界最大的人民币银行，依托集团强大的融资能力、先进的科技平台以及覆盖全球的金融网络，我们已成为新加坡人民币首选银行。
        </div>
        <div className = "SSubTitle1" > 
          &nbsp;  &nbsp;  联通中国的桥梁
        </div>
        <div className = "content">
          &nbsp;  &nbsp; 经过多年的发展，凭借对中国政策和市场的深入理解，我们与众多的跨国企业、中资企业、不同规模的新加坡本地企业建立了战略合作伙伴关系，极大 促进了这些企业与中国的投资与贸易往来。
        </div>

        <div className = "SSubTitle">
          Industrial and Commercial Bank of China Singapore Branch
        </div>
        <div className = "content">
          &nbsp;  &nbsp; ICBC Singapore Branch, the first overseas institution of ICBC, was established in 1993. Over years of arduous endeavor, ICBC Singapore Branch has become one of the leading commercial banks in Singapore, offering a full range of financial products and services covering retail banking, private banking, corporate banking and institutional banking.

        </div>
        <div className = "SSubTitle1" > 
          &nbsp;  &nbsp;  THE FIRST RMB CLEARING BANK OUTSIDE GREATER CHINA THE SOLE RMB CLEARING BANK IN SINGAPORE
        </div>
        <div className = "content">
          &nbsp;  &nbsp; In 2013, ICBC Singapore Branch was appointed by The People’s Bank of China as the first RMB Clearing Bank outside Great China and the sole RMB Clearing Bank in Singapore.
        </div>
        <div className = "SSubTitle1" > 
          &nbsp;  &nbsp;  THE PERFERRED RMB BANK IN SINGAPORE
        </div>
        <div className = "content">
          &nbsp;  &nbsp;  As the sole RMB Clearing Bank in Singapore, ICBC Singapore Branch is able to deliver comprehensive and superior RMB cross-border products and services to all our valued customers. We have established the Private Banking Hub, Commerce & Structured Trade Finance Hub, Cash Management Hub and Financial Institutions Center to promote RMB related products covering areas such as RMB deposit & loan, RMB cross-border trade settlement, capital settlement, trade financing, global cash management, asset management, RMB bond issuance and special customer-tailored RMB services. We are the first Chinese bank to set up a Debt Capital Markets team in Singapore. Leveraging on ICBC being the world’s largest RMB bank and its strong funding capability, advanced technological platform and global institutional network, ICBC Singapore Branch has already been established as The Preferred RMB Bank in Singapore.
        </div>
        <div className = "SSubTitle1" > 
          &nbsp;  &nbsp;  A BRIDGE IN AND OUT OF CHINA
        </div>
        <div className = "content">
          &nbsp;  &nbsp; Over the years, with in-depth understanding of Chinese policies and China market, we have forged strategic cooperation with many leading multinational companies, Chinese companies, Singapore large corporations and SMEs, enabling them to expand and deepen their trade and investment in and out of China.
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Sponsor
