import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import routePath from './constants';

// Containers
import Dashboard from '../containers/Dashboard/Dashboard';
import HeroDetails from '../containers/Hero/Details';

// Components
import Layout from '../components/Layout/Layout';

const Routes = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path={routePath.home} component={Dashboard} />
                <Route path={routePath.dashboard} component={Dashboard} />
                <Route exact path={routePath.heroDetails} component={HeroDetails} />
            </Switch>
        </Layout>
    </Router>
);

export default Routes;