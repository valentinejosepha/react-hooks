import React, { useState } from 'react';

function Counter () {
  // Déclare une nouvelle variable d'état que l'on va appeler "count"
  // Déclare une fonction setCount qui permet de modifier la valeur de count

  const [count, setCount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Value {count}`)
  }
  
  return (
    <div>
          <p>Type a value: </p> 
          <input
          type="text"
          value={count}
          onChange={e => setCount(e.target.value)}
          />
       
      <p>Le compteur est à:{count} </p>
      <button onClick={() => setCount(count +1)}>
        +1
      </button>
      <button onClick={() => setCount (count -1)  }>
        -1
      </button>
    </div>
  );
}

export default Counter;