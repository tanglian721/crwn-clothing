import { UserActionTypes } from "./user.type";


export const setCurrentUser = (user) => ({
  type: UserActionTypes.SSET_CURRENT_USER,
  payload: user
});