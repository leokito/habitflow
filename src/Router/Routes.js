import { Switch, Route } from "react-router-dom";
import Land from "../Pages/land/index";
import Register from "../Pages/register/index";
import Login from "../Pages/login/index";
import Home from "../Components/home/Index";
import NewHabit from "../Pages/Newhabitos";
import GroupsPage from "../Pages/groups/Index";

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
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/groups">
        <GroupsPage />
      </Route>
      <Route exact path="/Newhabitos">
        <NewHabit />
      </Route>
    </Switch>
  );
};

export default Routes;
