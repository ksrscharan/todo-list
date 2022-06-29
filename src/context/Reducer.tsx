import { ACTION } from "./Actions";

export default function reducer(state: any, action: any) {
  switch (action.type) {
    case ACTION.REGISTER_TODO:
      return { ...state, addTodo: action.payload };
    case ACTION.ADD_TODO:
      if (state.addTodo !== "" && state.date !== "") {
        return {
          ...state,
          todo: [
            ...state.todo,
            { title: state.addTodo, id: Date.now(), date: state.date },
          ],
          addTodo: "",
          date: "",
        };
      } else {
        return state;
      }
    case ACTION.DELETE_TODO:
      return {
        ...state,
        todo: [
          ...state.todo.filter(
            (e: { id: number; date: string; title: string }) =>
              e.id !== action.payload
          ),
        ],
      };
    case ACTION.EDIT_TODO:
      return {
        ...state,
        isEditing: true,
        selectedEdit: { ...action.payload },
      };
    case ACTION.REGISTER_UPDATE:
      return { ...state, updatedTitle: action.payload };
    case ACTION.UPDATE_TITLE:
      state.selectedEdit = { ...state.selectedEdit, title: action.payload };
      state.todo = [
        ...state.todo.filter(
          (e: { id: number; date: string; title: string }) =>
            e.id !== state.selectedEdit.id
        ),
        state.selectedEdit,
      ];
      return { ...state, isEditing: false };
    case ACTION.CANCEL_UPDATE:
      return {
        ...state,
        isEditing: false,
        updatedTitle: "",
        selectedEdit: {},
      };
    case ACTION.REGISTER_DATE:
      return { ...state, date: action.payload };
    default:
      return state;
  }
}
