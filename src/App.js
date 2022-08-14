import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
