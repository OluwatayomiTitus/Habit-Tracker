import { getGraphUrl } from "../api/pixela";

function HabitHistory() {
  const username = localStorage.getItem("pixelaUsername");
  const graphId = localStorage.getItem("pixelaGraphId");

  if (!username || !graphId) {
    return <p className="p-6">No habit data found. Please complete setup.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Habit History</h1>
      <img
        src={getGraphUrl(username, graphId)}
        alt="Habit Graph"
        className="border rounded"
      />
      <p className="mt-3 text-sm text-gray-600">
        Graph updates automatically when you log habits.
      </p>
    </div>
  );
}

export default HabitHistory;
