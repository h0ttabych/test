import React from 'react';
import './App.css';

 const App = () => {
  return (
    <div>
      <h1>My Todo List</h1>
      <input placeholder='search'/>
      <ul>
        <li>Learn React</li>
        <li>Build Awesome App</li>
      </ul>
    </div>
  );
};

export default App;
