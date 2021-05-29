import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from './Login/index';

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/">
                <Login />
            </Route>
        </Switch>
    </BrowserRouter>
);
