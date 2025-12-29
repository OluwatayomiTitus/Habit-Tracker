import axios from "axios";
const BASE_URL = "https://pixe.la/v1/users";

// Create a Pixela User

export async function createUser(username, token) {
    const payload = {
        token,
        username,
        agreeTermsOfService: "yes",
        notMinor: "yes",
    };
    
    const response = await axios.post(BASE_URL, payload);
    return response.data;
}

// Create a habit graph for the user

export async function createGraph(username, token, graphId) {
    const payload = {
        id:graphId,
        name: "Daily Habit Tracker",
        unit: "times",
        type: "int",
        color: "shibafu",
    };

    const response = await axios.post(
        `${BASE_URL}/${username}/graphs`, payload,
        {
            headers: {
                "X-USER-TOKEN": token,
            },
        }
    );

    return response.data;
}

// Add a pixel (log today's habit)
export async function addPixel(username, token, graphId, date, quantity) {
    const payload = {
        date,
        quantity: String(quantity),
    };
    
    const response = await axios.post(
        `${BASE_URL}/${username}/graphs/${graphId}`, payload,
        {
            headers: {
                "X-USER-TOKEN": token,
            },
        }
    );

    return response.data;
}

// Get pixela graph image URL
export function getGraphURL(username, graphId) {
    return `${BASE_URL}/${username}/graphs/${graphId}`;
}
