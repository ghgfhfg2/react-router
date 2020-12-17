import React from 'react';
import Step1 from './Step1';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Join() {
    return (
        <>
            <div>Join!</div>
            <Router>
                <Link to='/Join/Step1'>Join</Link>
                <Route exact path='/Join/Step1' component={Step1} />
            </Router>
        </>
    )
}

export default Join
