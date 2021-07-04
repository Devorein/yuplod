import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';


export default function Navbar() {
  return (
    <div className='flex-1'>
      <AppBar position="static" className="bg-base">
        <Toolbar>
          <Button variant="contained" color="primary" className={`fs-16 mr-10`}>Register</Button>
          <Button variant="contained" color="primary" className={`fs-16`}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
