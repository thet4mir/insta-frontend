import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import App from './pages/App';
import Login from "./pages/Login"


const routing = (
    <Router>
        <React.StrictMode>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/signin" component={Login} />
            </Switch>
        </React.StrictMode>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
