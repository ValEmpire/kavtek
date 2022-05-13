import {
  RESET_ACTIVE_USER,
  SET_USERS,
  SET_USER_DETAILS,
  SORT_BY_BIRTHDAY_ASC,
  SORT_BY_BIRTHDAY_DESC,
  SORT_BY_NAME_ASC,
  SORT_BY_NAME_DESC,
  UPDATE_ACTIVE_USER,
} from "../../const";
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
    // will be called when /users page component did mount
    case SET_USERS:
      const users = action.payload;

      const sortedUsersAsc = users.sort((a, b) => a.name.first.localeCompare(b.name.first));

      return {
        ...state,
        users: sortedUsersAsc,
      };

    // when users click name of the user
    // will be called when /users/details page component did mount
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

    // this is the listener reducer when user update the texfield
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

    // this will reset active user details
    // will be called user submits the form
    case RESET_ACTIVE_USER:
      return {
        ...state,
        activeUserDetails: {
          ...state.activeUserDetails,
        },
      };

    case SORT_BY_NAME_DESC:
      // prevent mutating
      const sortedUsersDesc = [...state.users].sort((a, b) =>
        a.name.first.localeCompare(b.name.first)
      );

      return {
        ...state,
        users: sortedUsersDesc,
      };

    case SORT_BY_NAME_ASC:
      // prevent mutating
      const revertSortedUsersAsc = [...state.users].sort((a, b) =>
        b.name.first.localeCompare(a.name.first)
      );

      return {
        ...state,
        users: revertSortedUsersAsc,
      };

    case SORT_BY_BIRTHDAY_ASC:
      // prevent mutating
      const sortedUsersByDobAsc = [...state.users].sort(
        (a, b) => new Date(b.dob.date) - new Date(a.dob.date)
      );

      return {
        ...state,
        users: sortedUsersByDobAsc,
      };

    case SORT_BY_BIRTHDAY_DESC:
      // prevent mutating
      const sortedUsersByDobDesc = [...state.users].sort(
        (a, b) => new Date(a.dob.date) - new Date(b.dob.date)
      );

      return {
        ...state,
        users: sortedUsersByDobDesc,
      };

    default:
      return { ...state };
  }
};
