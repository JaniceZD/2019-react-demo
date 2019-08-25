import React from 'react';
import logo from './logo.svg';
import './App.css';

function sayHi() {
  alert('Hi!')
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React 也不过如此嘛</h1>
        <p>
          编辑 <code>src/App.js</code> 就能改变页面显示。
        <button onClick={sayHi}>点我!</button>
        </p>
      </header>
    </div>
  );
}

export default App;
