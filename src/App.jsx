import { useEffect, useState } from "react"
import { TodoProvider } from "./contexts/TodoContext"
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
function App() {
   const [todos,setTodos] = useState([]);
   const myLocalStorage = JSON.parse(localStorage.getItem("todos"));
   console.log('the value of mylocalStorage', myLocalStorage);
   const addTodo = (todo) =>{
     setTodos([{todo,id:Date.now(),completed:false},...todos]);
     console.log('the value of localStorageTodo',JSON.parse(localStorage.getItem("todos")));
   }

   const updateTodo = (id,newTodo)=>{
    setTodos((prevTodos) =>prevTodos.map((prevTodo)=>prevTodo.id === id ?{...prevTodo,todo:newTodo}:{...prevTodo,todo:prevTodo.todo}))
    
   }

   const removeTodo = (id)=>{
    setTodos((prevTodos)=>prevTodos.filter((todo)=>todo.id !== id))
   
   }

   const toggleComplete = (id)=>{
    setTodos((prevTodos) =>prevTodos.map((prevTodo)=>prevTodo.id === id ?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
    
   }
   useEffect(()=>{
      const todos = JSON.parse(localStorage.getItem('todos'));
      if(todos && todos.length > 0){
        setTodos(todos);
      } 
   },[])

   useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
   },[todos])
   
  return (
  <TodoProvider value={{todos,addTodo,updateTodo,toggleComplete,removeTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>

            <div className="mb-4">
               <TodoForm/>
            </div>

            <div className="flex flex-wrap gap-y-3">
                {todos.map((todo)=>(
                   <div key={todo.id}  className='w-full'>
                     <TodoItem todo={todo}/>
                   </div>
                ))}
            </div>
        </div>
    </div>
   </TodoProvider>
  )
}

export default App
