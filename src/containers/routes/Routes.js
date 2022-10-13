import React, { useState, useEffect } from "react"
import { useMsal, useMsalAuthentication, useIsAuthenticated } from "@azure/msal-react";
import { InteractionType, InteractionRequiredAuthError } from '@azure/msal-browser';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginRequest, RedirectLogout } from "../../config/AuthConfig";
import { connect } from 'react-redux';
import * as actions from "../../store/index";
import Header from "../../components/header/Header"
import Home from '../../components/home/Home';

const Routes = (props) => {

    //Todo 
    //Read token to get roles
    //Create guard baes on roles

    const { accounts, instance } = useMsal();
    const isAuthenticated = useIsAuthenticated()
    const { login, error } = useMsalAuthentication(InteractionType.Silent, LoginRequest);

    useEffect(() => {
        getAccessToken()
    }, [error])

    function getAccessToken() {

        //Get Access token, do this when you want to get a token
        const tokenRequest = {
            account: accounts[0], // This is an example - Select account based on your app's requirements
            scopes: ["User.Read"]
        }
        // Acquire an access token
        instance.acquireTokenSilent(tokenRequest).then((response) => {
            // Call your API with the access token and return the data you need to save in state

            const sessionDetails = {
                account: accounts[0],
                token: response.accessToken,
                isAuthenticated: isAuthenticated
            }

            props.SetSession(sessionDetails)

        }).catch(async (e) => {
            // Catch interaction_required errors and call interactive method to resolve
            if (e instanceof InteractionRequiredAuthError) {
                await instance.acquireTokenRedirect(tokenRequest);
            }
            throw e;
        });
    }

    function logoutHandler() {
        instance.logoutPopup().then(e => {
            window.location.replace(RedirectLogout.logoutPage);
        });
    }

    return (
        <Router>
            <Header userDetails={props.account} logoutHandler={logoutHandler}/>
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

const mapStateToProps = state => {
    return {
        //Add here your reducers needed
        account: state.Session.account,
        isAuthenticated: state.Session.isAuthenticated
    };
};

const mapDispatchToProps = dispatch => {
    return {
        //Add here your fucntions to update the reducers needed
        SetSession: (SessionDetails) => dispatch(actions.SetSession(SessionDetails))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
