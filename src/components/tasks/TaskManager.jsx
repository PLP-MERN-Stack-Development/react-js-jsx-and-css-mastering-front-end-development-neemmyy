import { useEffect, useState } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("personal");
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    const now = new Date();
    const due = dueDate && dueTime 
      ? new Date(dueDate + 'T' + dueTime) 
      : null;
    
    setTasks([...tasks, { 
      id: Date.now(), 
      text: newTask,
      description: newDescription,
      completed: false,
      createdAt: now.toISOString(),
      dueDate: due ? due.toISOString() : null,
      priority,
      category
    }]);
    setNewTask("");
    setNewDescription("");
    setDueDate("");
    setDueTime("");
    setPriority("medium");
    setCategory("personal");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <div className="max-w-lg w-full mx-auto h-[calc(100vh-8rem)] flex flex-col p-4">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
        Task Manager
      </h1>

      <div className="space-y-2 mb-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tasks..."
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-gray-200"
          />
          <svg className="w-5 h-5 absolute left-3 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Task Input */}
        <div className="flex gap-3">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-gray-200"
          />
          <button
            onClick={addTask}
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all duration-300"
          >
            Add
          </button>
        </div>

        {/* Description Input */}
        <textarea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Add a description (optional)"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-gray-200 resize-none h-20"
        />

        {/* Date and Time */}
        <div className="flex gap-3">
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-gray-200"
          />
          <input
            type="time"
            value={dueTime}
            onChange={(e) => setDueTime(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>

        {/* Priority and Category Selection */}
        <div className="flex gap-3">
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-gray-200"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-gray-200"
          >
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="shopping">Shopping</option>
            <option value="health">Health</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center gap-2 mb-6">
        {["All", "Active", "Completed"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg border ${
              filter === status
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
            } transition-all duration-300`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Task Statistics */}
      <div className="mb-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <div className="flex justify-between mb-1">
          <span className="text-sm text-gray-600 dark:text-gray-300">Progress</span>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {tasks.filter(t => t.completed).length}/{tasks.length} completed
          </span>
        </div>
        <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-500 transition-all duration-300"
            style={{ width: `${tasks.length ? (tasks.filter(t => t.completed).length / tasks.length) * 100 : 0}%` }}
          />
        </div>
      </div>

      <ul className="space-y-3 flex-1 overflow-y-auto pr-2">
        {filteredTasks
          .filter(task => 
            task.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.description?.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .sort((a, b) => {
            if (a.priority === "high" && b.priority !== "high") return -1;
            if (a.priority !== "high" && b.priority === "high") return 1;
            if (!a.dueDate && !b.dueDate) return 0;
            if (!a.dueDate) return 1;
            if (!b.dueDate) return -1;
            return new Date(a.dueDate) - new Date(b.dueDate);
          })
          .map((task) => (
          <li
            key={task.id}
            className={`p-3 rounded-lg border flex flex-col gap-1.5 shadow-sm transform transition-all duration-300 hover:scale-[1.01] ${
              task.completed
                ? "bg-green-100 dark:bg-green-800 line-through text-gray-500"
                : "bg-white dark:bg-gray-800 dark:text-gray-100"
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{task.text}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    task.priority === "high" 
                      ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      : task.priority === "medium"
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  }`}>
                    {task.priority}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {task.category}
                  </span>
                </div>
                {task.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {task.description}
                  </p>
                )}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => toggleTask(task.id)}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {task.completed ? "Undo" : "Done"}
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-sm text-red-600 dark:text-red-400 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>Created: {new Date(task.createdAt).toLocaleString()}</span>
              {task.dueDate && (
                <span className={
                  new Date(task.dueDate) < new Date() && !task.completed 
                  ? "text-red-500 dark:text-red-400" 
                  : ""
                }>
                  Due: {new Date(task.dueDate).toLocaleString()}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>

      {filteredTasks.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No tasks found.</p>
      )}
    </div>
  );
}
