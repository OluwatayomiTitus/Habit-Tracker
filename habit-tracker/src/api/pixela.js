import axios from "axios";

const BASE_URL = "https://pixe.la/v1/users";

// Generate a secure token
export function generateToken() {
  return crypto.randomUUID().replace(/-/g, "");
}

// Create a Pixela user
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

// Create a graph for the user
export async function createGraph(username, token, graphId) {
  const payload = {
    id: graphId,
    name: "Daily Habit",
    unit: "count",
    type: "int",
    color: "shibafu",
  };

  const response = await axios.post(
    `${BASE_URL}/${username}/graphs`,
    payload,
    {
      headers: {
        "X-USER-TOKEN": token,
      },
    }
  );

  return response.data;
}

// Get today's date in Pixela format YYYYMMDD
function getTodayDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  return `${yyyy}${mm}${dd}`;
}

// Log today's habit
export async function addPixel(username, token, graphId, quantity = 1) {
  const payload = {
    date: getTodayDate(),
    quantity: String(quantity),
  };

  const response = await axios.post(
    `${BASE_URL}/${username}/graphs/${graphId}`,
    payload,
    { headers: { "X-USER-TOKEN": token } }
  );

  return response.data;
}

// Get graph URL
export function getGraphUrl(username, graphId) {
  return `${BASE_URL}/${username}/graphs/${graphId}`;
}
