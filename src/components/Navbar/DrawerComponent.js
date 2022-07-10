import {
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import React from "react";

export const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  console.log(openDrawer);
  const navigate = useNavigate();

  const listItemStyle = { paddingTop: 0, paddingBottom: 0, textAlign: "right" };
  const alignText = { textAlign: "right" };

  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "#000",
          color: "#fff",
          minWidth: "200px",
          paddingTop: "20%",
        },
      }}
      anchor="right"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      <List>
        <Link to="/inicio">
          <ListItem sx={alignText} onClick={() => setOpenDrawer(false)}>
            <ListItemText>V-PROMED</ListItemText>
          </ListItem>
        </Link>
        <ListItem
          onClick={() => setOpenDrawer(false)}
          sx={{ textAlign: "right", paddingBottom: 0 }}
        >
          <ListItemText>ESPECIALIDADES</ListItemText>
        </ListItem>
        <List
          sx={{
            fontWeight: "200",
            color: "rgba(255,255,255,0.5)",
            textTransform: "uppercase",
          }}
        >
          <ListItem sx={listItemStyle}>
            <ListItemText>Medicina Dentária</ListItemText>
          </ListItem>
          <ListItem sx={listItemStyle}>
            <ListItemText>Periodontologia</ListItemText>
          </ListItem>
          <ListItem sx={listItemStyle}>
            <ListItemText>Prótese Dentária</ListItemText>
          </ListItem>
          <ListItem sx={listItemStyle}>
            <ListItemText>Higiene Oral</ListItemText>
          </ListItem>
          <ListItem sx={listItemStyle}>
            <ListItemText>Ortodontia</ListItemText>
          </ListItem>
          <ListItem sx={listItemStyle}>
            <ListItemText>Implantologia</ListItemText>
          </ListItem>
          <ListItem sx={{ paddingTop: 0, textAlign: "center" }}>
            <ListItemText>Branqueamento/Estética</ListItemText>
          </ListItem>
        </List>
        <ListItem onClick={() => setOpenDrawer(false)} sx={alignText}>
          <ListItemText>CONTACTOS</ListItemText>
        </ListItem>
        <ListItem
          onClick={() => setOpenDrawer(false)}
          sx={{ textAlign: "right", paddingBottom: 0 }}
        >
          <ListItemText>DESTAQUES</ListItemText>
        </ListItem>
        <List
          sx={{
            fontWeight: "200",
            color: "rgba(255,255,255,0.5)",
            textTransform: "uppercase",
          }}
        >
          <ListItem sx={listItemStyle}>
            <ListItemText>Dental Work</ListItemText>
          </ListItem>
          <ListItem sx={listItemStyle}>
            <ListItemText>Dental Sweet</ListItemText>
          </ListItem>
        </List>
      </List>
    </Drawer>
  );
};
