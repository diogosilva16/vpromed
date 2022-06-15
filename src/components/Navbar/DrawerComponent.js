import { Drawer, List, ListItem, ListItemText, Box} from "@mui/material";
import React from "react";

export const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  console.log(openDrawer);
  return (
    <Drawer
      PaperProps={{
        sx: { backgroundColor: "#000", color: "#fff", minWidth: "200px", paddingTop: "20%"},
      }}
      anchor="right"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>V-PROMED</ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>ESPECIALIDADES</ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>CONTACTOS</ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>DESTAQUES</ListItemText>
          </ListItem>
        </List>
    </Drawer>
  );
};
