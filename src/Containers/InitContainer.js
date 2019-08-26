import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import App from "../Pages/App";

import * as homeActions from "../Store/Modules/Home";

class InitContainer extends React.Component {
  state = {
    isLogin : false,
    compInfo: {compCode: "douzone", compTitle: "더존비즈온"},
    compCategoryList: [
        {cateCode: "c1", cateTitle: "부산지사 11층"}
      , {cateCode: "c2", cateTitle: "부산지사 15층"}
      , {cateCode: "c3", cateTitle: "부산지사 19층"}
      , {cateCode: "c4", cateTitle: "강촌 캠퍼스"}
    ],
    compRoomList: [
      {roomCode: "r1", roomTitle: "대회의실", roomOpenTime: 9, roomCloseTime: 18},
      {roomCode: "r2", roomTitle: "중회의실", roomOpenTime: 9, roomCloseTime: 18},
      {roomCode: "r3", roomTitle: "소회의실", roomOpenTime: 9, roomCloseTime: 17},
      // {roomCode: "r4", roomTitle: "임원실", roomOpenTime: 9, roomCloseTime: 15}
    ]
  }
  
  render() {
    const {homeActions} = this.props;    
    homeActions.setCompany(this.state.compInfo);
    homeActions.setCategory(this.state.compCategoryList);   
    homeActions.setRoomList(this.state.compRoomList);
    let location = "";

    // if(this.state.isLogin) {
    //   location = "/dashboard";
    //   return (
    //     //history
    //     history.push()
    //   );
    // }else {
    //   location = "/home";
    // }

    return (
      //history.push(location)
      // <div></div>
      <App compInfo={this.state.compInfo} compCategoryList={this.state.compCategoryList}/>
    );
    // return (
    //   <App compInfo={this.state.compInfo} compCategoryList={this.state.compCategoryList}/>
    // );
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