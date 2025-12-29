import HabitForm from "../components/HabitForm";
import StoicQuote from "../components/StoicQuote";

function Dashboard() {
  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <HabitForm />

      <StoicQuote />
    </div>
  );
}

export default Dashboard;
