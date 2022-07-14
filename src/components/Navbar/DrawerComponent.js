import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { MenuData } from "./MenuData";
import { CompanyInfoContext } from "../../contexts/CompanyInfoContext";
export const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {

  const listItemStyle = { paddingTop: 0, paddingBottom: 0, textAlign: "right" };
  const alignText = { textAlign: "right", paddingBottom: 0 };

  const { dest, destHasError, destIsLoading, espec, especIsLoading, especHasError } = useContext(CompanyInfoContext);


  const renderMenu = () => {
    return MenuData.map((page, key) => (
      <Link to={page.path !== null && page.path}>
        <ListItem key={key} sx={alignText} onClick={() => setOpenDrawer(false)}>
          <ListItemText>{page.title}</ListItemText>
        </ListItem>
        {page.id === 2 ? (
          <List
            sx={{
              fontWeight: "200",
              color: "rgba(255,255,255,0.5)",
              textTransform: "uppercase",
            }}
          >
            {renderEspecData()}
          </List>
        ) : (
          page.id === 3 && (
            <List
              sx={{
                fontWeight: "200",
                color: "rgba(255,255,255,0.5)",
                textTransform: "uppercase",
              }}
            >
              {renderDestData()}
            </List>
          )
        )}
      </Link>
    ));
  };

  const renderEspecData = () => {
    return espec.map((item, key) => (
      <Link to={`/especialidade/${item.ARTICLE_ID}`}>
        <ListItem
          key={key}
          sx={listItemStyle}
          onClick={() => setOpenDrawer(false)}
        >
          <ListItemText>{item.NAME_SEO}</ListItemText>
        </ListItem>
      </Link>
    ));
  };

  const renderDestData = () => {
    return dest.map((item, key) => (
      <Link to={`/destaque/${item.ARTICLE_ID}`}>
        <ListItem
          key={key}
          sx={listItemStyle}
          onClick={() => setOpenDrawer(false)}
        >
          <ListItemText>{item.NAME_SEO}</ListItemText>
        </ListItem>
      </Link>
    ));
  };

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
      <List>{renderMenu()}</List>
    </Drawer>
  );
};
