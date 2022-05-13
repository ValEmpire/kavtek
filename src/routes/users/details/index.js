import React from "react";
import UserForm from "./UserForm";
import { useSelector } from "react-redux";

const UserDetailsRoute = () => {
  const { activeStep } = useSelector((state) => state.step);

  return <>{activeStep === 0 && <UserForm />}</>;
};

export default UserDetailsRoute;
