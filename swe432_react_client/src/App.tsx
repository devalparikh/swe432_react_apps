import * as React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Assignment9 } from './components/assignment9_app/Assignment9'
import Assignment10 from './components/assignment10_app/Assignment10'
import { Home } from './components/home/Home'

function App() {
  return (
    <div>
      <div className="main-section">
        <header className="app-header">
          <a href="/"><h1>Home</h1></a>
          <a href="/assignment9"><h1>Assignment9</h1></a>
          <a href="/assignment10"><h1>Assignment10</h1></a>
        </header>
      </div>

      <Router>
        <div>
          <Switch>
            <Route exact path="/assignment9" component={Assignment9} />
            <Route exact path="/assignment10" component={Assignment10} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
