import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)(() => ({
  textDecoration: "none",
  color: "#fff",
  "&:hover": {
    textDecoration: "none",
    color: "#fff",
  },
}));

interface NavigationBarProps {
  toggleDrawer: () => void;
}

const NavigationBar = ({ toggleDrawer }: NavigationBarProps): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "inherit", sm: "none" } }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <StyledLink to="/">Top Coins🎉</StyledLink>
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <StyledLink to="/">Market overview</StyledLink>
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ marginLeft: 3, display: { xs: "none", sm: "block" } }}
          >
            <StyledLink to="/liquidity">Liquidity analysis</StyledLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
