import React from "react";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  InputLabel,
  Radio,
  RadioGroup,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { useUserDetails } from "./userDetailsHooks";

const UserDetailsRoute = () => {
  const {
    firstName,
    lastName,
    dob,
    gender,
    address,
    city,
    state,
    postalCode,
    country,
    step,
    fullAddress,
    handleImageUpload,
    handleNext,
    handleAddress,
    handleUserInput,
    email,
  } = useUserDetails();

  return (
    <>
      <Box pt={5} pb={5}>
        <Grid container justifyContent={"center"}>
          <Grid item xs={2}>
            <Stepper activeStep={step}>
              <Step active completed={step === 1}>
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
        <Box textAlign={"center"} pt={5} pb={2}>
          <Typography variant="subtitle1">Client Details</Typography>
        </Box>
        <Grid container justifyContent="center">
          <Grid item sm={10} md={8} xs={11}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <Box pt={1} pb={1}>
                  <InputLabel disabled>First Name</InputLabel>
                  <TextField
                    fullWidth
                    size="small"
                    onChange={handleUserInput}
                    value={firstName}
                    name="firstName"
                  />
                </Box>

                <Box pt={1} pb={1}>
                  <InputLabel disabled>Last Name</InputLabel>
                  <TextField
                    fullWidth
                    size="small"
                    value={lastName}
                    name="lastName"
                    onChange={handleUserInput}
                  />
                </Box>

                <Box pt={1} pb={1}>
                  <InputLabel disabled>Email Address</InputLabel>
                  <TextField
                    fullWidth
                    size="small"
                    value={email}
                    name="email"
                    onChange={handleUserInput}
                  />
                </Box>

                <Box pt={1}>
                  <InputLabel disabled>Gender</InputLabel>
                  <RadioGroup
                    row
                    name="gender"
                    defaultValue={gender}
                    style={{ padding: 0 }}
                    value={gender}
                    onChange={handleUserInput}
                  >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="others" control={<Radio />} label="Others" />
                  </RadioGroup>
                </Box>

                <Box pt={1} pb={1}>
                  <InputLabel disabled>Date of Birth (YYYY-MM-DD)</InputLabel>
                  <TextField
                    fullWidth
                    size="small"
                    type="date"
                    value={dob}
                    name="dob"
                    onChange={handleUserInput}
                  />
                </Box>

                <Box pt={2} pb={1}>
                  <InputLabel disabled>Profile Picture</InputLabel>
                  <Box dispaly="flex" alignContent={"space-between"}>
                    <input
                      name="picture"
                      onChange={handleImageUpload}
                      type={"file"}
                      style={{ width: "225px" }}
                    />
                    <button>Upload</button>
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Box pt={1} pb={1}>
                  <InputLabel disabled>Address (Street Number, Street Name)</InputLabel>
                  <TextField
                    value={address}
                    fullWidth
                    size="small"
                    name="address"
                    onChange={handleUserInput}
                    onKeyDown={handleAddress}
                  />
                </Box>

                <Box pt={1} pb={1}>
                  <InputLabel disabled>City</InputLabel>
                  <TextField
                    value={fullAddress ? city : ""}
                    fullWidth
                    size="small"
                    name="city"
                    onChange={handleUserInput}
                  />
                </Box>

                <Box pt={1} pb={1}>
                  <InputLabel disabled>State</InputLabel>
                  <TextField
                    fullWidth
                    value={fullAddress ? state : ""}
                    size="small"
                    name="state"
                    onChange={handleUserInput}
                  />
                </Box>

                <Box pt={1} pb={1}>
                  <InputLabel disabled>Postal Code</InputLabel>
                  <TextField
                    fullWidth
                    value={fullAddress ? postalCode : ""}
                    size="small"
                    name="postalCode"
                    onChange={handleUserInput}
                  />
                </Box>

                <Box pt={1} pb={1}>
                  <InputLabel disabled>Country</InputLabel>
                  <TextField
                    fullWidth
                    value={fullAddress ? country : ""}
                    size="small"
                    name="country"
                    onChange={handleUserInput}
                  />
                </Box>

                <Box display="flex" alignItems={"right"} justifyContent="right" pt={3} pb={4}>
                  <Box width={"166px"}>
                    <Button
                      disabled={!fullAddress}
                      onClick={handleNext}
                      size="large"
                      fullWidth
                      variant="contained"
                    >
                      Next
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default UserDetailsRoute;
