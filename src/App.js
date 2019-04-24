import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/signup";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exxact component={Login} />
      </div>
    </Router>
  );
}

export default App;
