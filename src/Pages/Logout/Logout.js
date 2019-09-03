import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import * as authActions from "../../Store/Modules/Auth";

class Logout extends React.Component {
  componentDidMount = async () => {
    const { authActions, history, message } = this.props;
    await authActions.logout();
    alert(message);
    history.push("/");
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
