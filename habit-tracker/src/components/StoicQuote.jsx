import { useEffect, useState } from "react";
import { fetchStoicQuote } from "../api/stoic";

function StoicQuote() {
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const loadQuote = async () => {
        try {
            setLoading(true);
            setError("");
            const data = await fetchStoicQuote();
            setQuote(data);
        } catch (err) {
            setError("Failed to load quote");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadQuote();
    }, []);

    if (loading) {
        return (
            <div className="bg-gray-50 p-4 rounded">
                <p>Loading quote...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-gray-50 p-4 rounded">
                <p className="text-red-600">{error}</p>
                <button
                onClick={loadQuote}
                className="mt-2 text-blue-600 underline"
                >
                    Try again
                </button>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 p-4 rounded border space-y-2">
            <h2 className="text-lg font-semibold">Daily Stoic Quote</h2>

            <p className="italic text-gray-700">
                "{quote.text}"
            </p>

            <p className="italic text-gray-700">
                "_ {quote.author}"
            </p>

            <button
            onClick={loadQuote}
            className="text-blue-600 text-sm underline"
            >
                Refresh quote
            </button>
        </div>
    );
}

export default StoicQuote;