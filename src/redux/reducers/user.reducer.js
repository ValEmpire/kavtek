import { RESET_ACTIVE_USER, SET_USERS, SET_USER_DETAILS, UPDATE_ACTIVE_USER } from "../../const";
import moment from "moment";

export const initialState = {
  users: null,
  activeUserDetails: {
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    picture: "",
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
      const email = action.payload;

      const userByEmail = state.users.find((user) => user.email === email);

      const { name, dob, gender, location, picture } = userByEmail;

      const activeUserDetails = {
        firstName: name?.first,
        lastName: name?.last,
        dob: moment(dob?.date).format("YYYY-MM-DD"),
        email,
        gender,
        address: `${location?.street?.number} ${location?.street?.name}`,
        city: location?.city,
        state: location?.state,
        postalCode: location?.postcode,
        country: location?.country,
        picture: picture?.large,
      };

      return {
        ...state,
        activeUserDetails,
      };

    case UPDATE_ACTIVE_USER:
      const { value } = action.payload;
      const key = action.payload.name;

      return {
        ...state,
        activeUserDetails: {
          ...state.activeUserDetails,
          [key]: value,
        },
      };

    case RESET_ACTIVE_USER:
      return {
        ...state,
        activeUserDetails: {
          ...state.activeUserDetails,
        },
      };

    default:
      return { ...state };
  }
};
