import React, { useEffect, useState } from 'react';

import { DataStore } from '@aws-amplify/datastore';
import { Votes } from '../models';

export default function TeamScoreCard ({Team}) {
    const [score, setScore] = useState({});

    useEffect(() => {
        DataStore.query(Votes, v => v.Team("eq", Team))
        .then (data => { 
            const votes = { "INNOVATION": 0, "VALUE": 0, 
                            "REALISM": 0, "IMPACT": 0, "total": 0};
            data.forEach(vote => {
                switch (vote.Category) {
                    case "INNOVATION":
                        votes.INNOVATION += 1;
                        break;
                    case "IMPACT":
                        votes.IMPACT += 1;
                        break;
                    case "REALISM":
                        votes.REALISM += 1;
                        break;
                    case "VALUE":
                        votes.VALUE += 1;
                        break;
                
                    default:
                        break;
                }
                votes.total +=1;
            });

            setScore(votes);}) }, []);

    return (score ? 
    <div className="row"> <h2> {Team} </h2>
        <div className="row score-row">Innovation: {score.INNOVATION} </div> 
        <div className="row score-row">Realism: {score.REALISM} </div> 
        <div className="row score-row">Impact: {score.IMPACT} </div> 
        <div className="row score-row">Value: {score.VALUE} </div> 
        <div className="row score-row-total" > Total: {score.total}</div>
    </div> 
    
    : <div>Loading</div>)

}