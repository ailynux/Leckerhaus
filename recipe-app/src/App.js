import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Box,
  Container,
  IconButton
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import theme from "./theme";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import User from "./pages/User";

const drawerWidth = 200;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              zIndex: (theme) => theme.zIndex.drawer + 1,
              backgroundColor: "#d32f2f"
            }}
          >
            <Toolbar
              sx={{
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                color: "#fff"
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuBookIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  flexGrow: 1,
                  fontFamily: "Monospace",
                  fontWeight: "bold"
                }}
              >
                Leckerhaus
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src="https://via.placeholder.com/40"
                  alt="logo"
                  style={{ borderRadius: "50%", marginRight: "10px" }}
                />
                <Typography variant="body1" noWrap>
                  Welcome, User!
                </Typography>
              </Box>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
                backgroundColor: "#757575",
                color: "#ffffff"
              }
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
              <List>
                <ListItem button component={Link} to="/">
                  <ListItemIcon>
                    <HomeIcon sx={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ color: "#ffffff" }}>
                        Home
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem button component={Link} to="/about">
                  <ListItemIcon>
                    <InfoIcon sx={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ color: "#ffffff" }}>
                        About
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem button component={Link} to="/contact">
                  <ListItemIcon>
                    <ContactMailIcon sx={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ color: "#ffffff" }}>
                        Contact
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem button component={Link} to="/recipes">
                  <ListItemIcon>
                    <MenuBookIcon sx={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ color: "#ffffff" }}>
                        Recipes
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem button component={Link} to="/user">
                  <ListItemIcon>
                    <PersonIcon sx={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ color: "#ffffff" }}>
                        User
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem button component={Link} to="/settings">
                  <ListItemIcon>
                    <SettingsIcon sx={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ color: "#ffffff" }}>
                        Settings
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </Drawer>
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 2, marginLeft: `50px` }} // Set a small static margin
          >
            <Toolbar />
            <Container sx={{ mt: 2, maxWidth: "100%" }}>
              {" "}
              {/* Adjust container width */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/user" element={<User />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
