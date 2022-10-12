import React, { useState, useEffect } from "react"
import './App.scss';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, useMsalAuthentication, useIsAuthenticated } from "@azure/msal-react";
import { InteractionType, InteractionRequiredAuthError } from '@azure/msal-browser';
import { LoginRequest, RedirectLogout } from "./config/AuthConfig";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routes from "./containers/routes/Routes";
import { connect } from 'react-redux';
import * as actions from "./store/index";


const App = (props) => {

  const { login, error } = useMsalAuthentication(InteractionType.Silent, LoginRequest);
  const isAuthenticated = useIsAuthenticated()
  const { accounts, instance } = useMsal();
  const userData = accounts.length > 0 ? accounts[0] : null
  const userName = userData ? userData.name : null


  //Login Data
  useEffect(() => {
    //If the session is expired, redirect to login page
    if (error instanceof InteractionRequiredAuthError) {
      login(InteractionType.Redirect, LoginRequest)
    }
  }, [error]);

  //Get Token
  useEffect(() => {

    if (isAuthenticated && props.token === null) {
      getAccessToken()
    }

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
    <AuthenticatedTemplate>
      <Header userData={userData} logoutHandler={logoutHandler} />
      <div className="main">
        {
          isAuthenticated ?
            <Routes/>
            :
            <div className="col-12 row">
              <div className="spinner-border text-primary"></div>
            </div>
        }
      </div>
      <Footer />
    </AuthenticatedTemplate >
  );
}

const mapStateToProps = state => {
  return {
    //Add here your reducers needed
    token: state.Session.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //Add here your fucntions to update the reducers needed
    SetSession: (SessionDetails) => dispatch(actions.SetSession(SessionDetails))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
