import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateToken, createUser, createGraph } from "../api/pixela";

function UserSetup() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("choose"); // choose / signup / login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [habitName, setHabitName] = useState(""); // habit name
  const [error, setError] = useState("");

  const USERNAME_REGEX = /^[a-z][a-z0-9-]{1,32}$/;

  const getLocalUsers = () => JSON.parse(localStorage.getItem("users") || "[]");
  const saveLocalUsers = (users) => localStorage.setItem("users", JSON.stringify(users));

  // ------------------ SIGN UP ------------------
  const handleSignUp = async () => {
    setError("");
    if (!username || !password || !habitName) return setError("All fields are required");
    if (!USERNAME_REGEX.test(username)) return setError("Invalid username");

    const users = getLocalUsers();
    if (users.find((u) => u.username === username)) return setError("Username exists, login");

    const pixelaToken = generateToken();
    const graphId = "habit-graph";

    try {
      await createUser(username, pixelaToken);
      await createGraph(username, pixelaToken, graphId, habitName);

      users.push({ username, password, pixelaToken, graphId, habitName });
      saveLocalUsers(users);
      localStorage.setItem("currentUser", username);
      navigate("/dashboard");
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError("Setup failed. Try a different username.");
    }
  };

  // ------------------ LOGIN ------------------
  const handleLogin = () => {
    setError("");
    const users = getLocalUsers();
    const user = users.find((u) => u.username === username && u.password === password);
    if (!user) return setError("Username or password incorrect");

    localStorage.setItem("currentUser", user.username);
    navigate("/dashboard");
  };

  if (mode === "choose") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4 bg-gray-100">
        <h1 className="text-2xl font-bold">Habit Tracker</h1>
        <div className="space-x-4">
          <button onClick={() => setMode("signup")} className="bg-blue-600 text-white px-4 py-2 rounded">Sign Up</button>
          <button onClick={() => setMode("login")} className="bg-green-600 text-white px-4 py-2 rounded">Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">{mode === "signup" ? "Sign Up" : "Login"}</h1>
        {error && <p className="text-red-600 mb-3">{error}</p>}
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="w-full border p-2 mb-4" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full border p-2 mb-4" />
        {mode === "signup" && (
          <input type="text" value={habitName} onChange={(e) => setHabitName(e.target.value)} placeholder="Habit Name" className="w-full border p-2 mb-4" />
        )}
        <button type="button" onClick={mode === "signup" ? handleSignUp : handleLogin} className="w-full bg-blue-600 text-white py-2 rounded">{mode === "signup" ? "Create Account" : "Login"}</button>
        <p className="mt-4 text-sm text-gray-600">
          {mode === "signup" ? "Already have an account?" : "Don't have an account?"}{" "}
          <button type="button" className="text-blue-600 underline" onClick={() => setMode(mode === "signup" ? "login" : "signup")}>
            {mode === "signup" ? "Login" : "Sign Up"}
          </button>
        </p>
      </form>
    </div>
  );
}

export default UserSetup;
