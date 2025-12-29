import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { addPixel, addpixel } from "../api/pixela";

function HabitForm() {
    const [quantity, setQuantity] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [username] = useLocalStorage("pixelaUsername", "");
    const [token] = useLocalStorage("pixelaToken", "");

    const graphId = "habit1";

    const getTodayDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth()+1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}.${month}.${day}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!quantity) {
            setMessage("Please enter a quantity")
            return;
        }

        try {
            setLoading(true);
            await addPixel(
                username,
                token,
                graphId,
                getTodayDate(),
                quantity
            );
            setMessage("habit logged successfully");
            setQuantity("");
        } catch (error) {
            setMessage("failed to log habit");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-3">Log Today's Habit</h2>

            {message && (
                <p className="text-sm mb-2 text-gray-700">{message}</p>
            )}

            <form className="flex gap-3">
                <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Quantity"
                className="flex-1 border rounded p-2"
                />

                <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    {loading ? "Logging..." : "Log"}
                </button>
            </form>
        </div>
    );
}

export default HabitForm;