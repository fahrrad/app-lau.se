import logo from './logo.svg';
import './App.css';


import aws_exports from "./aws-exports";
import Amplify from 'aws-amplify';

import VotesComponent from './components/Votes';

Amplify.configure(aws_exports);


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <VotesComponent />
      </header>
    </div>
  );
}

export default App;
