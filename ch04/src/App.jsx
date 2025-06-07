import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UseRefComponent } from "./components/UseRefComponent";
import { UseStateComponent } from "./components/UseStateComponent";
import { UseReducerComponent } from "./components/UseReducerComponent";
import { UseEffectComponent } from "./component/UseEffectComponent";
import { UseMemoComponent } from "./component/UseMemoComponent";
import { UseCallbackComponent } from "./component/UseCallbackComponent";

/*
  날짜 : 2025/05/13
  이름 : 한결
  내용 : ch04. 리액트 훅
*/

function App() {
  return (
    <>
      <h3>4장 리액트 훅</h3>

      {/* use라는 함수로 시작하는데 그걸 hook이라고 함 */}

      {/* useRef hook ref={refName} <- 이 속성으로 식별값, id 속성은 안 씀 */}
      {/* useRef hook */}
      <UseRefComponent />
      <UseRefComponent />

      {/* useState hook */}
      <UseStateComponent />

      {/* useReducer hook */}
      <UseReducerComponent />

      {/* useEffect hook */}
      <UseEffectComponent />

      {/* useMemo hook */}
      <UseMemoComponent />

      {/* useCallback hook */}
      <UseCallbackComponent />

      {/* useCustom hook */}
      <useCustomComponent />
      
    </>
  );
}

export default App;
