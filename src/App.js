import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterForm from './components/RegisterForm'

function App() {
  return (
    <div className="App">
      <h1>
        How to integrate Paddle to your react app.
      </h1>
      <p>Sign up now!</p>
      <br />
      <RegisterForm />

    </div>
  );
}

export default App;
