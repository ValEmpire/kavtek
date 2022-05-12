import { SET_USERS, SET_USER_DETAILS } from "../../const";
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

const getUserById = (userId) => async (dispatch) => {
  try {
    return dispatch({
      type: SET_USER_DETAILS,
      payload: userId,
    });
  } catch (err) {}
};

export { getUsers, getUserById };
