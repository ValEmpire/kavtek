import { SET_ACTIVE_STEP } from "../../const";

export const initialState = {
  activeStep: 0,
};

export const step = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_STEP:
      const activeStep = action.payload;

      return {
        ...state,
        activeStep,
      };

    default:
      return { ...state };
  }
};
