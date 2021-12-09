import React, {useState} from 'react';

import {Link} from 'react-router-dom';

import {Teams} from '../models';

import TeamVotingPanel from './TeamVotingPanel';

const initialState = {'team': Teams.ONE}


function teamSelected( e, setTeam ){
  console.log(e);
  setTeam(currentState => ({ ...currentState, [e.target.name]: e.target.value }));
}

export default function VoteApp() {
  const [team, setTeam] = useState(initialState);

return (
    <div>
        <div className="row">
            <select name="team" onChange={(e) => teamSelected(e, setTeam)} className="form-select" aria-label="Select Team">
            <option value={Teams.ONE} selected>One: B.I. for Media Assets</option>
            <option value={Teams.THREE} >Three: Live Voting</option>
            <option value={Teams.FOUR} >Four: Holiday Management</option>
            <option value={Teams.FIVE} >Five: Analyse Race Data</option>
            <option value={Teams.SIX} >Six: Stock Replenishment</option>
            </select>
        </div>

        <TeamVotingPanel Team={team.team} />

        <Link to="/leaderboard" >leaderboard</Link>
        
    </div>)
}