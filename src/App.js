import React, { useState, useEffect } from 'react';
import Sub from './components/Sub';
import Routes from './Routes/Routes'

function App() {  
 const [ title, setTitle ] = useState('');
  useEffect(() => {    
    fetch('http://localhost:3001/api')
    .then(res => res.json())
    .then(data => setTitle(data))
  }, [])
  return (
    <div className="App">      
      {title ? <h2>{title.title}</h2> : <h2>loading...</h2>}
      <Sub />
      <Routes />      
    </div>
  );
}

export default App;
