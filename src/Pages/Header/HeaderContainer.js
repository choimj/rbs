import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import * as authActions from "../../Store/Modules/Auth";

class HeaderContainer extends React.Component {
  componentDidMount = async () => {
    const { location, authActions } = this.props;
    const re = /(login|join)/;
    const isAuthPath = re.test(location.pathname);

    console.log(location.pathname, isAuthPath);
    console.log(localStorage);
    if (!isAuthPath) {
      const isLogin = localStorage.getItem("isLogin");
      if (!isLogin) {
        return;
      } else {
        await authActions.checkUserSuccess();
      }
    } else {
      localStorage.clear();
    }
  };
  componentDidUpdate = (prevProps, prevState) => {
    // prevProps, prevState > 이전에 가졌던 props, state
    const { isLogin } = this.props;
    if (prevProps.isLogin !== isLogin && isLogin) {
      localStorage.setItem("isLogin", isLogin);
    } else {
    }
  };

  render() {
    const { isLogin } = this.props;
    return <Header isLogin={isLogin} />;
  }
}
const mapStateToProps = state => {
  return {
    isLogin: state.Auth.isLogin
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
)(withRouter(HeaderContainer));
