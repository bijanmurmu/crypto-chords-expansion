import React, { useEffect } from 'react';
import * as Tone from 'tone';

function Keyboard({ harmonyMode, isMuted }) {
  useEffect(() => {
    const synth = new Tone.Synth().toDestination();

    const playNote = (note) => {
      if (!isMuted) synth.triggerAttackRelease(note, '8n');
    };

    if (harmonyMode === 'batch') {
      playNote('C4');
      playNote('E4');
      playNote('G4');
    } else {
      playNote('C4');
    }

    return () => {
      Tone.Transport.stop();
    };
  }, [harmonyMode, isMuted]);

  return <div className="keyboard"> {/* Visual keyboard */} </div>;
}

export default Keyboard;
