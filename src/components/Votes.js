import React, { useEffect, useState } from 'react';
import Vote from './Vote';
import { DataStore } from '@aws-amplify/datastore';
import { Votes } from '../models';

export default function VotesComponent () {
    const [votes, setVotes] = useState({});

    useEffect(() => {
        DataStore.query(Votes)
        .then (data => setVotes(data)) }, [])


    return (
        votes[0] ? 
        <ul>    
                <Vote Team={ votes[0].Team } Category={ votes[0].Category }  />
                <Vote Team={ votes[1].Team } Category={ votes[1].Category }  />
        </ul> : <div> No Votes </div> );

}
