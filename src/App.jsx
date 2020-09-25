import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Header/Header';
import {Header} from "./components/Header/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {SelectMenu} from "./components/SelectMenu/SelectMenu";

function App() {
  return (
    <Router className="App">
        <Header/>
        <SelectMenu/>
    </Router>
  );
}

export default App;
