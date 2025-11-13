document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (username === "" || password === "") {
    errorMsg.textContent = "Please fill in both fields.";
  } else {
    errorMsg.textContent = "";
    alert("Login successful (client-side only)");
    // You can add code here to send data to a server
  }
});
