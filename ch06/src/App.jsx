import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ContextParentComponent } from "./components/ContextParentComponent";
import { ContextUserComponent } from "./components/ContextUserComponent";
import { ContextUserRegistComponent } from "./components/ContextUserRegistComponent";
import { ReduxParentComponent } from "./components/ReduxParentComponent";

function App() {
  return (
    <>
      <h3>ch06.리액트 상태 관리</h3>

      <h4>Context API 실습</h4>
      <ContextParentComponent />
      <ContextUserComponent />
      <ContextUserRegistComponent />

      <h4>Redux 실습</h4>
      <ReduxParentComponent />
    </>
  );
}

export default App;
