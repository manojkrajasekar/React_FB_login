import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './Facebooklogin.css';


class Facebooklogin extends Component{
    
    componentDidMount() {
        window.fbAsyncInit = function() {
            window.FB.init({
            appId      : '1099422136861554',
            cookie     : true,  // enable cookies to allow the server to access the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.8' // use version 2.1
            });
        };
      
          // Now that we've initialized the JavaScript SDK, we call
          // FB.getLoginStatus().  This function gets the state of the
          // person visiting this page and can return one of three states to
          // the callback you provide.  They can be:
          //
          // 1. Logged into your app ('connected')
          // 2. Logged into Facebook, but not your app ('not_authorized')
          // 3. Not logged into Facebook and can't tell if they are logged into
          //    your app or not.
          //
          // These three cases are handled in the callback function.
             // Load the SDK asynchronously
        ((function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            //js.src = "//connect.facebook.net/en_US/sdk.js";
            js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12';
            //js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=1099422136861554";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk')));

          
        window.FB.getLoginStatus(function(response) {
                this.statusChangeCallback(response);
            }.bind(this));
      
       
    }
    
      // Here we run a very simple test of the Graph API after login is
      // successful.  See statusChangeCallback() for when this call is made.
      testAPI = () => {
        console.log('Welcome!  Fetching your information.... ');
        window.FB.api('/me', function(response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
          'Thanks for logging in, ' + response.name + '!';
        });
      }
      
      // This is called with the results from from FB.getLoginStatus().
      statusChangeCallback = (response) => {
        console.log('statusChangeCallback');
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
          // Logged into your app and Facebook.
          this.testAPI();
        } else if (response.status === 'not_authorized') {
          // The person is logged into Facebook, but not your app.
          document.getElementById('status').innerHTML = 'Please log ' +
            'into this app.';
        } else {
          // The person is not logged into Facebook, so we're not sure if
          // they are logged into this app or not.
          document.getElementById('status').innerHTML = 'Please log ' +
          'into Facebook.';
        }
      }
      
      // This function is called when someone finishes with the Login
      // Button.  See the onlogin handler attached to it in the sample
      // code below.
      checkLoginState = () => {
        window.FB.getLoginStatus(function(response) {
          this.statusChangeCallback(response);
        }.bind(this));
      }
      
      handleClick = () => {
        window.FB.login(this.checkLoginState());
      }
    
        render(){
            return(
                <div className="content">
                    <div className="login">
                        <div className="app-title">
                            PIXELS
                        </div>
                        <div className="fblogin">
                            <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false" onClick={ () => this.handleClick() }></div>
                        </div>         
                    </div>
                </div>
            )
        }
}


export default Facebooklogin;