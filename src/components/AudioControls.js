import React from 'react';

function AudioControls({ isMuted, setIsMuted }) {
  return (
    <div className="audio-controls">
      <button onClick={() => setIsMuted(!isMuted)}>
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
    </div>
  );
}

export default AudioControls;
