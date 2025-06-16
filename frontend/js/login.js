const form = document.getElementById("login-form");
const msg = document.getElementById("mensagem");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password: senha })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      window.location.href = "dashboard.html";
    } else {
      msg.textContent = data.msg || "Erro no login";
    }
  } catch (err) {
    msg.textContent = "Erro ao conectar com o servidor.";
  }
});
