import React from "react";
import { connect } from "react-redux";
import Management from "../Pages/Management";

class ManagementContainer extends React.Component {
  render() {
    return (
      <Management/>
    );
  }
}
const mapStateToProps = state => {
  return {
    compInfo: state.Home.compInfo,
    compCategoryList: state.Home.compCategoryList,
    compRoomList: state.Home.compRoomList
  };
};

export default connect(
  mapStateToProps,
  null
)(ManagementContainer);

