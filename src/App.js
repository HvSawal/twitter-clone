import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
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
      <Widgets />
    </div>
  );
}

export default App;
