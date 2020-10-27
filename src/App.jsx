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
import {BodySkeleton} from "./components/BodyContainer/BodyContainer";
import {getMovies} from "./api/getMovies";
import {getDailyTranding} from "./api/getDailyTranding";
import {Home} from "./pages/Home/Home";

function App() {
  return (
    <Router className="App">
        <Header/>
        <Home/>
    </Router>
  );
}

export default App;
