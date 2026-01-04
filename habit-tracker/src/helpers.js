export const getCurrentUser = () => {
  const currentUsername = localStorage.getItem("currentUser");
  if (!currentUsername) return null;

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  return users.find((u) => u.username === currentUsername);
};
