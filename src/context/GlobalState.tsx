import React, { createContext, ReactNode, useReducer } from "react";
import Reducer from "./Reducer";

interface StateType {
  addTodo: string;
  date: string;
  isEditing: boolean;
  todo: {}[] | { id: number; date: string; title: string }[];
  selectedEdit: {} | { id: number; date: string; title: string };
  updatedTitle: string;
}

const initialState: StateType | any = {
  addTodo: "",
  date: "",
  isEditing: false,
  todo: [],
  selectedEdit: {},
  updatedTitle: "",
};

export const GlobalContext = createContext(initialState);

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
