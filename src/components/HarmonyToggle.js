import React from 'react';

function HarmonyToggle({ harmonyMode, setHarmonyMode }) {
  return (
    <div className="harmony-toggle">
      <label>
        <input
          type="radio"
          name="harmony"
          value="batch"
          checked={harmonyMode === 'batch'}
          onChange={() => setHarmonyMode('batch')}
        />
        Batch
      </label>
      <label>
        <input
          type="radio"
          name="harmony"
          value="sequential"
          checked={harmonyMode === 'sequential'}
          onChange={() => setHarmonyMode('sequential')}
        />
        Sequential
      </label>
    </div>
  );
}

export default HarmonyToggle;
