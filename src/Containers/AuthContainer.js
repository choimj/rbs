import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {withRouter} from "react-router-dom";
// import App from "../Pages/App";

import * as authActions from "../Store/Modules/ ";

class AuthContainer extends React.Component {
  state = {
    
  }

  componentDidUpdate = (prevProps, prevState) => {
    // prevProps, prevState > 이전에 가졌던 props, state
  }
  
  render() {
    const {authActions} = this.props;    
    return (
     
      <div></div>
     
    );
   
  }
}

const mapDispatchToPros = dispatch => {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
};

export default connect(
  null,
  mapDispatchToPros
)(withRouter(AuthContainer));