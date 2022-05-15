import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';

export default function App() {
  const [darkMode,setDarkMode]= React.useState(true)
  function toggleDarkMode(){
    setDarkMode(prev=>!prev)
  }
  return (
    <div className="Container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode}/>
  
    </div>
  );
} 


