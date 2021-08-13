import { Switch, Route } from "react-router-dom";
import Land from "../Pages/land/index";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Land />
      </Route>
      <Route exact path="/cadastro"></Route>
    <Route exact path="/login"></Route>
    <Route exact path="/home"></Route>
    <Route exact path="/Newhabitos"></Route>
    <Route exact path="/Meushabitos"></Route>
    <Route exact path="/groups"></Route>
    </Switch>
  );
};

export default Routes;
