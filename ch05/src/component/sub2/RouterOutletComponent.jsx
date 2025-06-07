import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { ParentComponent } from './ParentComponent';
import { Child1Component } from './Child1Component';
import { Child2Component } from './Child2Component';

export const RouterOutletComponent = () => {
  return (
    <div className="RouterOutletComponent">
      <h4>중첩 라우팅</h4>
      <p>
        부모 라우트에서 자식 라우트로 (주소는 링크 주소 아니고 컴포넌트 주소)
      </p>
      <p>
        <Link to={"/parent"}>parent</Link>&nbsp;
        <Link to={"/parent/child1"}>child1</Link>&nbsp;
        <Link to={"/parent/child2"}>child2</Link>
      </p>
      <Routes>
        <Route path="/parent" element={<ParentComponent />}>
          <Route path="/parent/child1" element={<Child1Component />}></Route>
          <Route path="/parent/child2" element={<Child2Component />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
