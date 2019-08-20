import React from "react";
import { connect } from "react-redux";
import Book from "../Pages/Book";

class BookInitContainer extends React.Component {
  
  render() {
    const {compInfo, compCategoryList, compRoomList} = this.props;
    return (
      <Book compInfo={compInfo} compCategoryList={compCategoryList} compRoomList={compRoomList}/>
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
)(BookInitContainer);