import React, { useState,useRef } from 'react'
import { RxCross2 } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";
import { MdOutlineSaveAlt } from "react-icons/md";
export default function TaskItem({id,count,text,deleteTaskFunction,onEdit}) {
   
   const [editMode, setEditMode] = useState(false);
   const [editedText, setEditedText] = useState(text);
   const inputRef = useRef(null); // Create a ref for the input element
   

   function deleteTask(){
    deleteTaskFunction(id)
   }

   
   function editTheTask() {
    setEditMode(true);
    // Focus on the input field when entering edit mode
    setTimeout(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, 0);
    console.log(count)
}





  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  
  const handleSave = () => {
    if (editedText.trim() !== text.trim()) {
        onEdit(id, editedText);
    }
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
                    <button className="edit"  onClick={handleSave}><MdOutlineSaveAlt className='edit-icon'/></button>
                    <button className="delete" onClick={deleteTask}><RxCross2 className='delete-icon'/></button>
                </div>
            </>
       ) : (
        <>
            <div className='taskItem'>
                <span className='textStyle'>{text}</span>
                <p>&#40;Updated <span id="count">{count}</span> times&#41;</p>
            </div>
            <div className="btns_cont">
                <button className="edit" onClick={editTheTask}><CiEdit className='edit-icon'/></button>
                <button className="delete" onClick={deleteTask}><RxCross2 className='delete-icon'/></button>
            </div>
        </>
            
       )
       }
        
    </li>
  )
}