import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserType } from "../types/globals";

interface UsersState {
  users: UserType[];
  addUser: (userData: Omit<UserType, "numberOfOrders">) => void;
  updateUser: (id: string, userData: Partial<UserType>) => void;
  removeUser: (id: string) => void;
  getUserById: (id: string) => UserType | undefined;
}

export const useUsersStore = create<UsersState>()(
  persist(
    (set, get) => ({
      users: [],

      addUser: (userData) => {
        const newUser: UserType = {
          ...userData,
          numberOfOrders: 0,
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

      removeUser: (id) => {
        set((state) => ({
          users: state.users.filter((user) => user.id !== id),
        }));
      },

      getUserById: (id) => {
        return get().users.find((user) => user.id === id);
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
