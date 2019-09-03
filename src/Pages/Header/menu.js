export const loginMenu = [
  { title: "Home", url: "/main", sub: [] },
  {
    title: "예약",
    url: "/book",
    sub: [{ title: "예약", url: "/book/step" }]
  },
  {
    title: "예약 현황",
    url: "/book",
    sub: [
      { title: "월별", url: "/book/month" },
      { title: "주별", url: "/book/week" },
      { title: "일별", url: "/book/day" }
    ]
  },
  {
    title: "관리",
    url: "/management",
    sub: [
      { title: "그룹관리", url: "/management/group" },
      { title: "카테고리관리", url: "/management/category" },
      { title: "회의실관리", url: "/management/room" },
      { title: "예약폼관리", url: "/management/bookform" }
    ]
  }
];

export const notLoginMenu = [{ title: "Home", url: "/", sub: [] }];
