import React, { useCallback, useEffect } from "react";
import { Box, Grid, InputLabel, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getUserById } from "../../../redux/actions/user.action";
import { useParams } from "react-router-dom";

const UserDetailsRoute = () => {
  const dispatch = useDispatch();

  const { userId } = useParams();

  const { users, activeUserDetails } = useSelector((state) => state.user);

  const handleUserDetails = useCallback(() => {
    if (!users) dispatch(getUsers());

    dispatch(getUserById(userId));
  }, [dispatch, userId, users]);

  useEffect(() => {
    handleUserDetails();
  }, [handleUserDetails]);

  return (
    <Box className="box-container">
      <Box textAlign={"center"}>
        <Typography variant="subtitle1">Client Details</Typography>
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <Grid container spacing={3}>
            <Grid item sm={6} xs={12}>
              <InputLabel disabled>First Name</InputLabel>
              <TextField fullWidth name="firstName" />
              <TextField fullWidth name="lastName" />
              <TextField fullWidth name="email" />
              <TextField fullWidth type={"date"} name="email" />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField fullWidth name="street" />
              <TextField fullWidth name="street" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDetailsRoute;
