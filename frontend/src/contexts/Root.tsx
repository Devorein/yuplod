import React from "react";
import { IUser } from "../types";

export interface IRootContext {
  currentUser: null | IUser,
  setCurrentUser: React.Dispatch<React.SetStateAction<IUser | null>>
}

export const RootContext = React.createContext({} as IRootContext)
