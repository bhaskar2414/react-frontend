import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Header() {
    return (
        <Box component="span">
        <Button variant="outlined" href="/" sx={{ mt: 2, mr: 2, float: "right",textTransform: 'capitalize' }}>
          Home
        </Button>
        <Button variant="outlined" href="/list" sx={{ mt: 2, mr: 2, float: "right",textTransform: 'capitalize' }}>
          User List
        </Button>
        <Button variant="outlined" href="/login" sx={{ mt: 2, mr: 2, float: "right",textTransform: 'capitalize' }}>
          Login
        </Button>
        
      </Box>
    )
}

export default Header;