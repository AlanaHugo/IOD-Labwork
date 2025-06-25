import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import MenuBookIcon from '@mui/icons-material/MenuBook';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logout(); // clear user and localStorage
    handleCloseUserMenu(); // close the menu
    navigate("/login"); // redirect to login page
  };

  const pagesToShow = user
    ? [{ label: "Home", path: "/" }]
    : [
        { label: "Home", path: "/" },
        { label: "Register", path: "/register" },
        { label: "Login", path: "/login" },
      ];

  return (
    <AppBar position="static" sx={{ backgroundColor: '#CFD11A'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ width: '100%', minHeight: 64 }}>
  {/* Logo on the left */}
  <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
    <MenuBookIcon sx={{ mr: 1 }} />
    <Typography
      variant="h6"
      noWrap
      component={Link}
      to="/"
      sx={{
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "white",
        textDecoration: "none",
      }}
    >
      The Reading Nook
    </Typography>
  </Box>

  {/* Navigation + User Menu on the right */}
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    {/* Desktop Nav */}
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      {pagesToShow.map((page) => (
        <Button
          key={page.label}
          component={Link}
          to={page.path}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {page.label}
        </Button>
      ))}
      {user && (
        <Button
          component={Link}
          to="/favourites"
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          Favourites
        </Button>
      )}
    </Box>

    {/* User Menu */}
    {user && (
      <Box sx={{ ml: 2 }}>
        <Tooltip title="Account">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={handleLogout}>
            <Typography textAlign="center" sx={{ color: "#3D2B3D" }}>Logout</Typography>
          </MenuItem>
        </Menu>
      </Box>
    )}
  </Box>
</Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
