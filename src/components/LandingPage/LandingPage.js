import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class LandingPage extends Component {

    componentDidMount() {
            window.fbAsyncInit = function() {
                window.FB.init({
                appId      : '1099422136861554',
                cookie     : true,  // enable cookies to allow the server to access the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.8' // use version 2.1
                });
        }
    }

    logout = () => {
        window.FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                console.log('Going to log out');
                window.FB.logout((response) =>{
                    console.log('logged out');
                    return (<Redirect to ="/" />);
                });
            }
        });
    }

    render() {
        return (
            <div>
                <p>This is the landing page</p>
                <button onClick={this.logout}>Log out</button>
            </div>
        );
    }
}

export default LandingPage;