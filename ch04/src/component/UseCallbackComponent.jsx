import React, { useCallback, useEffect, useState } from 'react'

export const UseCallbackComponent = () => {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    // 핸들러, 최적화 할 때 보통 사용, (자바스크립트에서 함수는 객체)
    const buttonHandler = useCallback( () => {
        setCount((preCount)=>{
            return preCount + 1
        });
    }, []);

    // 버튼 핸들러 값이 있으면 원래 아이디, 없으면 랜덤값
    buttonHandler.id = buttonHandler.id || crypto.randomUUID();

    console.log("현재 buttonHandler.id : ", buttonHandler.id);

    useEffect(() => {
      console.log("buttonHandler update...");
    }, [buttonHandler]);

  return (
    <div className="UseCallbackComponent">
      <h4>UseCallbackComponent</h4>

        <p>
            count : {count}
            <button onClick={buttonHandler}>증가</button>
        </p>

    </div>
  );
}
