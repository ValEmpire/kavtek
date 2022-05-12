import { SET_USERS, SET_USER_DETAILS, UPDATE_ACTIVE_USER } from "../../const";
import axios from "axios";

const getUsers = () => async (dispatch) => {
  try {
    const endPoint = `https://randomuser.me/api/?results=15`;

    const res = await axios.get(endPoint);

    const users = res.data.results;

    return dispatch({
      type: SET_USERS,
      payload: users,
    });
  } catch (err) {}
};

const getUserByEmail = (email) => async (dispatch) => {
  try {
    return dispatch({
      type: SET_USER_DETAILS,
      payload: email,
    });
  } catch (err) {}
};

const updateActiveUser = (detail) => (dispatch) => {
  return dispatch({
    type: UPDATE_ACTIVE_USER,
    payload: detail,
  });
};
export { getUsers, getUserByEmail, updateActiveUser };
