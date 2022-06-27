import React, {
  createContext,
  ReactNode,
  useReducer,
} from "react";
import Reducer from "./Reducer";


interface StateType{
  todo: {}[] | {id: number; title: string; date: string}[];
  addTodo: string;
  isEditing: boolean;
  updatedTitle: string
  selectedEdit: {} | {id: number; title: string; date: string}
  date: string
}

const initialState: StateType | any = {
  todo: [],
  addTodo: "",
  isEditing: false,
  updatedTitle: "",
  selectedEdit: {},
  date: "",
};


export const GlobalContext = createContext(initialState);

export function GlobalProvider({ children }: {children: ReactNode}) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <GlobalContext.Provider value={ { state , dispatch } }> {/* type here */}
      {children}
    </GlobalContext.Provider>
  );
}
