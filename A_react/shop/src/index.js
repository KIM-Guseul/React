import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Router 설정하기 : 페이지 여러개인 웹사이트 만들기 yarn add react-router-dom 설치

import { BrowserRouter } from 'react-router-dom';

// import { HashRouter } from 'react-router-dom';

/* 
  HashRouter : 라우팅 안정적. # 이후 주소를 서버에 전송하지 않음. 리엑트가 안정적으로 페이지 처리.
  BrowserRouter : 라우팅을 리액트라 아닌 서버에 요청할 수 있어서 위험 -> 서버가 페이지 없다고 응답... 
*/



ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>

    {/* <HashRouter>
      <App />
    </HashRouter> */}

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
