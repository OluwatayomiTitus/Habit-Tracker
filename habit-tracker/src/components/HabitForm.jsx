function HabitForm() {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-3">Log Today's Habit</h2>

            <form className="flex gap-3">
                <input
                type="number"
                min="1"
                placeholder="Quantity"
                className="flex-1 border rounded p-2"
                />

                <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Log
                </button>
            </form>
        </div>
    );
}

export default HabitForm;