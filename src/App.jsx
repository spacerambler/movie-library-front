import React from "react";
import "./App.css";

// import components, utils, etc here
import Movie from "./components/Movie";

function App() {

  // useEffect

  return (
    <main className="container mx-auto flex flex-col items-center pt-4 max-w-xs">
      <h1 className="text-4xl font-bold text-center">Project 3</h1>
    <div><Movie /></div>
    </main>
  );
}

export default App;
