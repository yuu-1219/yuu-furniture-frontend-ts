import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <AppBar 
      component="footer" 
      sx={{ 
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
            flexGrow: 1, 
            textAlign: 'center', 
            justifyContent: 'center' }}
        >
          &copy; Yuu furniture All rights reserved.
        </Typography>

        <Box
          sx={{
            display: { xs: 'block', sm: 'none' },
            width: '400px' 
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
            // component={Link}
            sx={{ display: { xs: 'flex'}, fontWeight: "700", fontSize: "12px", textDecoration: 'none', color: 'inherit' }}
          >
            よくある質問(FAQ)
          </Typography>

          <Typography
            noWrap
            // component={Link}
            sx={{ display: { xs: 'flex', fontWeight: "700", fontSize: "12px", textDecoration: 'none', color: 'inherit' } }}
          >
            お問い合わせ
          </Typography>
        </Box>
          

      </Toolbar>
    </AppBar>
  );
}

export default Footer;