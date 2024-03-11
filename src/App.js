
import { useState ,useEffect} from 'react';
import './App.css';
import Main from './Components/Main';

function App() {
  
  const [tasksList, setTasksList] = useState(
    JSON.parse(localStorage.getItem('tasksList')) || []
  );

  useEffect(() => {
    localStorage.setItem('tasksList', JSON.stringify(tasksList));
  }, [tasksList]);


  return (
    <Main tasksList={tasksList} setTasksList={setTasksList}/>
    
  );
}

export default App;
