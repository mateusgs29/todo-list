import { useState } from 'react'

import { AddTask } from './components/AddTask'
import { Header } from './components/Header'
import { ListTasks } from './components/ListTasks'

import styles from './App.module.css'
import './global.css'

interface ITask {
  id: string
  description: string
  completed: boolean
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  const generateId = () => {
    const timestamp = new Date().getTime().toString(16)
    const random = Math.random().toString(16).slice(2)

    return `${timestamp}${random}`
  }

  const addNewTask = (task: string) => {
    const newTask = {
      id: generateId(),
      description: task,
      completed: false
    }

    setTasks([...tasks, newTask])
  }

  return (
    <>
      <Header /> 

      <main className={styles.container}>
        <AddTask onAddNewTask={addNewTask} /> 

        <ListTasks tasks={tasks} setTasks={setTasks} />
      </main>
    </>
  )
}

export default App
