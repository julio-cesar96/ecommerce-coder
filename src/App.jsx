import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { text: "Aprender React", completed: false },
    { text: "Estudar Virtual DOM", completed: false },
    { text: "Construir um projeto", completed: false }
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container">
      <h1 className="title">Lista de Tarefas</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="input"
        placeholder="Nova tarefa"
      />
      <button onClick={addTask} className="add-button">
        Adicionar Tarefa
      </button>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={`task-item ${task.completed ? "completed" : ""}`}>
            <span>{task.text}</span>
            <div>
              <button className="complete-button" onClick={() => toggleTaskCompletion(index)}>
                {task.completed ? "Desfazer" : "Concluir"}
              </button>
              <button onClick={() => removeTask(index)} className="remove-button">
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
