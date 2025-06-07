import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { RouterBasicComponent } from './component/sub1/RouterBasicComponent';
import { RouterOutletComponent } from './component/sub2/RouterOutletComponent';
import { RouteDataComponent } from './component/sub3/RouteDataComponent';
import root from './routers/root';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>ch05. React Router</h3>

      <h4>Router 기본</h4>
      <BrowserRouter>
        <RouterBasicComponent />
      </BrowserRouter>

      <h4>Router Outlet</h4>
      <BrowserRouter>
        <RouterOutletComponent />
      </BrowserRouter>

      <h4>Router 데이터 전송</h4>
      <BrowserRouter>
        <RouteDataComponent />
      </BrowserRouter>

      <h4>사용자 정의 Router (Router Outlet보다 더 많이 사용됨)</h4>
      <RouterProvider router={root} />
    </>
  );
}

export default App
