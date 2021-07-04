import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RootContext } from '../../contexts';

export default function Navbar() {
  const { currentUser } = useContext(RootContext);

  return (
    <div className='flex-1'>
      <AppBar position="static" className="bg-base">
        <Toolbar>
          {!currentUser ? <>
            <Button variant="contained" color="primary" className={`fs-16 mr-10`}><Link to="/register" className="color-primary td-n">Register</Link></Button>
            <Button variant="contained" color="primary" className={`fs-16`}><Link to="/login" className="color-primary td-n">Login</Link></Button>
          </> : <Button variant="contained" color="primary" className={`fs-16`} onClick={() => localStorage.removeItem('yupload.token')}>Logout</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
