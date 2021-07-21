import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CampaignList } from './CampaignList';
import { Campaign } from './Campaign';
import { Email } from './Email';
import { Login } from './Login/index';

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/campaign">
                <Campaign />
            </Route>            
            <Route path="/campaign-list">
                <CampaignList />
            </Route>
            <Route path="/email">
                <Email />
            </Route>
            <Route path="/">
                <Login />
            </Route>
        </Switch>
    </BrowserRouter>
);
