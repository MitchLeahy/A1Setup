import React,{useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";


const Todos = () => {
 const todos  = useSelector(state => state.todos);
 const [todo, setTodo] = useState({do: ''});

 //event handler for text box
 const todoChangeHandler = (event) => {
   const doValue = event.target.value;
   const newTodo = {
     do: doValue
   };
   setTodo(newTodo);
 }

// adds whats is typesd into the text input to state object 
 const dispatch = useDispatch();
 const createTodoClickHandler = () => {
   dispatch(addTodo(todo))
 }

const deleteTodoClickHandler = (index) => {
    dispatch(deleteTodo(index))
}
const toggleTodoDone =(todo) => {
    dispatch(todoDoneToggle(todo))
}


 return(
   <>
     <h3>Todos</h3>
     <ul className="list-group">
        
        <li key = "inputForList1"className="list-group-item">
            <button 
                onClick={createTodoClickHandler}
                className="btn btn-primary w-25 float-end">
                Create
            </button>
            <input
                onChange={todoChangeHandler}
                value={todo.do}
                className="form-control w-75"/>
        </li>
       

    
         {todos.map((todo,index )=>
           <li 
            key ={todo.do} 
            className="list-group-item"> 
                <button onClick={() => 
                    deleteTodoClickHandler(index)}
                    className="btn btn-danger 
                                float-end ms-2">
                    Delete
                </button>

                <input 
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => 
                    toggleTodoDone(todo)}
                    className="me-2"/>
                
                {todo.do} 
           </li>
         )}

     </ul>
   </>
 );
};
export default Todos;