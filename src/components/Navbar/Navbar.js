import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
  Stack,
  List,
  ListItem,
  ListItemText,
  Popover,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useContext } from "react";
import { DrawerComponent } from "./DrawerComponent";
import { Link } from "react-router-dom";
import { MenuData } from "./MenuData";
import { CompanyInfoContext } from "../../contexts/CompanyInfoContext";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const {
    companyInfo,
    isLoading,
    hasError,
    dest,
    destHasError,
    destIsLoading,
    espec,
    especIsLoading,
    especHasError,
  } = useContext(CompanyInfoContext);

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
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Link to={"/inicio"}>
                <Typography>
                  <img
                    src={companyInfo[0]?.VALUE || ""}
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
