import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserByEmail, updateActiveUser } from "../../../redux/actions/user.action";
import { setActiveStep } from "../../../redux/actions/step.action";
import { useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const useUserDetails = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [fullAddress, setFullAddress] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const { activeUserDetails, users } = useSelector((state) => state.user) ?? {};

  const { activeStep } = useSelector((state) => state.step);

  const query = useQuery();

  const email = query.get("email");

  const handleUserDetails = useCallback(() => {
    if (!users) return navigate("/");

    dispatch(getUserByEmail(email));
  }, [dispatch, email, users, navigate]);

  const { firstName, lastName, dob, gender, address, city, state, postalCode, country, picture } =
    activeUserDetails;

  useEffect(() => {
    handleUserDetails();
  }, [handleUserDetails]);

  const handleUserInput = (e) => {
    const { name, value } = e.target;

    dispatch(updateActiveUser({ name, value }));
  };

  const handleAddress = (e) => {
    if (e.key === "Enter") {
      setFullAddress(true);
    }
  };

  const handleImageUpload = (e) => {
    const picture = URL.createObjectURL(e.target.files[0]);

    dispatch(updateActiveUser({ name: "picture", value: picture }));
  };

  const handleNext = () => {
    dispatch(setActiveStep(activeStep + 1));
  };

  const handleBack = () => {
    dispatch(setActiveStep(activeStep - 1));
  };

  const handleModal = () => {
    setOpenModal(!openModal);
  };

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
