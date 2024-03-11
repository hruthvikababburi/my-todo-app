import { useState } from 'react';
import TaskItem from '../Components/TaskItem'


export default function Main({tasksList,setTasksList}) {
  const [inputValue, setInputValue] = useState('')  
 
    function addTask() {

        let taskText = inputValue.trim();
        if(taskText === ''){
            alert('Enter Valid Data!')
        }
        let taskCount = 1;


        // Check if the input contains a number at the end
        const matches = taskText.match(/^(.*?)(\d+)$/);
        if (matches) {
        taskText = matches[1].trim();
        taskCount = parseInt(matches[2], 10);
        }

        if (taskText !== '') {
        // Create multiple tasks if a number is provided
        for (let i = 0; i < taskCount; i++) {
            const newTask = {
            id: tasksList.length + i, // Ensure unique IDs
            text: taskText,
            count:0
            };
            setTasksList(prevTasks => [...prevTasks, newTask]);
        }
        }

    setInputValue(''); // Clear the input after adding tasks
  }

  function changeInputValue(event){
    setInputValue(event.target.value)
  }

  function deleteTaskFunction(id){
    let filteredList = tasksList.filter(each=> each.id !== id)
    setTasksList(filteredList)
    console.log(filteredList)
  }

  const editTask = (taskId, newText) => {
    const updatedTasksList = tasksList.map(task => {
      if (task.id === taskId) {
        return { ...task, text: newText ,count:task.count+1};
      }
      return task;
    });
    setTasksList(updatedTasksList);
  };


  

  return (
    <div className="bg-cont">
        <h1 className="heading">Day Goals!</h1>
        <div className="content-cont">
            <div className="input_submit_cont">
                <input type="text" placeholder="Enter a task here!" value = {inputValue} onChange={changeInputValue} className="input_el"/>
                <button className="submit_btn" onClick={addTask}>Add Todo</button>
            </div>
            <ul className="tasks_cont" id="tasksCont">
                {tasksList.map((each)=>{
                  return(
                    <TaskItem key={each.id} text={each.text} count={each.count} id={each.id} deleteTaskFunction={deleteTaskFunction} onEdit={editTask}/>
                  );
                })}
            </ul>
        </div>

    </div>
  )
}