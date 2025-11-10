import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserType } from "../types/globals";

interface UsersState {
  users: UserType[];
  addUser: (email: string, password: string) => void;
  updateUser: (id: string, userData: Partial<UserType>) => void;
  getUserById: (id: string) => UserType | undefined;
  checkUserForLogin: (email: string, password: string) => boolean;
  checkUserIsExist: (email: string) => boolean;
}

export const useUsersStore = create<UsersState>()(
  persist(
    (set, get) => ({
      users: [],

      addUser: (email, password) => {
        const newUser: UserType = {
          id: crypto.randomUUID(),
          email,
          password,
          createdAt: new Date(),
        };
        set((state) => ({
          users: [...state.users, newUser],
        }));
      },

      updateUser: (id, userData) => {
        set((state) => ({
          users: state.users.map((user) => (user.id === id ? { ...user, ...userData } : user)),
        }));
      },

      getUserById: (id) => {
        return get().users.find((user) => user.id === id);
      },

      checkUserForLogin: (email, password) => {
        const user = get().users.find((user) => user.email === email && user.password === password);
        return user ? true : false;
      },
      checkUserIsExist: (email) => {
        const user = get().users.find((user) => user.email === email);
        return user ? true : false;
      },
    }),
    {
      name: "users-storage", // ключ в localStorage
      storage: {
        getItem: (name) => {
          const item = localStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: (name, value) => {
          localStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          localStorage.removeItem(name);
        },
      },
    }
  )
);
