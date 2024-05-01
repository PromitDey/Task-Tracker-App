import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  ListItem,
  List,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Header = () => {
  const [open, isOpen] = useState(false);
  const [themeMode, setThemeMode] = useState("light");
  const [isLogged, setIsLogged] = useState(false);

  const toggleDrawer = (openStatus) => {
    isOpen(openStatus);
  };

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const handleLog = () => {
    setIsLogged(!isLogged);
  };

  const DrawerList = (
    <Box onClick={() => toggleDrawer(false)} className="bg-slate-400">
      <List>
        {["Change Language", "Settings"].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} className="text-2xl">
              {text}
            </ListItemButton>
          </ListItem>
        ))}
        <a href="https://github.com/PromitDey" target="_blank">
          <ListItemButton>GitHub Account</ListItemButton>
        </a>
        <a href="https://github.com/PromitDey/Task-Tracker-App" target="_blank">
          <ListItemButton>GitHub Repo</ListItemButton>
        </a>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton className="mr-2" onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={() => toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
            <Typography sx={{ flexGrow: 1 }} className="font-semibold text-2xl">
              Cool Task Tracker
            </Typography>
            <Button
              color="inherit"
              className="font-semibold text-xl"
              onClick={handleLog}
            >
              {isLogged ? "Logout" : "Login"}
            </Button>
            <Button color="inherit" onClick={toggleTheme}>
              {themeMode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default Header;
