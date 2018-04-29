import React from 'react';
import { 
    BrowserRouter as Router, 
    Route,
    Switch,
} from "react-router-dom";

import routePath from './constants';

// Components
import Dashboard from '../containers/Dashboard/Dashboard';
import Layout from '../components/Layout/Layout';

const Routes = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path={routePath.home} component={Dashboard} />
                <Route exact path={routePath.dashboard} component={Dashboard} />
            </Switch>
        </Layout>
    </Router>
);

export default Routes;