import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import GithubSearch from './GithubSearch'
import axios from 'axios';

import './App.css';

function App() {
  return (
    <div className="App">
      <GithubSearch/>
    </div>
  );
}

export default App;
