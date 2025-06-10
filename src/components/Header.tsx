import * as React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LoginIcon from '@mui/icons-material/Login';
import MoreIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';

import { useCart } from "../contexts/CartContext";
// import { useAuth } from '../contexts/AuthContext';
import { useUser } from '../contexts/UserContext';

// import Home from "../pages/Home";
// import Cart from "../pages/Cart";
// import UserInfo from "../pages/UserInfo";
// import Favorite from "../pages/Favorite";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('xs')]: {
    marginLeft: theme.spacing(3),
    width: '50%',
  },
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '50%',
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      width: '18ch',
    },
    [theme.breakpoints.up('xs')]: {
      width: '30ch',
    },
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

export default function Header({ categoryId = null }) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate();
  const [searchWord, setSearchWord] = useState("");

  const { cart } = useCart();
  const { user, isAuthenticated } = useUser();

  const totalQty = cart && cart.totalQty ? cart.totalQty : 0;


  const handleSearch = (e) => {
    if (e.key === "Enter") {
      // if (searchWord.trim() !== "") {
      if (categoryId !== null) {
        navigate(`/products?category=${categoryId}&search=${encodeURIComponent(searchWord.trim())}`);
      } else {
        navigate(`/products?search=${encodeURIComponent(searchWord.trim())}`);
      }
      // } 
    }
  };


  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      {user && isAuthenticated ? (
        <MenuItem
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            cursor: 'default',
            '&:hover': {
              backgroundColor: 'transparent' // ホバー時の背景色を無効化
            },
            display: "flex",
            justifyContent: "center"

          }}
        >

          <Typography
            sx={{
              fontWeight: "700"
            }}
          >
            {`${user.name} さん`}
          </Typography>
        </MenuItem>
      ) : (
        <MenuItem
          component={Link}
          to="/login"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <IconButton
            size="large"
            color="inherit"
          >
            <Badge color="error">
              <LoginIcon />
            </Badge>
          </IconButton>
          <Typography>
            ログイン
          </Typography>
        </MenuItem>

      )}



      {user && isAuthenticated && (
        <MenuItem
          component={Link}
          to={`/user/${user._id}/favorite`}
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <IconButton
            size="large"
            color="inherit"
          >
            <Badge color="error">
              <FavoriteBorderIcon />
            </Badge>
          </IconButton>
          <Typography>
            お気に入り
          </Typography>
        </MenuItem>

      )}

      <MenuItem
        component={Link}
        to="/cart"
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        <IconButton
          size="large"
          color="inherit"
        >
          <Badge badgeContent={totalQty} color="error">
            {/* <ShoppingCartCheckoutIcon /> */}
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <Typography>
          カート
        </Typography>
      </MenuItem>


      {user && isAuthenticated && (
        <MenuItem
          component={Link}
          to={`/user/${user._id}`}
          style={{
            color: 'inherit',
            textDecoration: 'none',
            display: "flex",
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
            {/* <PersonOutlineIcon/> */}
          </IconButton>
          <Typography>
            マイページ
          </Typography>
        </MenuItem>
      )}

    </Menu>

  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ backgroundColor: "#d1c789", color: "#5b5b5b" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: {
                xs: 'block',
                sm: 'block'
              },
              fontSize: {
                xs: "14px",
                sm: "20px",
                md: "22px",

              }

            }}
          >
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none', fontWeight: "700" }}>
              Yuu furniture
            </Link>
          </Typography>

          <Search
            sx={{ backgroundColor: "#eae9e7" }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="商品を検索"
              inputProps={{ 'aria-label': 'search' }}
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              onKeyDown={handleSearch}
              sx={{
                fontWeight: "600",
                fontSize: {
                  xs: "14px",
                  sm: "16px",
                  md: "18px"
                }
              }}
            />
          </Search>


          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, alignItems: 'baseline' }}>

            {/* <Typography
              noWrap
              component={Link}
              to={"/login"}
              sx={{
                flexGrow: 1,
                textAlign: 'right',
                fontWeight: "700",
                fontSize: "14px",
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              {user ? `${user.name} さん` : "ログイン"}

            </Typography> */}

            {user && isAuthenticated ? (
              <Typography
                noWrap
                sx={{
                  flexGrow: 1,
                  textAlign: 'right',
                  fontWeight: "700",
                  fontSize: "14px",
                  color: 'inherit',
                }}
              >
                {`${user.name} さん`}
              </Typography>
            ) : (
              <Typography
                noWrap
                component={Link}
                to={"/login"}
                sx={{
                  flexGrow: 1,
                  textAlign: 'right',
                  fontWeight: "700",
                  fontSize: "14px",
                  color: 'inherit',
                  textDecoration: 'none'
                }}
              >
                ログイン
              </Typography>
            )}

            {user && isAuthenticated && (
              <IconButton size="large" color="inherit">
                <Badge color="error">
                  <Link to={`/user/${user._id}/favorite`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    <FavoriteBorderIcon />
                  </Link>
                </Badge>
              </IconButton>
            )}

            <IconButton
              size="large"
              color="inherit"
            >
              <Badge badgeContent={totalQty} color="error">
                <Link to="/cart" style={{ color: 'inherit', textDecoration: 'none' }}>
                  {/* <ShoppingCartCheckoutIcon /> */}
                  <ShoppingCartIcon />
                </Link>
              </Badge>
            </IconButton>

            {user && isAuthenticated && (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Link to={`/user/${user._id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  <AccountCircle />
                  {/* <PersonOutlineIcon/> */}
                </Link>
              </IconButton>
            )}

          </Box>

          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}