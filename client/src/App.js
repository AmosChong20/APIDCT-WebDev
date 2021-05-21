import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import TopNavbar from './components/TopNavbar'
import Loading from './components/Loading'
import ProtectedRoute from './auth/ProtectedRoute'
import Footer from './components/Footer'

import Home from './views/Home'
import Register from './views/Register'
import RegisterTest from './views/RegisterTest'
import SchoolList from './views/SchoolList'
// import Portfolio from './views/Portfolio';

import './App.css';
import StarWars from './views/StarWars';
import StarwarsList from './views/StarwarsList';
import StarwarsListTemp from './views/StarwarsListTemp';

import StarwarsListmy from './views/StarwarsListmy';
import StarwarsListsg from './views/StarwarsListsg';
import StarwarsListhk from './views/StarwarsListhk';
import StarwarsListmc from './views/StarwarsListmc';
import StarwarsListau from './views/StarwarsListau';
import StarwarsListcm from './views/StarwarsListcm';
import StarwarsListuk from './views/StarwarsListuk';
import RegisterJudge from './views/RegisterJudge';
import RegisterTopic from './views/RegisterTopic';
import Vote from './views/Vote';
import Test from './views/Test';

import JudgeLogin from './views/JudgeLogin';

const App = () => {
    // const { isLoading } = useAuth0();

    // if (isLoading) {
    //     return <Loading />;
    // }

     
    return (
        <section>
            <div id="app">
                <TopNavbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    {/*<ProtectedRoute path="/page2" exact component={Page2} /> */}
                    {/* <Route path="/register" exact component={Register} /> */}
                    {/* <Route path="/registerTest" exact component={RegisterTest} /> */}
                    {/* <Route path="/schoolList" exact component={SchoolList} /> */}
                    {/* <Route path="/starwars" exact component={StarWars} /> */}
                    {/* <Route path="/starwarslist" exact component={StarwarsList} /> */}
                    <Route path="/starwarslisttemp" exact component={StarwarsListTemp} />
                    <Route path="/registerJudge" exact component={RegisterJudge} />
                    <Route path="/registerTopic" exact component={RegisterTopic} />

                    <Route path="/judgeLogin" exact component={JudgeLogin} />
                    <Route path="/test" exact component={Test} />
                    <Route path="/vote" exact component={Vote} />

                    {/* <Route path="/starwarslistmy" exact component={StarwarsListmy} />
                    <Route path="/starwarslistsg" exact component={StarwarsListsg} />
                    <Route path="/starwarslisthk" exact component={StarwarsListhk} />
                    <Route path="/starwarslistmc" exact component={StarwarsListmc} />
                    <Route path="/starwarslistau" exact component={StarwarsListau} />
                    <Route path="/starwarslistcm" exact component={StarwarsListcm} />
                    <Route path="/starwarslistuk" exact component={StarwarsListuk} /> */}
                    {/* <Route path="/portfolio" exact component={Portfolio} /> */}
                </Switch>
                {/* <Footer /> */}
            </div>
        </section>
    );
    

}

export default App;
