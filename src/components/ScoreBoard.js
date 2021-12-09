import React from 'react';

import TeamScoreCard from './TeamScoreCard';
import {Teams} from '../models';

export default function ScoreBoard () {
    return (
    <div>
        <div className="team-1">
            <TeamScoreCard Team={Teams.ONE} />
        </ div>
        <div className="team-3">
            <TeamScoreCard Team={Teams.THREE} />    
        </ div>
        <div className="team-4">
            <TeamScoreCard Team={Teams.FOUR} />
        </ div>
        <div className="team-5">
            <TeamScoreCard Team={Teams.FIVE} />
        </ div>
        <div className="team-6">
            <TeamScoreCard Team={Teams.SIX} />
        </ div>
    </div> );
}