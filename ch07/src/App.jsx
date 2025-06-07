import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { User1Component } from "./components/user1/User1Component";
import { User2Component } from "./components/user2/User2Component";

function App() {
  return (
    <>
      <h3>ch07.React HTTP 통신</h3>

      <User1Component />
      <User2Component />
    </>
  );
}

export default App;
