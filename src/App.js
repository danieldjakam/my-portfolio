import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClientSide from './pages/ClientSide';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<ClientSide />} />
      </Routes>
    </Router>
  );
}

export default App;
