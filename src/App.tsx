import React from 'react';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Publications from './components/Publications';
import './styles/index.css';
import MainSection from './components/MainSection';

function App() {
  return (
    <div>
      <Profile />
      <Projects />
      <MainSection />
    </div>
  );
}

export default App;
