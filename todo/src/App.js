import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [filter, setFilter] = useState("all");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedToDos = localStorage.getItem("todos");
    if (savedToDos) setToDos(JSON.parse(savedToDos));
  }, []);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDos));
  }, [toDos]);

  const handleAdd = () => {
    if (toDo.trim() === "") return;

    if (editIndex !== null) {
      
      const updated = [...toDos];
      updated[editIndex].text = toDo;
      updated[editIndex].dueDate = dueDate;
      setToDos(updated);
      setEditIndex(null);
    } else {
      setToDos([...toDos, { text: toDo, status: false, dueDate }]);
    }

    setToDo("");
    setDueDate("");
  };

  const toggleStatus = (index) => {
    const updated = [...toDos];
    updated[index].status = !updated[index].status;
    setToDos(updated);
  };

  const handleDelete = (index) => {
    setToDos(toDos.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setToDo(toDos[index].text);
    setDueDate(toDos[index].dueDate || "");
    setEditIndex(index);
  };

  const clearCompleted = () => {
    setToDos(toDos.filter(todo => !todo.status));
  };

  const filteredToDos = toDos.filter(todo => {
    if (filter === "active") return !todo.status;
    if (filter === "completed") return todo.status;
    return true;
  });

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>TODO LIST
          TASK MANAGER
        </h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>------------</h2>
      </div>
      <div className="input">
        <input 
          type="text" 
          placeholder="🖊️ Add item..." 
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <input 
          type="date" 
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <i className="fas fa-plus" onClick={handleAdd}></i>
      </div>

      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>

      <div className="todos">
        {filteredToDos.map((item, index) => (
          <div className="todo" key={index}>
            <div className="left">
              <input 
                type="checkbox" 
                checked={item.status}
                onChange={() => toggleStatus(index)} 
              />
              <p style={{ textDecoration: item.status ? 'line-through' : 'none' }}>
                {item.text} {item.dueDate && ` (Due: ${item.dueDate})`}
              </p>
            </div>
            <div className="right">
              <i className="fas fa-edit" onClick={() => handleEdit(index)}></i>
              <i className="fas fa-times" onClick={() => handleDelete(index)}></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
