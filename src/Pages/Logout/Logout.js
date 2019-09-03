import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import * as authActions from "../../Store/Modules/Auth";

class Logout extends React.Component {
  componentDidMount = async () => {
    const { authActions } = this.props;
    try {
      await authActions.logout();
      const { message } = this.props;
      alert(message);
      window.location.href = "/";
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return <div />;
  }
}
const mapStateToProps = state => {
  return {
    isLogin: state.Auth.isLogin,
    message: state.Auth.message
  };
};
const mapDispatchToPros = dispatch => {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(withRouter(Logout));
