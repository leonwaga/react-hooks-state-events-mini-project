import React from "react";
import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [newItems, SetNewItems]= useState({
    text:"",
    category:"code"
  })

  const formCat = categories.map((caegory, index)=>(<option key={index}>{category}</option>))

  function newItemPost(e){
    SetNewItems({...newItems, [e.target.name]: e.target.value})
  }

  return (
    <form className="new-task-form" onSubmit={(e)=>{
      e.preventDefault();
      onTaskFormSubmit(newItems);
      }}>
      <label>
        Details
        <input type="text" name="text" value={newItems.text} onChange={newItemPost}/>
      </label>
      <label>
        Category
        <select name="category">
          <select name="category"
          onChange={newItemPost}
          value={newItems.category}
          >
            {formCat}
          </select>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
