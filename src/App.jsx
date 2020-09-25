import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Header';
import {Header} from "./components/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
    <Router className="App">
        <Header/>
    </Router>
  );
}

export default App;
