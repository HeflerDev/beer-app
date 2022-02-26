import React, { useState } from 'react';
import  Slider  from 'react-input-slider';

export const FormSlider = () => {
  const [state, setState] = useState({ x: 10});

  return (
    <div>
      ({state.x})
      <Slider
        axis="x"
        x={state.x}
        onChange={({ x }) => setState(state => ({ ...state, x }))}
      />
    </div>
  );
}
