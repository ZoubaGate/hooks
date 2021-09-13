import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddTodoForm from './todoForm';
const Todo = () => {
       const [todos,setTodos] = useState([
            {id:1,todo:"acheter du pain"},
            {id:1,todo:"acheter du gateau"}
        ]);
        const [warning,setWarning] = useState(false);
const affich = todos.map(index => (  
         <li className="list-group-item" key={index.id}>{index.todo}</li>
       
        )
        )
const addnewTodo = (newTodo) => {
        if (newTodo !==  ''){
         warning && setWarning(false);
        setTodos(
            [...todos,{
            id:[...todos].pop().id+1,
            todo:newTodo
            }]
        )
        }
        else{
            setWarning(true);
        }
    }
    const warningmsg=warning && <div className="alert alert-danger" role="alert">
        veuillez indiquer todo bien
    </div>
    return(
        <div>
            {warningmsg}
            <h1 className="text-center">{todos.length} TO-DOs</h1>
           <ul className="list-group ">{affich}</ul>
            <AddTodoForm addNewTodo={addnewTodo}/>
        </div>
    ) 
}
export default Todo;