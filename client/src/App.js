import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page Imports
import Home from './pages/Home';
import Request from './pages/Request';
import Example from './pages/Example';
import NoMatch from './pages/NoMatch';

// Component Imports

function App() {
  return (
    <section class='app'>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            />
            <Route
              path="/request"
              element={<Request />}
            />
            <Route
              path="/example"
              element={<Example />}
            />
            <Route
              path="*"
              element={<NoMatch />}
            />
          </Routes>
        </Router>
    </section>
  );
}

export default App;
