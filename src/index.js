import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { MsalConfig } from "./config/AuthConfig";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import SessionReducer from './store/reducers/Session'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const msalInstance = new PublicClientApplication(MsalConfig);

//For production mode, devtools is disabled
const composeEnhancers =
  (process.env.REACT_APP_ENV !== "Production" &&
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const rootReducer = combineReducers({
  //Add reducers Here
  Session: SessionReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);


root.render(
  <MsalProvider instance={msalInstance}>
    <Provider store={store}>
      <App />
    </Provider>
  </MsalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
