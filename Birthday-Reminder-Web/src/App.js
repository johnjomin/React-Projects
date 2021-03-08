import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const[people, setPeople] = useState(data)

  function refreshPage(){
    window.location.reload(false);
  }
  
  return (
    <main>
      <section className="container">
        <h3> {people.length} Birthdays Today</h3>
        <List people = {people} />
        <button onClick={() => setPeople([])}>Clear All</button>

        {/* little trick but jomin, try to see how you can resolve reload issue */}
        <button onClick={refreshPage}>Reload</button>
      </section>
    </main>
  );

}



export default App;
