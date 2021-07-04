import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../../api';
import { RootContext } from '../../contexts';

export default function Navbar() {
  const { currentUser, setCurrentUser } = useContext(RootContext);
  const isAuth = Boolean(currentUser);
  useCurrentUser();

  function render() {
    if (!isAuth) {
      return <>
        <Button variant="contained" color="primary" className={`fs-16 mr-10`}><Link to="/register" className="color-primary td-n">Register</Link></Button>
        <Button variant="contained" color="primary" className={`fs-16`}><Link to="/login" className="color-primary td-n">Login</Link></Button>
      </>
    } else {
      return <div className="flex ai-c">
        <Button variant="contained" color="primary" className={`fs-16`} onClick={() => {
          localStorage.removeItem('yupload.token')
          setCurrentUser(null)
        }}>Logout</Button>
        <Button variant="contained" color="primary" className="fw-500 ml-10 fs-16 c-p"><Link to={`/profile/${currentUser!.id}`} className="color-primary td-n">Profile</Link></Button>
        <Button variant="contained" color="primary" className="fw-500 ml-10 fs-16 c-p"><Link to={`/create`} className="color-primary td-n">Create</Link></Button>
      </div>
    }
  }

  return (
    <div className='flex-1'>
      <AppBar position="static" className="bg-base">
        <Toolbar>
          {render()}
        </Toolbar>
      </AppBar>
    </div>
  );
}
