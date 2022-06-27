export type ActionType = {
  REGISTER_TODO: string;
  ADD_TODO: string;
  DELETE_TODO: string;
  EDIT_TODO: string;
  REGISTER_UPDATE: string;
  UPDATE_TITLE: string;
  CANCEL_UPDATE: string;
  REGISTER_DATE: string;
}
export const ACTION: ActionType = {
    REGISTER_TODO: "register-todo",
    ADD_TODO: "add-todo",
    DELETE_TODO: "delete-todo",
    EDIT_TODO: "edit-todo",
    REGISTER_UPDATE: "register-update",
    UPDATE_TITLE: "update-name",
    CANCEL_UPDATE: "cancel-update",
    REGISTER_DATE: "register-date",
  };