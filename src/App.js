import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleAPI";

function App() {

  const [toDo, setToDo] = useState([])
  const [Text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")



  useEffect(() => {
    getAllToDo(setToDo)
  }, [])


  const UpdateMode = (_id, Text) => {
  setIsUpdating(true)
  setText(Text)
  setToDoId(_id)
  }

  return (
    <div className="App">
     
    <div className="container">

    <h1>ToDo App</h1>

    <div className="top">
      <input 
      type="text" 
      placeholder="Add ToDos..." 
      value={Text} 
      onChange={(e) => setText(e.target.value)}
      />

      <div 
      className="add"
       onClick={ isUpdating ? 
       () => updateToDo(toDoId, Text, setToDo, setText, setIsUpdating) 
       : () => addToDo(Text, setText, setToDo)}>
        {isUpdating ? "Update" : "Add"}
        </div>

    </div>

    <div className="list">

      {toDo.map((item)=> <ToDo
       key={item._id}
      Text={item.Text} 
      UpdateMode = {() => UpdateMode(item._id, item.Text)}
      deleteToDo = {() => deleteToDo(item._id, setToDo)} />)}


    

    </div>

    </div>

    </div>
  );
}

export default App;
