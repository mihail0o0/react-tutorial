import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  /* task stuff */
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: 'Task 1',
      day: 'Feb 15',
      reminder: true
    },
    {
      id: 2,
      text: 'Task 2',
      day: 'Feb 16',
      reminder: false
    },
    {
      id: 3,
      text: 'Task 3',
      day: 'Feb 17',
      reminder: true
    }
  ]);

  const deleteTask = (id) => {
    setTask(tasks.filter(task => task.id !== id));
  };

  const addTask = (newTask) => {
    newTask.id = Math.floor(Math.random() * 10000) + 1;
    setTask([...tasks, newTask]);
  };

  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) =>
        (task.id === id) ?
          {
            ...task,
            reminder: !task.reminder
          } :
          task
      )
    );
  };

  /* form stuff */
  const toggleFormVisibility = () => {
    setShowAddTask(!showAddTask);
  };


  return (
    <div className="container">
      <Header toggleFormVisibility={toggleFormVisibility} showAddTask={showAddTask} />

      {
        showAddTask && <AddTask addTask={addTask} />
      }

      {
        tasks.length > 0 ?
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> :
          "No tasks to show"
      }

    </div>
  );
}

export default App;
