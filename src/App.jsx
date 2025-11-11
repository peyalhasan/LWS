import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
      
    </>
  );
}
let guest = 0;

function Guest() {
  guest = guest + 1;
  return <h2>Your Guest id is - #{guest}</h2>;
}

export  function TeaSet() {
  return (
    <>
      <Guest />
      <Guest />
    </>
  );
}
