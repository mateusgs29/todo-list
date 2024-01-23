import { useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";
import styles from './AddTask.module.css'

interface AddTaskProps {
    onAddNewTask: (task: string) => void
}

export function AddTask({ onAddNewTask }: AddTaskProps) {
    const [newTask, setNewTask] = useState('')
    
    return (
        <form 
            className={styles.addTask} 
            onSubmit={(e) => {
                e.preventDefault()
                onAddNewTask(newTask)
                setNewTask('')
            }}
        >
            <input 
                type="text"
                placeholder="Adicione uma nova tarefa"
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
            />
            <button 
                type="submit"
                disabled={newTask.length === 0}
            >
                Criar
                <PlusCircle size={16} />
            </button>
        </form> 
    )
}