import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import App from "../Pages/App";

import * as homeActions from "../Store/Modules/Home";

class InitContainer extends React.Component {
  state = {
    compInfo: {compCode: "douzone", compTitle: "더존비즈온"},
    compCategoryList: [
        {cateCode: "1", cateTitle: "부산지사 11층"}
      , {cateCode: "2", cateTitle: "부산지사 15층"}
      , {cateCode: "3", cateTitle: "부산지사 19층"}
      , {cateCode: "4", cateTitle: "강촌 캠퍼스"}
    ],
    compRoomList: [
      {roomCode: "1", roomTitle: "대회의실"},
      {roomCode: "2", roomTitle: "중회의실"},
      {roomCode: "3", roomTitle: "소회의실"},
      {roomCode: "4", roomTitle: "임원실"}
    ]
  }
  componentDidMount = () => {    
    const {homeActions} = this.props;    
    homeActions.setCompany(this.state.compInfo);
    homeActions.setCategory(this.state.compCategoryList);   
    homeActions.setRoom(this.state.compRoomList);     
  }
  render() {
    return (
      <App compInfo={this.state.compInfo} compCategoryList={this.state.compCategoryList}/>
    );
  }
}

const mapDispatchToPros = dispatch => {
  return {
    homeActions: bindActionCreators(homeActions, dispatch)
  };
};

export default connect(
  null,
  mapDispatchToPros
)(InitContainer);