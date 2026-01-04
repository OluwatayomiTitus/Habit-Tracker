import axios from "axios";
const BASE_URL = "https://pixe.la/v1/users";

// Generate a random token
export const generateToken = () => Math.random().toString(36).slice(-16);

// Create Pixela user
export const createUser = async (username, token) => {
  const payload = {
    username,
    token,
    agreeTermsOfService: "yes",
    notMinor: "yes",
  };
  const response = await axios.post(BASE_URL, payload);
  return response.data;
};

// Create habit graph
export const createGraph = async (username, token, graphId = "habit-graph", graphName = "Daily Habit") => {
  const payload = {
    id: graphId,
    name: graphName,
    unit: "count",
    type: "int",
    color: "shibafu",
  };
  const response = await axios.post(`${BASE_URL}/${username}/graphs`, payload, {
    headers: { "X-USER-TOKEN": token },
  });
  return response.data;
};

// Add pixel (log habit)
export const addPixel = async (username, token, graphId, date, quantity) => {
  const payload = { date, quantity: String(quantity) };
  const response = await axios.post(`${BASE_URL}/${username}/graphs/${graphId}`, payload, {
    headers: { "X-USER-TOKEN": token },
  });
  return response.data;
};

// Get graph image URL
export const getGraphURL = (username, graphId) => `${BASE_URL}/${username}/graphs/${graphId}`;
