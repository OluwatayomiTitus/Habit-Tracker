import { getCurrentUser } from "../helpers";
import { getGraphURL } from "../api/pixela";

function HabitHistory() {
  const currentUser = getCurrentUser();
  if (!currentUser) return <p className="p-6">Complete setup first.</p>;

  const { username, graphId } = currentUser;
  const graphUrl = getGraphURL(username, graphId);

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Habit History</h1>
      <img src={graphUrl} alt="Habit Graph" className="w-full border rounded"/>
      <p>Track your habit progress over time.</p>
    </div>
  );
}

export default HabitHistory;
