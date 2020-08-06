import React from 'react';
import { BrowserRouter as Router, Route } from "react-ruter-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Home />
        </Wrapper>
      </div>
    </Router>
  );
}
export default App;
