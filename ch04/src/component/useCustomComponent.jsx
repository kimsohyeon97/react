import React, { useState } from 'react'

export const useCustomComponent = () => {

const [state, increaseDispatch, decreaseDispatch, resetDispatch] = useState(0);

  return (
    <div className="useCustomComponent">
      <h4>useCustomComponent</h4>

      <button onClick={increaseDispatch}>증가</button>
      <button onClick={decreaseDispatch}>감소</button>
      <button onClick={resetDispatch}>리셋</button>
      <p>count : {state.count}</p>

    </div>
  );
}
