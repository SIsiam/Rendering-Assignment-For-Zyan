import { useState } from 'react';
import './App.css';
import User from './components/User/User';
function App() {
  const [familier, setFamiler] = useState(false)
  return (
    <div className="App" >
      <h2>Is Familier : {familier.toString()} </h2>

      <button onClick={() => setFamiler(!familier)}>Toggole Friend</button>
      <User familier={familier}></User>
    </div>
  );
}

export default App;
