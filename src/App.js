import React from 'react';
import './style.css';
import Sidebar from './components/Sidebar/Sidebar';

export default function App() {
  return (
    <div className="App" id="outer-container">
      <div id="page-wrap">
        <Sidebar
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        />
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
    </div>
  );
}
