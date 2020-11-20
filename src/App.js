import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import './App.css';

function App() {
  return (
    // BEM convention
    <div className="app">
      {/* <h1>First things first!</h1> */}

      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widget */}
    </div>
  );
}

export default App;
