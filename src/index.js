import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import Facebooklogin from './components/LoginPage/Facebooklogin';
import IndexPage from './components/IndexPage';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';


// const responseFacebook = (response) => {
//     console.log(response);
//   }
   

ReactDOM.render(
    // <FacebookLogin
    // appId="1099422136861554"
    // autoLoad={true}
    // fields="name,email,picture"
    // //onClick={componentClicked}
    // callback={responseFacebook} />
    <IndexPage />    
    , document.getElementById('root'));
registerServiceWorker();
