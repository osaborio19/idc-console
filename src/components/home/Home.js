import React, { useState, useEffect } from "react"
import { connect } from 'react-redux';
import * as actions from "../../store/index";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";

const Home = (props) => {

    const [name, setName] = useState(null);
    const { accounts } = useMsal();
    const isAuthenticated = useIsAuthenticated()

    useEffect(() => {

        if (isAuthenticated) {
            
            setName(accounts[0].name)
        }

    })

    return (
        <div>Welcome {name}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)