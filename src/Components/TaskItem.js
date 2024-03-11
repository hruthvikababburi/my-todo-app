import React from 'react'

export default function TaskItem({id,text,count,deleteTaskFunction}) {
   function deleteTask(){
    deleteTaskFunction(id)
    console.log('deleted')

   }

   function editTask(){
    console.log('edited')
   }

  return (
    <li className="each_task">
        <p>{text} - &#40;Updated <span id="count">{count}</span> times&#41;</p>
        <div className="btns_cont">
            <button className="edit" onClick={editTask}>Edit</button>
            <button className="delete" onClick={deleteTask}>Delete</button>
        </div>
    </li>
  )
}
