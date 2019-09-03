import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import * as authActions from "../../Store/Modules/Auth";

class HeaderContainer extends React.Component {
  componentDidMount = async () => {
    /**
     * /login, /join 페이지의 경우 인증 제외
     */
    const { location, authActions, history } = this.props;
    const re = /(login|join)/;
    const isAuthPath = re.test(location.pathname);

    if (!isAuthPath) {
      const isLogin = localStorage.getItem("isLogin");
      if (!isLogin) {
        // 로그인 정보가 없는 경우
        alert("로그인이 필요합니다.");
        history.push("/login");
      } else {
        // 로그인 정보가 있는 경우 store 의 isLogin props true 로 변경
        await authActions.checkUserSuccess();
      }
    } else {
      localStorage.clear();
    }
  };
  handleLogout = async e => {
    e.preventDefault();
    const { authActions } = this.props;
    await authActions.logout();
    localStorage.clear();
    const { message } = this.props;
    alert(message);
    window.location.href = "/";
  };
  componentDidUpdate = (prevProps, prevState) => {
    // prevProps, prevState > 이전에 가졌던 props, state
    // const { isLogin } = this.props;
    // if (prevProps.isLogin !== isLogin && isLogin) {
    //   console.log(prevProps.isLogin, isLogin);
    //   localStorage.setItem("isLogin", isLogin);
    // } else {
    // }
  };

  render() {
    const { isLogin } = this.props;
    return <Header isLogin={isLogin} handleLogout={this.handleLogout} />;
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
)(withRouter(HeaderContainer));
