import { Switch, Route } from "react-router-dom";
import Land from "../Pages/land/index";
import Register from "../Pages/register/index";
import Login from "../Pages/login/index";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Land />
      </Route>
      <Route exact path="/cadastro">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/home"></Route>
      <Route exact path="/Newhabitos"></Route>
      <Route exact path="/Meushabitos"></Route>
      <Route exact path="/groups"></Route>
    </Switch>
  );
};

export default Routes;
