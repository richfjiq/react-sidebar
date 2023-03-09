import { Route, Switch } from 'react-router-dom';

import { Home } from './pages';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/statistics">
        <h1>Statistics Page</h1>
      </Route>
      <Route exact path="/customers">
        <h1>Customers Page</h1>
      </Route>
      <Route exact path="/diagrams">
        <h1>Diagrams Page</h1>
      </Route>
    </Switch>
  );
};

export default Routes;
