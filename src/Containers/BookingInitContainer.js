import React from "react";
import { connect } from "react-redux";
import Booking from "../Pages/Booking";

class BookingInitContainer extends React.Component {
  
  render() {
    const {compInfo, compCategoryList, compRoomList} = this.props;
    return (
      <Booking compInfo={compInfo} compCategoryList={compCategoryList} compRoomList={compRoomList}/>
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
)(BookingInitContainer);