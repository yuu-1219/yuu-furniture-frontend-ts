import { type MouseEvent, type KeyboardEvent, useState } from "react";
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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';

import { type CartContextType, useCart } from "../contexts/CartContext";
import { type UserContextType, useUser } from '../contexts/UserContext';

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

interface HeaderProps {
  categoryId?: string | null;
}

export default function Header({ categoryId = null } : HeaderProps) {

  // const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [_, setAnchorEl] = useState<HTMLElement | null>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<HTMLElement | null>(null);

  // const isMenuOpen: boolean = Boolean(anchorEl);
  const isMobileMenuOpen: boolean = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = (): void => {
    setMobileMoreAnchorEl(null);
  };

  // const handleMenuClose = (): void => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>): void => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate();
  const [searchWord, setSearchWord] = useState("");

  const { cart } = useCart() as CartContextType;
  const { user, isAuthenticated } = useUser() as UserContextType;

  const totalQty: number = cart && cart.totalQty ? cart.totalQty : 0;


  const handleSearch = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      if (categoryId !== null) {
        navigate(`/products?category=${categoryId}&search=${encodeURIComponent(searchWord.trim())}`);
      } else {
        navigate(`/products?search=${encodeURIComponent(searchWord.trim())}`);
      }
    }
  };


  const menuId: string = 'primary-search-account-menu';
  const mobileMenuId: string = 'primary-search-account-menu-mobile';
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
              backgroundColor: 'transparent' 
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