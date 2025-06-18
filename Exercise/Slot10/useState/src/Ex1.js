import React, { useState } from 'react';
import { Button } from 'bootstrap';

export function Counter() {
  const [count, setCount] = useState(0);
   const [name, setName] = useState('Long')
  return (
     <div>
        {/* <p>You clicked {count} times</p> */}
        <p>{name}</p>
        <button onClick={() => setName(name + " very handsome")}>
        Click me
        </button>
     </div>
  );
}