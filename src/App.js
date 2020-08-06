import React from 'react';
import { BrowserRouter as Router, Route } from "react-ruter-dom";
import Home from './pages/Home';
import Jumbotron from './components/Jumbotron'
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Router>
      <div>
        <Jumbotron />
        <Wrapper>
          <Home />
        </Wrapper>
      </div>
    </Router>
  );
}
export default App;
