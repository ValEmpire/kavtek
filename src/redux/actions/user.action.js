import { SET_USER } from "../../const";
import axios from "axios";

const getUsers = () => async (dispatch) => {
  try {
    const endPoint = `https://randomuser.me/api/?results=15`;

    const res = await axios.get(endPoint);

    const users = res.data.results;

    return dispatch({
      type: SET_USER,
      payload: users,
    });
  } catch (err) {}
};

export { getUsers };
