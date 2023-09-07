import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { createBrowserHistory } from "history";

import Header from "./components/Header";
import LoadingBar from "./components/LoadingBar";

const Auth = React.lazy(() => import("./components/Auth"));
const Marketing = React.lazy(() => import("./components/Marketing"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

export default () => {
  const [isSignedin, setIsSignedin] = React.useState(false);

  React.useEffect(() => {
    if (isSignedin) {
      history.push("/dashboard");
    }
  }, [isSignedin]);

  const handleSignIn = () => {
    setIsSignedin(true);
  };

  const handleSignout = () => {
    setIsSignedin(false);
  };

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isSignedin={isSignedin} onSignout={handleSignout} />
          <React.Suspense fallback={<LoadingBar />}>
            <Switch>
              <Route path="/auth">
                <Auth onSignin={handleSignIn} />
              </Route>
              <Route path="/dashboard">
                {!isSignedin && <Redirect to="/" />}
                <Dashboard />
              </Route>
              <Route path="/" component={Marketing} />
            </Switch>
          </React.Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};
