import React from 'react';

import {Categories} from '../models';
import VoteButton from './VoteButton';

export default function TeamVotingPanel ({Team}) {
    return (
    <div className="container team-voting-section">
        <div className="row">
          <div className= "col" >
            <VoteButton Team={Team} Category={Categories.INNOVATION} />
          </div>
          <div className= "col" >
            <VoteButton Team={Team} Category={Categories.IMPACT} />
          </div>
        </div>
        <div className="row">
          <div className= "col" >
            <VoteButton Team={Team} Category={Categories.VALUE} />
          </div>
          <div className= "col" >
            <VoteButton Team={Team} Category={Categories.REALISM} />
          </div>
        </div>
    </div> 
    );
}