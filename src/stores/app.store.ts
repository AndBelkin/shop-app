import { create } from "zustand";
import type { UserType } from "../types/globals";
import { persist } from "zustand/middleware";

interface AppStore {
  app: AppState;
  login: (user: UserType) => void;
  logout: () => void;
  updateUser: (updatedUser: UserType) => void;
}

interface AppState {
  isAuth: boolean;
  user: UserType | null;
}

const initialState = {
  isAuth: false,
  user: null,
};

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      app: initialState,

      login: (user) => {
        set({ app: { isAuth: true, user } });
      },

      logout: () => {
        set({ app: { isAuth: false, user: null } });
      },
      updateUser: (user) => {
        set((state) => ({ app: { ...state.app, user } }));
      },
    }),
    {
      name: "app-storage",
      partialize: (state) => ({
        isAuth: state.app.isAuth,
        user: state.app.user,
      }),
    }
  )
);
