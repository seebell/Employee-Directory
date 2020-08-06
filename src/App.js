import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Jumbotron from './components/Jumbotron'
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Router>
      <div>
        <Jumbotron />
        <Wrapper>
        <Route exact path="/" component={Home} /> 
        </Wrapper>
      </div>
    </Router>
  );
}
export default App;
