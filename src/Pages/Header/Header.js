import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";

// Nested List
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Link from "@material-ui/core/Link";

const useHeaderStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "10vh"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  link: {
    fontSize: "18px"
  }
}));

const useSideStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const Header = props => {
  const menu = [
    { title: "Home", url: "/", sub: [] },

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
  const headerClasses = useHeaderStyles();
  const sideClassed = useSideStyles();

  const [state, setState] = React.useState({
    left: false
  });
  const [open, setOpen] = React.useState({
    isOpen: []
  });

  const handleClick = (event, id) => {
    const openArray = new Array(menu.length);
    openArray.fill(false);
    openArray[id] = true;

    setOpen({ ...open, isOpen: openArray });
  };

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div className={headerClasses.list} role="presentation">
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={sideClassed.root}
      >
        {menu.map((item, i) => {
          if (item.sub.length > 0) {
            return (
              <React.Fragment key={"a" + i}>
                <ListItem button onClick={e => handleClick(e, i)} key={"b" + i}>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                  {open.isOpen[i] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse
                  in={open.isOpen[i]}
                  timeout="auto"
                  unmountOnExit
                  key={i}
                >
                  <List component="div" disablePadding>
                    {item.sub.map((list, j) => (
                      <Link href={list.url} color="inherit" key={j}>
                        <ListItem className={sideClassed.nested}>
                          <ListItemText primary={list.title} />
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            );
          } else {
            return (
              <Link href={item.url} color="inherit" key={i}>
                <ListItem>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              </Link>
            );
          }
        })}
      </List>
    </div>
  );

  return (
    <div className={headerClasses.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={headerClasses.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={headerClasses.title}>
            RBS
          </Typography>
          <Link href="/login" color="inherit" className={headerClasses.link}>
            Login
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
};

export default Header;
