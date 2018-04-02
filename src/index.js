import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import Facebooklogin from './components/LoginPage/Facebooklogin';
import IndexPage from './components/IndexPage';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from './C:/Users/Mano/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-router-dom';


// const responseFacebook = (response) => {
//     console.log(response);
//   }
export const Wrapper = () => (
    <BrowserRouter>
        <IndexPage />        
    </BrowserRouter>
);

ReactDOM.render(
    // <FacebookLogin
    // appId="1099422136861554"
    // autoLoad={true}
    // fields="name,email,picture"
    // //onClick={componentClicked}
    // callback={responseFacebook} />
    <Wrapper />    
    , document.getElementById('root'));
registerServiceWorker();
