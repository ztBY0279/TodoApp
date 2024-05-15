import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
function TodoForm() {
    const [todoMsg,setTodoMsg] = useState("")
    const {addTodo} = useTodo();
    const handleSubmit = (event)=>{
        event.preventDefault();
        if (!todoMsg) return
        addTodo(todoMsg);
        setTodoMsg("");
    }
   
    return (
        <form onSubmit={handleSubmit}className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e) => setTodoMsg(e.target.value)}
                value={todoMsg}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

