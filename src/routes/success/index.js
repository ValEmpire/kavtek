import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SuccessRoute = () => {
  const { activeUserDetails } = useSelector((state) => state.user);

  const navigate = useNavigate();

  // This will protect user from going here without submitting the real form
  useEffect(() => {
    if (!activeUserDetails.email) navigate("/");
  }, [activeUserDetails.email, navigate]);

  return (
    <>
      <Box pt={3} pb={3} />

      <Box
        p={2}
        className="box-container"
        display="flex"
        minHeight={"527px"}
        alignItems="center"
        justifyContent={"center"}
      >
        <Typography variant="subtitle1">Submission successful!</Typography>
      </Box>
    </>
  );
};

export default SuccessRoute;
