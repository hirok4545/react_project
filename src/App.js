import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './com/Navbar';
import Home from './com/Home';
import Notes from './com/Notes';
import CreateNote from './com/CreateNote';

function App() {
  return (
    <Router>
      <Navbar />

      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/notes">
        {' '}
        <Notes />
      </Route>
      <Route path="/create">
        <CreateNote />
      </Route>
    </Router>
  );
}

export default App;
