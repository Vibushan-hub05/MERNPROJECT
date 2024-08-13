import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/Navigationbar'; // Ensure the path is correct
import Login from './Components/login'; // Ensure the path is correct
import Signup from './Components/SignUp'; // Ensure the path is correct
import Content from './Components/content'; // Ensure the path is correct
import Contact from './Components/Contact'; // Ensure the path is correct
import Recipe from './Components/recipe'; // Ensure the path is correct

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipe" element={<Recipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
