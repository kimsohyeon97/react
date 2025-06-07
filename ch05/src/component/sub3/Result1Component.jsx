import React from 'react'
import { useSearchParams } from 'react-router-dom';

export const Result1Component = () => {
  
  // 주소 쿼리 스트링 처리 훅
  const [SearchParams] = useSearchParams();
  const name = SearchParams.get("name");
  const email = SearchParams.get("email");
  const age = SearchParams.get("age");

    return (
      <div className="Result1Component">
        <h4>Result1Component</h4>
        <p>
          이름 : {name} <br />
          이메일 : {email} <br />
          나이 : {age} <br />
        </p>
      </div>
    );
}
