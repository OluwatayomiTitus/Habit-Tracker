import axios from "axios";
const STOIC_API_URL = "https://stoic-quotes.com/api/quote";

export async function fetchStoicQuote() {
    const response = await axios.get(STOIC_API_URL);
    return response.data;
}