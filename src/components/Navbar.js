import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {

  const favProd = useSelector(state => state.favProductReducer)
  const cartProd = useSelector(state => state.cartProductReducer)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="info">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vikram Online Store
          </Typography>
          <Button variant="contained" color="secondary" sx={{ marginRight: "10px", borderStyle: "none" }}>
            <Link to="/">Products</Link>
          </Button>
          <Button variant="contained" color="secondary" sx={{ borderStyle: "none" }}>
            <Link to="/favourite">Favourite  <b style={{ color: "black", marginLeft: "5px" }}>{favProd.length}</b></Link>
          </Button>
          <Button variant="contained" color="secondary" sx={{ marginLeft: "10px", borderStyle: "none" }}>
            <Link to="/cart">Cart <b style={{ color: "black", marginLeft: "5px" }}> {cartProd.length}</b></Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
