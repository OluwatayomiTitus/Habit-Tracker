import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateToken, createUser, createGraph } from "../api/pixela";

function UserSetup() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return setError("Username is required");

    const token = generateToken();
    const graphId = "habit-graph";

    try {
      await createUser(username, token);   // Pixela account
      await createGraph(username, token, graphId); // Graph

      // Save credentials locally
      localStorage.setItem("pixelaUsername", username);
      localStorage.setItem("pixelaToken", token);
      localStorage.setItem("pixelaGraphId", graphId);

      navigate("/dashboard");
    } catch (err) {
      console.error("Pixela error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Setup failed. Try a different username.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4">Get Started</h1>

        {error && <p className="text-red-600 mb-3">{error}</p>}

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter a username"
          className="w-full border p-2 mb-4"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Continue
        </button>
      </form>
    </div>
  );
}

export default UserSetup;
