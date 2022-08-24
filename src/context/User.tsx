import React from "react";
import { User } from "../types";

export interface UserContextInterface {
  user: User | null;
  error: { error: string } | null;
  updateUser: (user: User | null) => void;
  fetchUser: () => void;
  fetchUserAndAuth: (username: string, password: string) => void;
  clearError: () => void;
  updateError: (error: string) => void;
  isAuthenticated: boolean;
}

// create the language context with default selected language
export const UserContext = React.createContext<UserContextInterface>({
  user: null,
  error: null,
  updateUser: (user: User | null) => null,
  fetchUser: () => null,
  fetchUserAndAuth: () => null,
  clearError: () => null,
  updateError: (error: string) => null,
  isAuthenticated: false,
});

export function useUser() {
  return React.useContext(UserContext);
}
