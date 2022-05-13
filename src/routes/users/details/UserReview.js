import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useUserDetails } from "./userDetailsHooks";
import moment from "moment";
import Confirm from "./Confirm";

const UserReview = () => {
  const {
    handleBack,
    handleModal,
    openModal,
    handleSuccess,
    firstName,
    lastName,
    dob,
    gender,
    address,
    city,
    state,
    postalCode,
    country,
    email,
    picture,
  } = useUserDetails();

  return (
    <>
      <Box textAlign={"center"} pt={5} pb={2}>
        <Typography variant="subtitle1">Review</Typography>
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={11}>
          <Grid container spacing={3}>
            <Grid item sm={6} xs={12}>
              <Box pb={1}>
                <Typography>{`${firstName} ${lastName} from ${country}`}</Typography>
              </Box>

              <Box pt={1} pb={1}>
                <Typography variant="subtitle2">Details</Typography>
              </Box>

              <Box pt={1} pb={1}>
                <Typography textTransform={"capitalize"}>Gender: {`${gender}`}</Typography>
              </Box>

              <Box pt={1} pb={1}>
                <Typography>
                  Full Address: {`${address} ${city} ${state} ${country} ${postalCode}`}
                </Typography>
              </Box>

              <Box pt={1} pb={1}>
                <Typography>Date of Birth: {`${moment(dob).format("DD MMMM YYYY")}`}</Typography>
              </Box>

              <Box pt={1} pb={1}>
                <Typography>Email Address: {`${email}`}</Typography>
              </Box>
            </Grid>

            <Grid item sm={6} xs={12}>
              <Box textAlign={"center"}>
                <img src={picture} width="223px" alt="Profile Here" />
              </Box>
            </Grid>
          </Grid>

          <Grid item>
            <Box display="flex" justifyContent={"center"} pt={10} pb={2}>
              <Box width={"166px"}>
                <Button size="large" fullWidth variant="contained" onClick={handleModal}>
                  Submit
                </Button>
                <Button size="large" fullWidth onClick={handleBack}>
                  Go back
                </Button>
              </Box>
            </Box>

            {/* Modal */}
            <Confirm
              openModal={openModal}
              handleSuccess={handleSuccess}
              handleModal={handleModal}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default UserReview;
