import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Header/Header';
import { Header } from "./components/Header/Header";
import {FilmCard} from "./components/FilmCard/FilmCard";
import {
    Link,
    Route,
    Switch,
    BrowserRouter as Router
} from "react-router-dom";
import { SelectMenu } from "./components/SelectMenu/SelectMenu";

function App() {
  return (
    <Router className="App">
        <Header/>
        <FilmCard/>
    </Router>
  );
}

export default App;
