import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class LandingPage extends Component {

    state = {
        isLoggedOut: false
    }

    setLoggedOutValue = () => {
        isLoggedOut: !this.state.isLoggedOut
    }

    logout = () => {
        window.FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                console.log('Going to log out');
                window.FB.logout((response) => {
                    return (this.setLoggedOutValue);
                });
            }
        });
    }

    render() {
        if(this.state.isLoggedOut === true) {
            return (
                <Redirect push to = "/" />
            );    
        }
        else {
            return (
                <div>
                    <p>This is the landing page</p>
                    <button onClick={this.logout}>Log out</button>
                </div>
            );
        }
    }
}

export default LandingPage;