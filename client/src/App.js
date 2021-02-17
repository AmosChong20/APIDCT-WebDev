import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import TopNavbar from './components/TopNavbar'
import Loading from './components/Loading'
import ProtectedRoute from './auth/ProtectedRoute'
import Footer from './components/Footer'

import Home from './views/Home'
import Register from './views/Register'
import SchoolList from './views/SchoolList'
import Portfolio from './views/Portfolio';

import './App.css';


const App = () => {
    // const { isLoading } = useAuth0();

    // if (isLoading) {
    //     return <Loading />;
    // }

    
    return (
        <div id="app" className="d-flex flex-column h-100">
            <TopNavbar />
            <Switch>
                <Route path="/" exact component={Home} />
                {/*<ProtectedRoute path="/page2" exact component={Page2} /> */}
                <Route path="/register" exact component={Register} />
                <Route path="/schoolList" exact component={SchoolList} />
                <Route path="/portfolio" exact component={Portfolio} />
            </Switch>
            {/* <Footer /> */}
        </div>

    );
    

}

export default App;
