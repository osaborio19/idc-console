import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../../components/home/Home';

const Routes = (props) => {

    //Todo 
    //Read token to get roles
    //Create guard baes on roles


    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={Home}
                />
            </Switch>
        </Router>
    )

}

export default Routes
