import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Router, Route } from "react-router-dom";
// import config from "./utils/config"
import AuthContext from "./context/AuthContext";
import UserService from "./services/User"

import "./App.css";
import HomeView from "./pages/HomeView";
import Login from "./pages/Login";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: 
    import.meta.env.NODE_ENV === "development"
      ? "http://localhost:4000/graphql"
      : "https://movie-library-wustl-3.herokuapp.com/graphql",

  cache: new InMemoryCache(),
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  React.useEffect(() => {
    document.title = "Movie Library";
  }, []);

  return (
    <ApolloProvider client={client}>
      <Router>
          <AuthContext.Provider value={React.useState(UserService.getUser())}>
            {/* <Route path="/signup">
              <AddUserLoginView />
            </Route>  */}
            <Route path="/login">
              <Login />
            </Route> 
            <Route exact path="/">
              <HomeView />
            </Route>
          </AuthContext.Provider>
      </Router>
    </ApolloProvider>
  );
}

export default App;