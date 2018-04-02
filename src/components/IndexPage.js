import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Facebooklogin from './LoginPage/Facebooklogin';
import LandingPage from './LandingPage/LandingPage';

class IndexPage extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/"  component={Facebooklogin}/>
                    <Route exact path="/LandingPage" component={LandingPage} />
                </Switch>
            </div>
        );
    }
}
export default IndexPage;