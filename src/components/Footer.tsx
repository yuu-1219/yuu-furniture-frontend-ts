import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <AppBar 
      component="footer" 
      sx={{ 
        // top: 'auto', 
        // bottom: 0, 
        backgroundColor: "#e6d9ac", 
        color: "#5b5b5b",
        position: "static"
      }}
    >
      <Toolbar 
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Box sx={{ width: '200px' }} />
        <Typography 
          variant="body1" 
          sx={{ 
            display: { xs: 'none', sm: 'block' }, 
            // visibility: { xs: 'hidden', sm: 'visible' },
            flexGrow: 1, 
            textAlign: 'center', 
            justifyContent: 'center' }}
        >
          &copy; Yuu furniture All rights reserved.
        </Typography>

        <Box
          sx={{
            display: { xs: 'block', sm: 'none' },
            width: '400px' // ロゴと同じ幅でバランスをとる
          }}
        >
        </Box>

        <Box 
          sx={{ 
            display: 'flex',  
            width: '200px', 
            justifyContent: 'flex-end',
            alignItems: 'center', 
            gap: 2
          }}
        >
          <Typography
            noWrap
            component={Link}
            sx={{ display: { xs: 'frex'}, fontWeight: "700", fontSize: "12px", textDecoration: 'none', color: 'inherit' }}
          >
            よくある質問(FAQ)
          </Typography>

          <Typography
            noWrap
            component={Link}
            sx={{ display: { xs: 'frex', fontWeight: "700", fontSize: "12px", textDecoration: 'none', color: 'inherit' } }}
          >
            お問い合わせ
          </Typography>
        </Box>
          

      </Toolbar>
    </AppBar>
  );
}

export default Footer;