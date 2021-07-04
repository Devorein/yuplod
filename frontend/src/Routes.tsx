import { Route, Switch } from "react-router-dom";
import { Create, Home, Login, Profile, Register } from "./pages";

export default function Routes() {
  return <Switch>
    <Route exact path="/" render={() => <Home />} />
    <Route exact path="/register" render={() => <Register />} />
    <Route exact path="/login" render={() => <Login />} />
    <Route exact path="/profile" render={() => <Profile />} />
    <Route exact path="/create" render={() => <Create />} />
  </Switch>
}