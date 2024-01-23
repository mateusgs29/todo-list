import { AddTask } from './components/AddTask'
import { Header } from './components/Header'
import { ListTasks } from './components/ListTasks'

import styles from './App.module.css'
import './global.css'

function App() {
  // const tasks = [
  //   {
  //     id: 1,
  //     title: 'Estudar programação',
  //     completed: false
  //   },
  //   {
  //     id: 2,
  //     title: 'Ler livros',
  //     completed: true
  //   }
  // ]

  return (
    <>
      <Header /> 

      <main className={styles.container}>
        <AddTask /> 

        <ListTasks />
      </main>
    </>
  )
}

export default App
