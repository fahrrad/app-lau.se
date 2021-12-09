import {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import {Teams, Categories} from './models';

import aws_exports from "./aws-exports";
import Amplify from 'aws-amplify';

import VotesComponent from './components/Votes';
import Header from './components/Header';
import VoteButton from './components/VoteButton';
import TeamVotingPanel from './components/TeamVotingPanel';
Amplify.configure(aws_exports);

const initialState = {'team': Teams.SIX}


function teamSelected( e, updateTeamState ){
  console.log(e);
  updateTeamState(currentState => ({ ...currentState, [e.target.name]: e.target.value }));
}

function App() {

  const [team, setTeam] = useState(initialState);

  return (
    <div className="App container">
      <div className="row">
        <Header />
        <select name="team" onChange={(e) => teamSelected(e, setTeam)} className="form-select" aria-label="Select Team">
          <option value={Teams.ONE} selected>{Teams.ONE}</option>
          <option value={Teams.THREE} >{Teams.THREE}</option>
          <option value={Teams.FOUR} >{Teams.FOUR}</option>
          <option value={Teams.FIVE} >{Teams.FIVE}</option>
          <option value={Teams.SIX} >{Teams.SIX}</option>
        </select>
      </div>

      <TeamVotingPanel Team={team.team} />
      
    </div>
  );
}

export default App;
