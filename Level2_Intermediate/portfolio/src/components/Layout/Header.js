import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import '../../styles/Header.css';

const Header = () => {
  return (
    <AppBar position="static" className="appBar">
      <Toolbar>
        <Typography variant="h6" className="title">
          My Portfolio
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
