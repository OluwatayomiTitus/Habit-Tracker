import HabitForm from "../components/HabitForm";
import StoicQuote from "../components/StoicQuote";
import { getCurrentUser } from "../helpers";

function Dashboard() {
  const currentUser = getCurrentUser();
  if (!currentUser) return <p className="p-6">Complete setup first.</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">{currentUser.username}'s Habit Tracker</h1>
      <div className="bg-gray-100 p-4 rounded shadow">
        <p className="font-medium">Habit: {currentUser.habitName}</p>
      </div>
      <HabitForm />
      <StoicQuote />
    </div>
  );
}

export default Dashboard;
