import * as React from "react";
import { Link } from "react-scroll";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import PaintIcon from "../../../../../assets/img/main-logo.png";

const pages = [
  {
    name: "О проекте",
    to: "project",
  },
  {
    name: "Преподаватель",
    to: "teacher",
  },
  {
    name: "Программа курса",
    to: "program",
  },
  {
    name: "Отзывы",
    to: "comments",
  },
  {
    name: "Часто задаваемые вопросы",
    to: "question",
  },
  {
    name: "Параметры регистрации",
    to: "dimplom",
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "secondary.light" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            sx={{
              display: { md: "flex" },
              mr: 1,
              width: "200px",
            }}>
            <img
              style={{ maxWidth: "100%" }}
              src={PaintIcon}
              alt="main-logo"></img>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-s"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map((page) => (
                <Link to={page.to} key={page.name}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{ minWidth: "100%" }}
                      component={"p"}
                      textAlign="center">
                      {page.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              },
            }}>
            {pages.map((page) => (
              <Link
                style={{ textDecoration: "none" }}
                to={page.to}
                key={page.name}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: "11px",
                    px: 1,
                  }}>
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
