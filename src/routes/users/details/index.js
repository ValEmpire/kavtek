import React, { useCallback, useEffect } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
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
      <Typography variant="subtitle1">Client Details</Typography>
      <Grid container>
        <Grid item sm={6} xs={12}>
          <TextField name="firstName" />
          <TextField name="lastName" />
          <TextField name="email" />
          <TextField type={"date"} name="email" />
        </Grid>
        <Grid item>
          <TextField name="street" />
          <TextField name="street" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDetailsRoute;
