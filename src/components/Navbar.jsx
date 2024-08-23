import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { Pets } from "@mui/icons-material";
import React, { useState } from "react";
import Mail from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import Diversity1Icon from '@mui/icons-material/Diversity1';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  
});


const Search = styled("div")(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  [theme.breakpoints.down("xs")]: {
    width: "80%", 
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none", 
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  paddingLeft: `calc(1em + ${theme.spacing(4)})`, 
  width: "100%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" sx={{ zIndex: 1201 }}>
      <StyledToolbar>

      
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "flex" , gap:10} }}>
        
          
          <Icons><Diversity1Icon /></Icons>
          Social App{" "}
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
     
          <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search..." />
        </Search>

        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ height: 40, width: 40 }}
            onClick={(e) => setOpen(true)}
            src="https://i.pinimg.com/474x/c1/a5/ca/c1a5caab61a1e550fb9a8a60fa54ea04.jpg"
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ height: 30, width: 30 }}
            src="https://i.pinimg.com/474x/c1/a5/ca/c1a5caab61a1e550fb9a8a60fa54ea04.jpg"
          />
          <Typography>Jin</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
