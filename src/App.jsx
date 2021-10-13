import { ApolloClient, ApolloProvider } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import HomeView from "./pages/Movies";

import getMovies from "./services/API.services";
import MovieCardList from "./components/MovieCardList";

// const client = new ApolloClient({
//   url: "http://localhost:4000/graphql",
// });

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("use effect running")
    getMovies().then((jsonData) => {
      console.log("use effect" + jsonData)
      setData(jsonData);
    })
  }, []);

  return (
    <main>
    <Router>
    {/* <ApolloProvider client={client}> ... not sure how to use this right now yet */}
      <Route path="/" exact>
        <HomeView />
      </Route>
    </Router>
    </main>
  );
}

export default App;
