import React from "react";
import { RouteChildrenProps, Route, Switch } from "react-router-dom";
// import Header from "./components/Header";
import routes from "./config/routes";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <Switch>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            render={(_routeProps: RouteChildrenProps<any>) => (
              <route.component {..._routeProps} />
            )}
          />
        );
      })}
    </Switch>
  );
};

export default Application;
