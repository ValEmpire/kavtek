import { RESET_ACTIVE_USER, SET_USERS, SET_USER_DETAILS, UPDATE_ACTIVE_USER } from "../../const";
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

const resetActiveUser = () => (dispatch) => {
  return dispatch({
    type: RESET_ACTIVE_USER,
  });
};

const sortUserByName = (sortBy) => (dispatch) => {
  return dispatch({
    type: sortBy,
  });
};

const sortUserByBirthDay = (sortBy) => (dispatch) => {
  return dispatch({
    type: sortBy,
  });
};

export {
  getUsers,
  resetActiveUser,
  getUserByEmail,
  updateActiveUser,
  sortUserByName,
  sortUserByBirthDay,
};
