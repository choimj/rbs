import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import Link from "@material-ui/core/Link";
import { loginMenu, notLoginMenu } from "./menu";
import LoginLeftMenu from "./LoginLeftMenu";
import NotLoginLeftMenu from "./NotLoginLeftMenu";

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

const HeaderPresenter = props => {
  const headerClasses = useHeaderStyles();
  const sideClassed = useSideStyles();
  const { isLogin, handleLogout } = props;

  const [state, setState] = React.useState({
    left: false
  });
  const [open, setOpen] = React.useState({
    isOpen: []
  });

  const handleClick = (e, id, length) => {
    const openArray = new Array(length);
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
          {isLogin ? (
            <Link
              color="inherit"
              className={headerClasses.link}
              onClick={handleLogout}
            >
              LOGOUT
            </Link>
          ) : (
            <Link href="/login" color="inherit" className={headerClasses.link}>
              LOGIN
            </Link>
          )}
        </Toolbar>
      </AppBar>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {isLogin ? (
          <LoginLeftMenu
            loginMenu={loginMenu}
            headerClasses={headerClasses}
            sideClassed={sideClassed}
            handleClick={handleClick}
            open={open}
          />
        ) : (
          <NotLoginLeftMenu
            notLoginMenu={notLoginMenu}
            headerClasses={headerClasses}
            sideClassed={sideClassed}
            handleClick={handleClick}
            open={open}
          />
        )}
      </Drawer>
    </div>
  );
};

export default HeaderPresenter;
