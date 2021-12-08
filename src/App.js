import logo from './logo.svg';
import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { Votes } from './models';
import aws_exports from "./aws-exports";
import Amplify from 'aws-amplify';

Amplify.configure(aws_exports);

async function onInit() {
  const models = await DataStore.query(Votes);
  console.log(models);  
}

function App() {

  onInit()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Amplify
        </a>
      </header>
    </div>
  );
}

export default App;
