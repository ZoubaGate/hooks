import React,{useState} from 'react'

const AddTodoForm = ({addNewTodo}) => {

    const [addTodo,setAddTodo] = useState('')
    
    const handlerTodo = (e) =>{
        e.preventDefault();
        addNewTodo(addTodo)

        setAddTodo('')
    }
    return(
        <div>
           <form className="mt-4" onSubmit={handlerTodo}>
                <div className="card card-body mt-4">
                        <div className="form-group">
                            <label>Ajouter Todo:</label>
                            <input className="form-control" type="text" value={addTodo} onChange={(e)=>setAddTodo(e.target.value)}></input>
                            <input className="btn btn-success mt-4 " type="submit"></input>
                        </div>
                </div> 
            </form>
        </div>
    );
}
export default AddTodoForm ;