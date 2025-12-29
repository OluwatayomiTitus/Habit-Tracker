import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

function UserSetup() {
  const navigate = useNavigate();

  // Persisted values
  const [username, setUsername] = useLocalStorage("pixelaUsername", "");
  const [token, setToken] = useLocalStorage("pixelaToken", "");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !token) {
      setError("Both username and token are required");
      return;
    }

    setError("");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4">User Setup</h1>

        {error && <p className="text-red-600 mb-3 text-sm">{error}</p>}

        {/* USERNAME */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Pixela Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>

        {/* TOKEN */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Pixela Token
          </label>
          <input
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
}

export default UserSetup;
