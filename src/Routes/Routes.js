import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Join from '../components/Join'
import Login from '../components/Login'

function Routes(){
    return(
        <Router>
            <ul>
                <li><Link to='/Login'>login</Link></li>
                <li><Link to='/Join'>Join</Link></li>
            </ul>
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/join' component={Join} />
            </Switch>
        </Router>
    )
}

export default Routes;

