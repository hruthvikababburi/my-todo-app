
import { useState } from 'react';
import TaskItem from '../Components/TaskItem'


export default function Main({tasksList,setTasksList}) {
  const [inputValue, setInputValue] = useState('')  

  function addTask(){
    console.log('addedNewTask')
    let newId = tasksList.length;
    let text = inputValue;
    let count = 0;
    let newTask = {
        id: newId,
        text,
        count
    }
    if(text === ''){
        alert('Enter valid data')
    }
    else{
        setTasksList(p=>[...p,newTask])
        setInputValue('')
    }

  }  

  function changeInputValue(event){
    setInputValue(event.target.value)
  }

  function deleteTaskFunction(id){
    let filteredList = tasksList.filter(each=> each.id !== id)
    setTasksList(filteredList)
    console.log(filteredList)
  }
  

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
                    <TaskItem key={each.id} text={each.text} count={each.count} id={each.id} deleteTaskFunction={deleteTaskFunction}/>
                  );
                })}
            </ul>
        </div>

    </div>
  )
}
