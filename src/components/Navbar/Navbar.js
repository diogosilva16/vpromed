import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  IconButton,
  Box,
  Button,
  useMediaQuery,
  useTheme,
  Stack,
  List,
  ListItem,
  ListItemText,
  Popover,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { DrawerComponent } from "./DrawerComponent";
import { Link } from "react-router-dom";

const pages = [
  {
    id: 1,
    title: "V-PROMED",
    path: "/inicio",
    subpath: null,
  },
  {
    id: 2,
    title: "ESPECIALIDADES",
    path: null,
    subpath: [
      {
        id: 1,
        title: "MEDICINA DENTÁRIA",
      },
      {
        id: 2,
        title: "PERIODONTOLOGIA",
      },
      {
        id: 3,
        title: "PRÓTESE DENTÁRIA",
      },
      {
        id: 4,
        title: "HIGIENE ORAL",
      },
      {
        id: 5,
        title: "ORTODONTIA",
      },
      {
        id: 6,
        title: "IMPLANTOLOGIA",
      },
      {
        id: 7,
        title: "BRANQUEAMENTO/ESTÉTICA",
      },
    ],
  },
  {
    id: 3,
    title: "DESTAQUES",
    path: null,
    subpath: [
      {
        id: 1,
        title: "DENTAL WORK",
      },
      {
        id: 2,
        title: "DENTAL SWEET",
      },
    ],
  },
  {
    id: 4,
    title: "CONTACTOS",
    path: "/contactos",
    subpath: null,
  },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = (event, popoverId) => {
    setOpenedPopoverId(popoverId);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setOpenedPopoverId(null);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const renderMenuItems = () => {
    return pages.map((page, key) => (
      <Link to={page.path !== null && page.path}>
        <ListItem
          key={key}
          sx={{ my: 2, color: "white", display: "block" }}
          aria-describedby={id}
          onClick={page.path === null && handleClick}
        >
          <ListItemText onMouseDown={(e) => handleClick(e, page.id)}>
            {page.title}
          </ListItemText>
        </ListItem>
        {page.subpath !== null && (
          <Popover
            id={id}
            open={openedPopoverId === page.id}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <List sx={{ backgroundColor: "#000", color: "#fff" }}>
              {page.subpath.map((subpage, key) => (
                <Link
                  to={
                    page.title === "ESPECIALIDADES"
                      ? `/especialidade/${subpage.id}`
                      : `/destaque/${subpage.id}`
                  }
                >
                  <ListItem key={key}>
                    <ListItemText>{subpage.title}</ListItemText>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Popover>
        )}
      </Link>
    ));
  };

  return (
    <>
      <AppBar position="fixed">
        <Container
          maxWidth="xl"
          sx={{ marginTop: "15px", marginBottom: "15px" }}
        >
          <Toolbar disableGutters>
            <Link to={"/inicio"}>
              <Typography>
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                  alt="Google Logo"
                  width="150"
                />
              </Typography>
            </Link>
            {isMobile ? (
              <DrawerComponent
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
              />
            ) : (
              <Box
                justifyContent="flex-end"
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              >
                <List sx={{ display: "flex" }}>{renderMenuItems()}</List>
              </Box>
            )}

            {isMobile && (
              <Stack
                direction="row"
                justifyContent="flex-end"
                sx={{ flexGrow: 1 }}
              >
                <IconButton onClick={() => setOpenDrawer(true)}>
                  <MenuIcon color="secondary" />
                </IconButton>
              </Stack>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
