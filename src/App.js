import logo from './logo.svg';
import './App.css';
import {Teams, Categories} from './models';

import aws_exports from "./aws-exports";
import Amplify from 'aws-amplify';

import VotesComponent from './components/Votes';
import Header from './components/Header';
import VoteButton from './components/VoteButton';
Amplify.configure(aws_exports);

function App() {


  return (
    <div className="App container">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className= "col" >
          <VoteButton Team={Teams.ONE} Category={Categories.INNOVATION} />
        </div>
        <div className= "col" >
          <VoteButton Team={Teams.ONE} Category={Categories.IMPACT} />
        </div>
      </div>
      <div className="row">
        <div className= "col" >
          <VoteButton Team={Teams.ONE} Category={Categories.VALUE} />
        </div>
        <div className= "col" >
          <VoteButton Team={Teams.ONE} Category={Categories.REALISM} />
        </div>
      </div>
    </div>
  );
}

export default App;
