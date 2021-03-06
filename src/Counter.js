import React, { useState } from 'react';

function Counter () {
  // Déclare une nouvelle variable d'état que l'on va appeler "count"
  // Déclare une fonction setCount qui permet de modifier la valeur de count

  const [count, setCount] = useState(0);

  return (
    <div>
          <p>Amuse toi: </p> 
          <input
          type="number"
          placeholder="Entrez votre valeur"
          value={count}
          onChange={e => setCount(parseInt(e.target.value))}
          />
       
      <p>Le compteur est à:{count} </p>
      <button onClick={() => setCount (count +1)}>
        +1
      </button>
      <button onClick={() => setCount (count -1)  }>
        -1
      </button>
    </div>
  );
}

export default Counter;