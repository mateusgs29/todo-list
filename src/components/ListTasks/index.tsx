import styles from './ListTasks.module.css'

import clipboardIcon from '../../assets/clipboard.svg'
import { Task } from '../Task'

export function ListTasks() {
    return (
        <div className={styles.container}>
            <div className={styles.headerListTasks}>
                <p>
                    Tarefas criadas
                    <span className={styles.countTasks}>0</span>
                </p>
                <p>
                    Concluídas 
                    <span className={styles.countTasks}>0</span>
                </p>
            </div>

            {/* <div className={styles.containerNoTasks}>
                <img src={clipboardIcon} alt="" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div> */}
            <Task />
        </div>
    )
}