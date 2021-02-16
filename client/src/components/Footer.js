import React, { Component } from 'react';
import './css/Footer.css';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <div>
                    <h4>联系方式</h4>
                    <dl>
                        <dd>何佳萱：+65 83148709</dd>
                    </dl>
                    <dl>
                        <dd><a href="mailto:ho0012an@e.ntu.edu.sg">ho0012an@e.ntu.edu.sg</a></dd>
                    </dl>
                    <dl>
                        <dd>何智圆：+65 86500569</dd>
                    </dl>
                    <dl>
                        <dd><a href="mailto:c190024@e.ntu.edu.sg">c190024@e.ntu.edu.sg</a></dd>
                    </dl>
                    <dl>
                        <dd>沈佳欣：+65 91087660</dd>
                    </dl>
                    <dl>
                        <dd><a href="mailto:jsim029@e.ntu.edu.sg">jsim029@e.ntu.edu.sg</a></dd>
                    </dl>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h4>关注我们</h4>
                      <ul className="social-network social-circle">
                       <li><a href="https://www.facebook.com/NTUCSapchinesedebate/" className="icoFacebook" title="Facebook" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                       <li><a href="https://www.instagram.com/apchinesedebate/" className="icoinstagram" title="instagram" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                       <li><a href="https://www.youtube.com/channel/UCbcpKtCxhYXWGptwk-deteg" className="icoyoutube" title="youtube" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a></li>
                       <li><a href="https://weibo.com/u/5398940329" className="icoweibo" title="weibo" target="_blank" rel="noreferrer"><i className="fab fa-weibo"></i></a></li>
                      </ul>       
                </div>
              </div>
              <div className="row bottom-div">
                <div className="col-12 bottom-text">
                  <p className="text-center">南洋理工大学中文学会 Nanyang Technological University Chinese Society</p>
                </div>
              </div>
            </div>
          </footer>
        );
    }
}
 
export default Footer;