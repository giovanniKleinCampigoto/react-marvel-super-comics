import React from 'react';
import { 
    BrowserRouter as Router, 
    Route,
    Switch,
} from "react-router-dom";

import Dashboard from '../containers/Dashboard/Dashboard';
import routePath from './constants';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path={routePath.home} component={Dashboard} />
            <Route exact path={routePath.dashboard} component={Dashboard} />
        </Switch>
    </Router>
);

export default Routes;