import React from 'react';
import './index.css'
import AppContent from 'components/AppContent';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App;
