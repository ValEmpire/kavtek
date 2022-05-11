export const initialState = {
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
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
