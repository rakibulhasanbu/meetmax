import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { TTokenUser } from "@/types";

type TIState = {
  user: TTokenUser | null;
  accessToken: string | null;
  theme: string;
};

const darkThemePreference = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme:dark)").matches;

const initialState: TIState = {
  user: {
    email: "",
    name: "",
    id: "",
    profileImg: "",
    role: "",
  },
  accessToken: "",
  theme: darkThemePreference() ? "dark" : "light",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, accessToken } = action.payload;

      state.user = user;
      state.accessToken = accessToken;
    },
    logOut: (state) => {
      state.accessToken = null;
      state.user = null;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setUserProfileImage: (state, action) => {
      if (state.user) {
        state.user.profileImg = action.payload;
      }
    },
  },
});

export const { setUser, logOut, setTheme, setUserProfileImage } =
  authSlice.actions;
export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.accessToken;
export const selectCurrentUser = (state: RootState) => state.auth.user;
