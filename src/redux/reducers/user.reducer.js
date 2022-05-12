import { SET_USERS, SET_USER_DETAILS } from "../../const";

export const initialState = {
  users: null,
  activeUserDetails: {
    name: null,
    dob: null,
    email: null,
    gender: null,
    address: null,
    city: null,
    state: null,
    postalCode: null,
    country: null,
    profilePicture: null,
  },
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      const users = action.payload;

      return {
        ...state,
        users,
      };

    case SET_USER_DETAILS:
      const { userId } = action.payload;

      const activeUserDetails = state.users.find((user) => user.id === userId);

      return {
        ...state,
        activeUserDetails,
      };

    default:
      return { ...state };
  }
};
