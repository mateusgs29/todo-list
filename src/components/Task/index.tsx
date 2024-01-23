import { Trash } from "@phosphor-icons/react";

import styles from './Task.module.css'
import { useState } from "react";

interface TaskProps {
    id: string
    description: string
    completed: boolean
    onCompleteTask: (id: string) => void
    onDeleteTask: (id: string) => void
}

export function Task({ 
    id, 
    description, 
    completed,
    onCompleteTask,
    onDeleteTask 
}: TaskProps) {
    const [check, setCheck] = useState(completed)

    return (
        <div className={styles.task}>
            <input 
                className={styles.checkbox} 
                type="checkbox" 
                checked={check}
                onChange={() => {
                    setCheck(!check)
                    onCompleteTask(id)
                }}
            />
            <p className={check ? styles.taskCheck : ''}>
                {description}
            </p>
            <button onClick={() => onDeleteTask(id)}>
                <Trash size={20} />
            </button>
        </div>
    )
} 