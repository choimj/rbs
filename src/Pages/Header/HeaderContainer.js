import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import * as authActions from "../../Store/Modules/Auth";

import { Query } from "react-apollo";
import gql from "graphql-tag";

class HeaderContainer extends React.Component {
  componentWillMount = async () => {
    const { location, authActions, history } = this.props;
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin) {
      await authActions.checkUserSuccess();
    }
    const re = /(login|join)/;
    let isAuthPath = re.test(location.pathname);

    if (isAuthPath) {
      if (isLogin) {
        alert("이미 로그인 되어 있습니다. 로그아웃 후 시도해주세요.");
        history.push("/");
      }
    } else {
      if (location.pathname !== "/" && location.pathname !== "/home") {
        if (!isLogin) {
          alert("로그인 후 이용 가능합니다.");
          history.push("/login");
        }
      }
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
  componentDidUpdate = (prevProps, prevState) => {};

  render() {
    const { isLogin } = this.props;
    return (
      <Query query={CHECK_USER_QUERY}>
        {({ data }) => {
          console.log(data);
          return <Header isLogin={isLogin} handleLogout={this.handleLogout} />;
        }}
      </Query>
    );
  }
}

const CHECK_USER_QUERY = gql`
  query {
    users {
      email
      password
    }
  }
`;

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
