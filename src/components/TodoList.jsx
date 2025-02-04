import { useState } from "react";
import "./TodoList.styles.css"

export default function TodoList() {
  const [tasks, setTasks] = useState(["Aprender React", "Estudar Virtual DOM", "Construir um projeto"]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]); // Atualiza o estado da lista de tarefas
      setNewTask(""); // Limpa o input
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks); // Atualiza o estado com a nova lista de tarefas
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
          <li key={index} className="task-item">
            {task}
            <button onClick={() => removeTask(index)} className="remove-button">Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
