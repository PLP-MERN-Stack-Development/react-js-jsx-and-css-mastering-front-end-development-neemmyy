// src/api/taskApi.js

export async function fetchTasks() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
    if (!response.ok) throw new Error("Failed to fetch tasks");
    return await response.json();
  } catch (error) {
    throw error;
  }
}
