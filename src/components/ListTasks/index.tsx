import styles from './ListTasks.module.css'

import clipboardIcon from '../../assets/clipboard.svg'
import { Task } from '../Task'

interface ITask {
    id: string
    description: string
    completed: boolean
}

interface ListTasksProps {
    tasks: ITask[]
    setTasks: (tasks: ITask[]) => void
}

export function ListTasks({ tasks, setTasks }: ListTasksProps) {
    const handleCompleteTask = (id: string) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: !task.completed
                }
            }
            return task
        })
        setTasks(updatedTasks)
    }
    
    const handleDeleteTask = (id: string) => {
        const filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks)
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.headerListTasks}>
                <p>
                    Tarefas criadas
                    <span className={styles.countTasks}>
                        {tasks.length}
                    </span>
                </p>
                <p>
                    Concluídas 
                    <span className={styles.countTasks}>
                        { tasks.length === 0 ? "0" :
                            `${tasks.filter(task => task.completed).length} de ${tasks.length}`
                        }
                    </span>
                </p>
            </div>

            { tasks.length > 0 ?
                tasks.map(task => (
                    <Task 
                        key={task.id}
                        id={task.id}
                        description={task.description}
                        completed={task.completed}
                        onCompleteTask={handleCompleteTask}
                        onDeleteTask={handleDeleteTask}
                    />
            )) : (
                <div className={styles.containerNoTasks}>
                    <img src={clipboardIcon} alt="" />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
            )}
        </div>
    )
}