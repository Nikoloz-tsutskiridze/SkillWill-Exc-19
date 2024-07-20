const API_URL = "Rclvn3yNdG0WZrvJ95PS3iWQT9b_k4vjGlcvDsXosw6nlSKR8g";
export const fetchTasks = () =>
  fetch(API_URL).then((response) => response.json());

export const createTask = (task) =>
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  }).then((response) => response.json());

export const updateTask = (id, task) =>
  fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  }).then((response) => response.json());

export const deleteTask = (id) =>
  fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  }).then((response) => response.json());
