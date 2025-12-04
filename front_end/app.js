const API = "http://localhost:3000/users";

async function load() {
  const res = await fetch(API);
  const data = await res.json();
  document.getElementById("output").textContent = JSON.stringify(data, null, 2);
}

async function createUser() {
  const body = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  load();
}

async function updateUser() {
  const id = document.getElementById("updateId").value;
  const body = {
    name: document.getElementById("updateName").value,
    email: document.getElementById("updateEmail").value,
    password: document.getElementById("updatePassword").value,
  };

  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  load();
}

async function deleteUser() {
  const id = document.getElementById("deleteId").value;

  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });

  load();
}

load();
