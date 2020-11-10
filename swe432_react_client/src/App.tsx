import * as React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Assignment9 } from './components/assignment9_app/Assignment9'

function App() {
  return (
    <div>
      <div className="main-section">
        <header className="app-header">
          <a href="/"><h1>Home</h1></a>
          <a href="/assignment9"><h1>Assignment9</h1></a>
        </header>
      </div>

      <Router>
        <div>
          <Switch>
            <Route exact path="/assignment9" component={Assignment9} />
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
