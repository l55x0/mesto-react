import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ path, loggedIn, isChecking, children }) => {
  return (
    <Route path={path} exact>
      { isChecking ? (
        <main className={"content page__content"}></main>
      ) : (
        loggedIn ? children : <Redirect to="./sign-in" />
      )}
    </Route>
  )
}

export default ProtectedRoute;