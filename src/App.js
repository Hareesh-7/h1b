import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form1 from './components/Form1';

const App = () => {
  const [formData, setFormData] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" exact>
          <Form1 onSubmit={(data) => setFormData(data)} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;