// import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import BookingContainer from "./BookingContainer";
import * as initActions from "../../Store/Modules/Init";

const mapStateToProps = state => {
  return {
    isLogin: state.Init.isLogin,
    compInfo: state.Init.compInfo,
    compCategoryList: state.Init.compCategoryList,
    compRoomList: state.Init.compRoomList
  };
};

const mapDispatchToPros = dispatch => {
  return {
    initActions: bindActionCreators(initActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(BookingContainer);
