import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
// import './App.css'
import BarbieResume from './components/Resume/BarbieResume';
import HorrorPosterResume from './components/Resume/HorrorPosterResume';
import NeonTokyoResume from './components/Resume/NeonTokyoResume';
import { andyPersonalInfo } from './components/personalInfo';
import TypewriterResume from './components/Resume/TypewriterResume';
import Y2KResume from './components/Resume/Y2KResume';
import MacintoshResume from './components/Resume/MacintoshResume';
import CliResume from './components/Resume/CliResume';
import RetroGameResume from './components/Resume/RetroGamingResume';
import NoirResume from './components/Resume/NoirResume';
import GlassMorphismResume from './components/Resume/GlassMorphismResume';
import PostcardResume from './components/Resume/PostcardResume';
import TronResume from './components/TronTheme/TronResume';
/**
 * An example App component to demonstrate the ComponentRoulette in fullscreen.
 */
const App = () => {
    const [rouletteKey, setRouletteKey] = useState(0);
    const componentsToSpin = [
        _jsx(Y2KResume, { personalInfo: andyPersonalInfo }), // 4/5
        _jsx(TypewriterResume, { personalInfo: andyPersonalInfo }), // 1/5
        _jsx(BarbieResume, { personalInfo: andyPersonalInfo }), // 3/5
        _jsx(NeonTokyoResume, { personalInfo: andyPersonalInfo }), // 4/5, hook error
        _jsx(HorrorPosterResume, { personalInfo: andyPersonalInfo }), // 5/5, best one yet
        _jsx(MacintoshResume, { personalInfo: andyPersonalInfo }), // 5/5, amazing interactivity
        _jsx(CliResume, { personalInfo: andyPersonalInfo }), // 5/5, amazing interactivity
        _jsx(RetroGameResume, { personalInfo: andyPersonalInfo }), // 3/5, mid
        _jsx(NoirResume, { personalInfo: andyPersonalInfo }), // 4/5, pretty neat, neats work to be amazing
        _jsx(GlassMorphismResume, { personalInfo: andyPersonalInfo }), // 4/5, pretty neat
        _jsx(PostcardResume, { personalInfo: andyPersonalInfo }),
    ];
    return (
    // Main container is now relative and takes the full screen
    _jsxs("div", { className: "relative h-screen w-screen bg-gray-900", children: [_jsx(TronResume, { personalInfo: andyPersonalInfo }), _jsx("button", { onClick: () => setRouletteKey(prev => prev + 1), className: "fixed bottom-8 right-8 z-50 w-20 h-20 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300 flex items-center justify-center transform hover:scale-110", "aria-label": "Spin Again", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 4v5h5M20 20v-5h-5M4 4l1.5 1.5A9 9 0 0120.5 11M20 20l-1.5-1.5A9 9 0 013.5 13" }) }) })] }));
};
export default App;
