import React, { useEffect } from "react";
import UserForm from "./UserForm";
import UserReview from "./UserReview";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Step, StepLabel, Stepper } from "@mui/material";
import { setActiveStep } from "../../../redux/actions/step.action";

const UserDetailsRoute = () => {
  const { activeStep } = useSelector((state) => state.step);

  const dispatch = useDispatch();

  // this will make sure that active step is always by default
  // when user clicks browser back button
  useEffect(() => {
    return () => {
      dispatch(setActiveStep(0));
    };
  }, [dispatch]);

  return (
    <>
      <Box pt={5} pb={5}>
        <Grid container justifyContent={"center"}>
          <Grid item xs={2}>
            <Stepper activeStep={activeStep}>
              <Step active completed={activeStep === 1}>
                <StepLabel />
              </Step>
              <Step active>
                <StepLabel />
              </Step>
            </Stepper>
          </Grid>
        </Grid>
      </Box>
      <Box className="box-container">
        {activeStep === 0 && <UserForm />}
        {activeStep === 1 && <UserReview />}
      </Box>
    </>
  );
};

export default UserDetailsRoute;
