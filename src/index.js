import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,browserHistory} from 'react-router';
import './App.css';
import App from './App';
import Banner from './component/Banner';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/banner" component={Banner}/> 
    </Router>, 
    document.getElementById('root')
);

registerServiceWorker();
