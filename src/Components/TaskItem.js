import React, { useState,useRef } from 'react'

export default function TaskItem({id,text,count,deleteTaskFunction,onEdit}) {
   
   const [editMode, setEditMode] = useState(false);
   const [editedText, setEditedText] = useState(text);
   const inputRef = useRef(null); // Create a ref for the input element


   function deleteTask(){
    deleteTaskFunction(id)
   }

   
   function editTask() {
    setEditMode(true);
    // Focus on the input field when entering edit mode
    setTimeout(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, 0);
}





  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleSave = () => {
    onEdit(id, editedText);
    setEditMode(false);
  };





  return (
    <li className="each_task">
        {editMode ? (
            <>
                <div className='taskItem'>
                    <input className='textStyle' value={editedText} onChange={handleChange} ref={inputRef}/>
                    <p>&#40;Updated <span id="count">{count}</span> times&#41;</p>
                </div>
                <div className="btns_cont">
                    <button className="edit"  onClick={handleSave}>Save</button>
                    <button className="delete" onClick={deleteTask}>Delete</button>
                </div>
            </>
       ) : (
        <>
            <div className='taskItem'>
                <span className='textStyle'>{text}</span>
                <p>&#40;Updated <span id="count">{count}</span> times&#41;</p>
            </div>
            <div className="btns_cont">
                <button className="edit" onClick={editTask}>Edit</button>
                <button className="delete" onClick={deleteTask}>Delete</button>
            </div>
        </>
            
       )
       }
        
    </li>
  )
}
