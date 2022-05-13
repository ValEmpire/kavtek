import { SET_ACTIVE_STEP } from "../../const";

const setActiveStep = (step) => (dispatch) => {
  dispatch({
    type: SET_ACTIVE_STEP,
    payload: step,
  });
};

export { setActiveStep };
