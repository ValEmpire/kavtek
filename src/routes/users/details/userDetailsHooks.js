import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserByEmail, updateActiveUser } from "../../../redux/actions/user.action";
import { setActiveStep } from "../../../redux/actions/step.action";
import { useLocation, useNavigate } from "react-router-dom";

// this is the hook for getting query params
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const useUserDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();

  const [fullAddress, setFullAddress] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const { activeUserDetails, users } = useSelector((state) => state.user);

  const { activeStep } = useSelector((state) => state.step);

  const email = query.get("email");

  /**
   * handle of getting users by email
   * using query params
   */
  const handleUserDetails = useCallback(() => {
    // if users is null means users did not click the name
    if (!users) return navigate("/");

    // if activeUserDetails is present just return
    if (activeUserDetails.email) return;

    // otherwise setActiveUser
    dispatch(getUserByEmail(email));
  }, [dispatch, email, activeUserDetails.email, users, navigate]);

  const { firstName, lastName, dob, gender, address, city, state, postalCode, country, picture } =
    activeUserDetails;

  // this will be called when component did mount
  useEffect(() => {
    handleUserDetails();
  }, [handleUserDetails]);

  /**
   *
   * @param {*} e event
   * this will update the textfield with name and value from event
   */
  const handleUserInput = (e) => {
    const { name, value } = e.target;

    dispatch(updateActiveUser({ name, value }));
  };

  /**
   *
   * @param {*} e event
   * this will handle the address when user pressed enter
   */
  const handleAddress = (e) => {
    if (e.key === "Enter") {
      setFullAddress(true);
    }
  };

  /**
   *
   * @param {*} e event
   * will handle image upload when detect change on input file
   * this will also dispatch updateActiveUser action with key of name and value of blob
   */
  const handleImageUpload = (e) => {
    const picture = URL.createObjectURL(e.target.files[0]);

    dispatch(updateActiveUser({ name: "picture", value: picture }));
  };

  /**
   * handles the step
   * will add 1 if next
   */
  const handleNext = () => {
    dispatch(setActiveStep(activeStep + 1));
  };

  /**
   * handles the step
   * will minus 1 if back
   */
  const handleBack = () => {
    dispatch(setActiveStep(activeStep - 1));
  };

  // handles closing and opening of confirm modal
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  // handles submit button
  // will navigate to '/success'
  const handleSuccess = () => {
    navigate("/success");
  };

  return {
    firstName,
    lastName,
    dob,
    gender,
    address,
    city,
    state,
    postalCode,
    country,
    picture,
    fullAddress,
    handleImageUpload,
    email,
    handleNext,
    handleAddress,
    handleUserInput,
    activeStep,
    handleBack,
    openModal,
    handleModal,
    handleSuccess,
  };
};
