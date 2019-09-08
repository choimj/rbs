import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import { bindActionCreators } from "redux";
import * as joinActions from "../../Store/Modules/Join";

class CallbackContainer extends React.Component {
  render() {
    const { history, location } = this.props;
    let joinParam = queryString.parse(location.search);
    if (joinParam !== "") {
      const { joinActions } = this.props;
      joinActions.setEmail(joinParam.email);
      history.push("/join");
    } else {
      alert("구글 인증 후 회원가입이 가능합니다.");
      window.location.href = "http://localhost:4000/auth/google";
    }
    return <div></div>;
  }
}
const mapStateToProps = state => {
  return {
    email: state.Join.email
  };
};
const mapDispatchToPros = dispatch => {
  return {
    joinActions: bindActionCreators(joinActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(withRouter(CallbackContainer));
