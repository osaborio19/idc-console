import React, { useState, useEffect } from "react"
import './App.scss';
import { useIsAuthenticated, MsalAuthenticationTemplate } from "@azure/msal-react";
import { InteractionType } from '@azure/msal-browser';
import { LoginRequest } from "./config/AuthConfig";
import Routes from "./containers/routes/Routes";

function ErrorComponent({ error }) {
  return <p>An Error Occurred: {error}</p>;
}

function LoadingComponent() {
  return <p>Authentication in progress...</p>;
}

const App = (props) => {

  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      authenticationRequest={LoginRequest}
      errorComponent={ErrorComponent}
      loadingComponent={LoadingComponent}>
      {/* <p>At least one account is signed in!</p> */}
      <Routes />
    </MsalAuthenticationTemplate>
  )

}


export default App;
