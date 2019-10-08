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
import PropTypes from "prop-types";

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

const HeaderPresenter = ({ isLogin, handleLogout }) => {
  const headerClasses = useHeaderStyles();

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
            handleClick={handleClick}
            open={open}
          />
        ) : (
          <NotLoginLeftMenu
            notLoginMenu={notLoginMenu}
            headerClasses={headerClasses}
            handleClick={handleClick}
            open={open}
          />
        )}
      </Drawer>
    </div>
  );
};

HeaderPresenter.propTypes = {
  isLogin: PropTypes.bool.isRequired
};

export default HeaderPresenter;
