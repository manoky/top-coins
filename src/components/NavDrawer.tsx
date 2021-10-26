import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)(() => ({
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    textDecoration: "none",
    color: "inherit",
  },
}));

interface NavDrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const NavDrawer = ({ isOpen, toggleDrawer }: NavDrawerProps) => {
  return (
    <div>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
          component="div"
        >
          <List>
            <ListItem button>
              <StyledLink to="/">
                <ListItemText primary="Coins App🎉" />
              </StyledLink>
            </ListItem>
            <Divider />
            <ListItem button>
              <StyledLink to="/">
                <ListItemText primary="Market overview" />
              </StyledLink>
            </ListItem>
            <ListItem button>
              <StyledLink to="/liquidity">
                <ListItemText primary="Liquidity analysis page" />
              </StyledLink>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
