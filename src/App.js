
import { useState } from 'react';
import './App.css';
import Main from './Components/Main';

function App() {
  const [tasksList, setTasksList] = useState([])
  


  return (
    <Main tasksList={tasksList} setTasksList={setTasksList}/>
    
  );
}

export default App;
