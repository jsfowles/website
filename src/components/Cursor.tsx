import React, { useContext } from 'react';

import { MouseContext } from '@context/mouseContext';
import useMousePosition from '@hooks/useMousePosition';

const Cursor = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const { x, y } = useMousePosition();

  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={'circle ' + cursorType}
      />
      <div
        className={'dot ' + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      />
    </>
  );
};

export default Cursor;
