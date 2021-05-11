import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';
const Login = lazy(() => import('./pages/login'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const SignUp = lazy(() => import('./pages/sign-up'));
const NotFound = lazy(() => import('./pages/not-found'));

function App() {
  // NOTE
  // Error: A cross-origin error was thrown. React doesn't have access to the actual error object in development.
  const user = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router >
    </UserContext.Provider>
  );
}

export default App;
