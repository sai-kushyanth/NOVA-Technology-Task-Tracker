import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTaskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h2>Task Tracker</h2>

      <input
        type="text"
        placeholder="🔍 Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <input
        type="text"
        placeholder="What needs to be done?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="task-input"
      />

      <button onClick={addTask} className="add-button">
        Add Task
      </button>

      <ul className="task-list">
        {tasks
          .filter((t) =>
            t.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((t, index) => (
            <li key={index} className="task-item">
              <span style={{ textDecoration: t.completed ? "line-through" : "none", color: t.completed ? "#888" : "#333" }}>
                {t.text}
              </span>
              
              <button 
                className={`status-toggle ${t.completed ? "completed" : "pending"}`}
                onClick={() => toggleTaskStatus(index)}
              >
                {t.completed ? "✓ Completed" : "○ Pending"}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;