import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const ReduxChildComponent = () => {
  const count = useSelector((state) => state.counter.count); // counter는 store 파일에 설정한 reducer 이름
  const dispatch = useDispatch();

  return (
    <div className="ReduxChildComponent">
      <h4>ReduxChildComponent</h4>
      <p>
        ReduxChildComponent count : {null}
        <br />
        <button onClick={null}>증가</button>
        <button onClick={null}>감소</button>
        <button onClick={null}>리셋</button>
      </p>
    </div>
  );
};
