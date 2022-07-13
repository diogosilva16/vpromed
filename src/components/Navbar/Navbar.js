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
import React, { useState, useEffect, useContext } from "react";
import { DrawerComponent } from "./DrawerComponent";
import { Link } from "react-router-dom";
import { MenuData } from "./MenuData";
import { Context } from "../utils/Context";
import Loader from "../Loader";

const Navbar = () => {
  const API_KEY = process.env.REACT_APP_TOKEN_KEY;

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [espec, setEspec] = useState([]);
  const [dest, setDest] = useState([]);
  const [cInfo, setCInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getEspec = async () => {
    try {
      const response = await fetch(
        `https://www.critecnow.com/promed/api/articlebycat/${API_KEY}/3/1`
      );
      const data = await response.json();
      setEspec(data);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const getDest = async () => {
    try {
      const response = await fetch(
        `https://www.critecnow.com/promed/api/articlebycat/${API_KEY}/4/1`
      );
      const data = await response.json();
      setDest(data);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const getCInfo = async () => {
    try {
      const response = await fetch(
        `https://www.critecnow.com/promed/api/company/${API_KEY}`
      );
      const data = await response.json();
      setCInfo(data);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCInfo();

    getEspec();
    getDest();
  }, []);

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
    return MenuData.map((page, key) => (
      <Link to={page.path !== null && page.path}>
        <ListItem
          key={key}
          sx={{ my: 2, color: "white", display: "block" }}
          aria-describedby={id}
        >
          <ListItemText onMouseDown={(e) => handleClick(e, page.id)}>
            {page.title}
          </ListItemText>
        </ListItem>
        {page.path === null && (
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
              {page.id === 2
                ? espec.map((item, key) => (
                    <Link
                      to={
                        page.title === "ESPECIALIDADES"
                          ? `/especialidade/${item.ARTICLE_ID}`
                          : `/destaque/${item.ARTICLE_ID}`
                      }
                    >
                      <ListItem key={key}>
                        <ListItemText sx={{ textTransform: "uppercase" }}>
                          {item.NAME_SEO}
                        </ListItemText>
                      </ListItem>
                    </Link>
                  ))
                : dest.map((item, key) => (
                    <Link
                      to={
                        page.title === "ESPECIALIDADES"
                          ? `/especialidade/${item.ARTICLE_ID}`
                          : `/destaque/${item.ARTICLE_ID}`
                      }
                    >
                      <ListItem key={key}>
                        <ListItemText sx={{ textTransform: "uppercase" }}>
                          {item.NAME_SEO}
                        </ListItemText>
                      </ListItem>
                    </Link>
                  ))}
              {}
            </List>
          </Popover>
        )}
      </Link>
    ));
  };

  return (
    <>
      {/* {isLoading && <Loader />} */}
      {!isLoading && !hasError && (
        <AppBar position="fixed">
          <Container
            maxWidth="xl"
            sx={{ marginTop: "15px", marginBottom: "15px" }}
          >
            <Toolbar disableGutters>
              <Link to={"/inicio"}>
                <Typography>
                  <img
                    src={cInfo[0]?.VALUE || ''}
                    alt="v-promed"
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
      )}
    </>
  );
};

export default Navbar;
