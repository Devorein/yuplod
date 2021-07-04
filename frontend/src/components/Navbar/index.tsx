import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import axios from "axios";
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { RootContext } from '../../contexts';
import { IUser } from '../../types';

export default function Navbar() {
  const { currentUser, setCurrentUser } = useContext(RootContext);
  const isAuth = Boolean(currentUser);

  useQuery('me', async () => {
    const token = localStorage.getItem('yuplod.token');
    if (token) {
      const { data } = await axios.get<{ data: IUser }>(`http://localhost:4000/api/v1/users/me`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      if (data.data) {
        setCurrentUser(data.data)
      }
    }
  })

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
