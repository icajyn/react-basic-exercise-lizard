import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/logo192.png" />
              </IconButton>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ehrica Jynne M. Espada
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Profile</Button>
            <Button color="inherit">Message</Button>
            <Button color="inherit">Logout</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
