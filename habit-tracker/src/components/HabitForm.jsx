import { useState } from "react";
import { addPixel } from "../api/pixela";

function HabitForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const username = localStorage.getItem("pixelaUsername");
  const token = localStorage.getItem("pixelaToken");
  const graphId = localStorage.getItem("pixelaGraphId");

  const handleLogToday = async () => {
    setLoading(true);
    setMessage("");

    try {
      await addPixel(username, token, graphId);
      setMessage("Habit logged successfully! 🎉");
    } catch {
      setMessage("Already logged today or an error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-3">Daily Habit</h2>
      <button
        onClick={handleLogToday}
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? "Logging..." : "Log Today"}
      </button>
      {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
    </div>
  );
}

export default HabitForm;
