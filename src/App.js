import React, { useState } from 'react';
import Form from './components/Form';
import Todo from './components/Todo';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([]);

  const [formInput, setFormInput] = useState('');

  const handleChange = (e) => {
    setFormInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formInput !== '') {
      const date = new Date().toLocaleDateString()
      const newTask = {
        date: date,
        task: formInput,
        completed: false
      }
      setTasks([...tasks, newTask])
      setFormInput('')
    }
  }

  const handleComplete = (index) => {
    const newTasks = [...tasks]
    if(newTasks[index].completed === false) {
      newTasks[index].completed = true
    } else {
      newTasks[index].completed = false
    }
    setTasks(newTasks)
  }

  const handleRemove = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  const handleRemoveAll = () => {
    setTasks([])
  }

  return (
    <div className="App">

      <Form formInput={formInput} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Todo tasks={tasks} handleComplete={handleComplete} handleRemove={handleRemove} handleRemoveAll={handleRemoveAll}/>

    </div>
  );
}

export default App;