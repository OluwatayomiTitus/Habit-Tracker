import { useState } from "react";
import { addPixel } from "../api/pixela";
import { getCurrentUser } from "../helpers";

function HabitForm() {
  const currentUser = getCurrentUser();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  if (!currentUser) return <p>Please complete setup first.</p>;

  const { username, pixelaToken, graphId } = currentUser;
  const today = new Date().toISOString().split("T")[0].replace(/-/g, "");

  const handleLogHabit = async () => {
    setSuccess(""); setError("");

    try {
      await addPixel(username, pixelaToken, graphId, today, "1");
      setSuccess("Habit logged for today!");
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError("Failed to log habit. Try again.");
    }
  };

  return (
    <div className="space-y-3">
      <button onClick={handleLogHabit} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Log Habit</button>
      {success && <p className="text-green-600">{success}</p>}
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}

export default HabitForm;
