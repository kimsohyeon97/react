import React, { useContext } from "react";
import CounterContext from "../contexts/CounterContext";

export const ContextChildComponent = () => {
  const { count, increment, decrement, reset } = useContext(CounterContext);

  return (
    <div className="ContextChildComponent">
      <h4>ContextChildComponent</h4>
      <p>
        ContextChild count : {count}
        <br />
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
        {/* prettier-ignore */}
        <button onClick={() => {reset(1);}}>리셋</button>
      </p>
    </div>
  );
};
