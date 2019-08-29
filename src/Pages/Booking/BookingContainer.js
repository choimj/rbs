import React from "react";
import Status from "./Status";
import Step from "./Step";

class BookingContainer extends React.Component {
  state = {
    isLogin: false,
    compInfo: { compCode: "douzone", compTitle: "더존비즈온" },
    compCategoryList: [
      { cateCode: "c1", cateTitle: "부산지사 11층" },
      { cateCode: "c2", cateTitle: "부산지사 15층" },
      { cateCode: "c3", cateTitle: "부산지사 19층" },
      { cateCode: "c4", cateTitle: "강촌 캠퍼스" }
    ],
    compRoomList: [
      {
        roomCode: "r1",
        roomTitle: "대회의실",
        roomOpenTime: 9,
        roomCloseTime: 18
      },
      {
        roomCode: "r2",
        roomTitle: "중회의실",
        roomOpenTime: 9,
        roomCloseTime: 18
      },
      {
        roomCode: "r3",
        roomTitle: "소회의실",
        roomOpenTime: 9,
        roomCloseTime: 17
      }
      // {roomCode: "r4", roomTitle: "임원실", roomOpenTime: 9, roomCloseTime: 15}
    ]
  };

  componentDidMount = () => {
    const { initActions } = this.props;
    initActions.setCompany(this.state.compInfo);
    initActions.setCategory(this.state.compCategoryList);
    initActions.setRoomList(this.state.compRoomList);
  };

  render() {
    const { compInfo, compCategoryList, compRoomList, match } = this.props;
    switch (match.params.path) {
      case "step":
        return <Step />;
      default:
        return (
          <Status
            compInfo={compInfo}
            compCategoryList={compCategoryList}
            compRoomList={compRoomList}
          />
        );
    }
  }
}

export default BookingContainer;
