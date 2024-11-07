import React, { useState } from 'react';
import Keyboard from './components/Keyboard';
import AudioControls from './components/AudioControls';
import HarmonyToggle from './components/HarmonyToggle';
import Tooltip from './components/Tooltip';
import './styles.css';

function App() {
  const [isMuted, setIsMuted] = useState(false);
  const [harmonyMode, setHarmonyMode] = useState('sequential');

  return (
    <div className="App">
      <h1>Crypto Chords Expansion</h1>
      <Tooltip />
      <HarmonyToggle harmonyMode={harmonyMode} setHarmonyMode={setHarmonyMode} />
      <AudioControls isMuted={isMuted} setIsMuted={setIsMuted} />
      <Keyboard harmonyMode={harmonyMode} isMuted={isMuted} />
    </div>
  );
}

export default App;
