import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

class LandingContainer extends React.Component {
  componentDidMount = () => {
    this.checkUser();
  }

  checkUser = () => {

  }

  render() {
    // 로그인 여부 확인
    // console.log(this.props.history);
    // console.log(this.props.isLogin);
    //console.log(this.props);
    return(
      <div>LandingContainer</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.Auth.isLogin,
    compInfo: state.Auth.compInfo,
    compCategoryList: state.Auth.compCategoryList,
    compRoomList: state.Auth.compRoomList
  };
};

export default connect(
    mapStateToProps,
    null
  )(withRouter(LandingContainer));
