import { SET_USER } from "../../const";

export const initialState = {
  users: [],
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const { users } = action.payload;

      return {
        ...users,
      };

    default:
      return { ...state };
  }
};
