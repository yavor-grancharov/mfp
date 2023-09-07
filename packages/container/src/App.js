import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./components/Header";
import LoadingBar from "./components/LoadingBar";
// import Auth from "./components/Auth";
// import Marketing from "./components/Marketing";

const Auth = React.lazy(() => import("./components/Auth"));
const Marketing = React.lazy(() => import("./components/Marketing"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  const [isSignedin, setIsSignedin] = React.useState(false);

  const handleSignIn = () => {
    setIsSignedin(true);
  };

  const handleSignout = () => {
    setIsSignedin(false);
  };

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isSignedin={isSignedin} onSignOut={handleSignout} />
          <React.Suspense fallback={<LoadingBar />}>
            <Switch>
              <Route path="/auth">
                <Auth onSignin={handleSignIn} />
              </Route>
              <Route path="/" component={Marketing} />
            </Switch>
          </React.Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
