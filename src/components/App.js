import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


console.log({ CATEGORIES, TASKS });

function App() {

  const [categories, setCategories] = useState(CATEGORIES)
  const [task, setTask] = useState(TASKS)
  const [categoryBtn, setCategoryBtn] = useState("ALL")

  function addNewItem(newListItem) {
    setTask(...task,newListItem)
  }

  const displayedItem = task
  .filter(
    (item) =>{
      if(categoryBtn === "ALL"){
        return true
      }else{
        return categoryBtn === item.category
      }
    }
  )
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList />
      <CategoryFilter selectBtn={setCategoryBtn} onBtn={categoryBtn} 
      categories={categories} />
      <NewTaskForm onTaskFormSubmit={addNewItem} categories={categories} />
      <TaskList task={displayedItems} itemDelete={itemDelete}/>
    </div>
  );
}

export default App;
