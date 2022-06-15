import {
  AppBar,
  Toolbar,
  Container,
  Grid,
  Typography,
  Tabs,
  Tab,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
  useTheme,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { DrawerComponent } from "./DrawerComponent";

const pages = ["V-PROMED", "ESPECIALIDADES", "DESTAQUES", "CONTACTOS"];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  console.log(theme);
  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl" sx={{marginTop: "15px", marginBottom: "15px"}}>
          <Toolbar disableGutters>
            <Typography>
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                alt="Google Logo"
                width="150"
              />
            </Typography>
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
                {pages.map((page) => (
                  <Button
                    key={page}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            )}

            {isMobile ? (
              <Stack direction="row"
                justifyContent="flex-end"
                sx={{ flexGrow: 1}}
              >
                <IconButton onClick={() => setOpenDrawer(true)}>
                  <MenuIcon color="secondary" />
                </IconButton>
              </Stack>
            ) : (
              ""
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
