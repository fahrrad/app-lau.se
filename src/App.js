import React from 'react';


import aws_exports from "./aws-exports";
import Amplify from 'aws-amplify';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import VoteApp from './components/VoteApp';
import ScoreBoard from './components/ScoreBoard';


Amplify.configure(aws_exports);



function App() {
  return (
    <div className="App container mt-2">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <VoteApp /> }/>
          <Route path="/leaderboard" element={ <ScoreBoard /> }/>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
