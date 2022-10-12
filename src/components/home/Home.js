import React from "react"
import { connect } from 'react-redux';
import * as actions from "../../store/index";

const Home = (props) => {

    const Session = props.Session ? props.Session : null

    const name = Session.account ? Session.account.name : null

    return (
        <div>Welcome {name}</div>
    )
}

const mapStateToProps = state => {
    return {
        //Add here your reducers needed
        Session: state.Session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        //Add here your fucntions to update the reducers needed
        SetSession: (SessionDetails) => dispatch(actions.SetSession(SessionDetails))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)