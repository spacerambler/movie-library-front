// import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import AuthContext from "./context/AuthContext";
// import UserService from "./services/User"

import "./App.css";
import HomeView from "./pages/HomeView";

// const client = new ApolloClient({
//   uri: "http://localhost:4000/graphql",
// });

function App() {

  return (
    // <ApolloProvider client={client}>
      <BrowserRouter>
        {/* <Switch> */}
          {/* Provide a way to access and/or set the current user. */}
          {/* <AuthContext.Provider value={React.useState(UserService.getUser())}>
            <Route path={["/signup", "/login"]}>
              <AddUserLoginView />
            </Route> */}
            <Route exact path="/">
              <HomeView />
            </Route>
          {/* </AuthContext.Provider>
        </Switch> */}
      </BrowserRouter>
    // </ApolloProvider>
  );
}

export default App;