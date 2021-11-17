
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from './views/Home'
import MovieFind from './views/infoMovie'

export const Routes = () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/findMovie/:id?" exact component={MovieFind} />
        <Route path='*' component={Home} />

    </Switch>