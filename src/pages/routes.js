import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CampaignList } from './CampaignList';
import { Login } from './Login/index';

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/campaign-list">
                <CampaignList />
            </Route>
            <Route path="/">
                <Login />
            </Route>
        </Switch>
    </BrowserRouter>
);
