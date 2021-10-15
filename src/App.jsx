import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import config from "./utils/config"
import AuthContext from "./context/AuthContext";
import UserService from "./services/User"
// import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";

import "./App.css";
import HomeView from "./pages/HomeView";
import AddUserLoginView from "./pages/AddUserLoginView";

const client = new ApolloClient({
  uri:
    import.meta.env.NODE_ENV === "development"
      ? "http://localhost:4000/graphql"
      : "https://movie-library-wustl-3.herokuapp.com/graphql",

  cache: new InMemoryCache(),
});

function App() {
  React.useEffect(() => {
    document.title = "Movie Library";
  }, []);

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          {/* Provide a way to access and/or set the current user. */}
          {/* <AuthContext.Provider value={React.useState(UserService.getUser())}> */}
            <Route path="/signup">
              <AddUserLoginView />
            </Route> 
            <Route path="/login">
              <AddUserLoginView />
            </Route> 
            <Route exact path="/">
              <HomeView />
            </Route>
          {/* </AuthContext.Provider> */}
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;