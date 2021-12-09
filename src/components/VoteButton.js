import React from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Votes } from '../models';



function castVote(team, category){
    DataStore.save(
    new Votes({
		"Team": team,
		"Category": category,
		"User": "Lorem ipsum dolor sit amet"
	}));
}

export default function VoteButton ({Team, Category}) {
    return (
        <div className="btn btn-success vote-button" onClick={() => castVote(Team, Category)}> {Category} </div>
    )
}