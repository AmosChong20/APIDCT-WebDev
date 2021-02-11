import React, { Component } from 'react';
import HomeHeader from '../components/HomeHeader'
import Info from '../components/Info'
import Footer from '../components/Footer'
import Timeline from '../components/Timeline'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="home">
                <HomeHeader />
                <Info />
                <Timeline />
                <Footer />
            </div>
        );
    }
}
 
export default Home;