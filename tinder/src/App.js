import React from "react"
import './App.css';
import Header from "./Header";
import TinderCard from "./TinderCard";
import SwipeButtons from "./SwipeButtons";

//53
function App() {
  return (
    <div className="app">
      <Header />
      <TinderCard/>
      <SwipeButtons />
    </div>
  );
}

export default App;
