import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../../api';
import { JWT_TOKEN_LS_KEY } from '../../constants';
import { RootContext } from '../../contexts';

function NavbarButton(props: { to?: string, text: string, onClick?: (e: React.MouseEventHandler<HTMLButtonElement>) => void }) {
  const { to, text, onClick } = props;
  const buttonProps: any = {};
  if (onClick)
    buttonProps.onClick = onClick;
  return <Button {...buttonProps} variant="contained" color="primary" className="fw-500 mr-10 fs-16 c-p">{to ? <Link to={to} className="color-primary td-n">{text}</Link> : text}</Button>
}

export default function Navbar() {
  const { currentUser, setCurrentUser } = useContext(RootContext);
  const isAuth = Boolean(currentUser);
  useCurrentUser();

  function render() {
    if (!isAuth) {
      return <>
        <NavbarButton to={`/register`} text={"Register"} />
        <NavbarButton to={`/login`} text={"Login"} />
      </>
    } else {
      return <div className="flex ai-c">
        <NavbarButton text={"Logout"} onClick={() => {
          localStorage.removeItem(JWT_TOKEN_LS_KEY)
          setCurrentUser(null)
        }} />
        <NavbarButton to={`/create`} text={"Create"} />
        <NavbarButton to={`/`} text={"Home"} />
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
