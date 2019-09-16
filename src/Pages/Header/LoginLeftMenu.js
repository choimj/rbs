import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Link from "@material-ui/core/Link";

const LoginLeftMenu = ({
  loginMenu,
  headerClasses,
  sideClassed,
  handleClick,
  open
}) => {
  return (
    <div className={headerClasses.list} role="presentation">
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={sideClassed.root}
      >
        {loginMenu.map((item, i) => {
          if (item.sub.length > 0) {
            return (
              <React.Fragment key={"a" + i}>
                <ListItem
                  button
                  onClick={e => handleClick(e, i, loginMenu.length)}
                  key={"b" + i}
                >
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
};

export default LoginLeftMenu;