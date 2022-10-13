import React, { useState, useEffect } from "react"
import { connect } from 'react-redux';
import * as actions from "../../store/index";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";

const Home = (props) => {

    const userDetails = props.account

    let userName = null

    if (userDetails) {
        userName = userDetails.name
    }

    return (
        <div>
            Welcome {userName}
            <br/>
            Your Token
            <br/>
            {props.token}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        //Add here your reducers needed
        account: state.Session.account,
        token: state.Session.token,
        isAuthenticated: state.Session.isAuthenticated
    };
};

const mapDispatchToProps = dispatch => {
    return {
        //Add here your fucntions to update the reducers needed
        SetSession: (SessionDetails) => dispatch(actions.SetSession(SessionDetails))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)