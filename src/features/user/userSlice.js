import { createSlice } from "@reduxjs/toolkit";

// Get existing users or empty array
const getStoredUsers = () => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};

// Get current logged-in user
const getStoredCurrentUser = () => {
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: getStoredUsers(),
    currentUser: getStoredCurrentUser(),
    error: null,
  },
  reducers: {
    signUp: (state, action) => {
      const { email } = action.payload;
      const userExists = state.users.some((user) => user.email === email);

      if (!userExists) {
        state.users.push(action.payload);
        localStorage.setItem("users", JSON.stringify(state.users));
        state.error = null;
      } else {
        state.error = "User already exists";
      }
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      const matchedUser = state.users.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        state.currentUser = matchedUser;
        localStorage.setItem("currentUser", JSON.stringify(matchedUser));
        state.error = null;
      } else {
        state.error = "Invalid email or password";
      }
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
    },
  },
});

export const { signUp, login, logout } = userSlice.actions;
export default userSlice.reducer;
