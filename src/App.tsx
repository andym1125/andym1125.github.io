import { useState } from 'react'
// import './App.css'
import BarbieResume from './components/BarbieResume'
import HorrorPosterResume from './components/HorrorPosterResume'
import NeonTokyoResume from './components/NeonTokyoResume'
import { andyPersonalInfo } from './components/personalInfo'
import TypewriterResume from './components/TypewriterResume'
import Y2KResume from './components/Y2KResume'
import { ComponentRoulette } from './components/ComponentRoulette'
import MacintoshResume from './components/MacintoshResume'
import CliResume from './components/CliResume'
import RetroGameResume from './components/RetroGamingResume'
import NoirResume from './components/NoirResume'
import GlassMorphismResume from './components/GlassMorphismResume'
import PostcardResume from './components/PostcardResume'

/**
 * An example App component to demonstrate the ComponentRoulette in fullscreen.
 */
const App = () => {
  const [rouletteKey, setRouletteKey] = useState(0);

  const componentsToSpin = [
    <Y2KResume personalInfo={andyPersonalInfo} />, // 4/5
    <TypewriterResume personalInfo={andyPersonalInfo} />, // 1/5
    <BarbieResume personalInfo={andyPersonalInfo} />, // 3/5
    <NeonTokyoResume personalInfo={andyPersonalInfo} />, // 4/5, hook error
    <HorrorPosterResume personalInfo={andyPersonalInfo} />, // 5/5, best one yet
    <MacintoshResume personalInfo={andyPersonalInfo} />, // 5/5, amazing interactivity
    <CliResume personalInfo={andyPersonalInfo} />, // 5/5, amazing interactivity
    <RetroGameResume personalInfo={andyPersonalInfo} />, // 3/5, mid
    <NoirResume personalInfo={andyPersonalInfo} />, // 4/5, pretty neat, neats work to be amazing
    <GlassMorphismResume personalInfo={andyPersonalInfo} />, // 4/5, pretty neat
    <PostcardResume personalInfo={andyPersonalInfo} />, // 3/5, mid
  ];

  return (
    // Main container is now relative and takes the full screen
    <div className="relative h-screen w-screen bg-gray-900 ">
      <ComponentRoulette
        key={rouletteKey}
        components={componentsToSpin}
        spinDuration={4000}
      />

      {/* Floating "Spin Again" button */}
      <button
        onClick={() => setRouletteKey(prev => prev + 1)}
        className="fixed bottom-8 right-8 z-50 w-20 h-20 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300 flex items-center justify-center transform hover:scale-110"
        aria-label="Spin Again"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M4 4l1.5 1.5A9 9 0 0120.5 11M20 20l-1.5-1.5A9 9 0 013.5 13" />
        </svg>
      </button>
    </div>
  );
};

export default App;
