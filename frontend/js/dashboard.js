const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "login.html";
} else {
  fetch("http://localhost:3000/api/dashboard", {
    headers: {
      Authorization: "Bearer " + token
    }
  })
    .then(res => {
      if (!res.ok) throw new Error("Não autorizado");
      return res.json();
    })
    .then(data => {
      document.getElementById("usuario-nome").textContent = `Olá, ${data.name}!`;
    })
    .catch(() => {
      window.location.href = "login.html";
    });
}
