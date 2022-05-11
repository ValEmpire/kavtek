import { SET_USER } from "../../const";
import axios from "axios";

const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("https://randomuser.me/api/?results=15");

    console.log(res);
  } catch (err) {}
};

export { getUsers };
