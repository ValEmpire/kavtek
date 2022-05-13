import React from "react";
import { Box, Typography } from "@mui/material";

const SuccessRoute = () => {
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
