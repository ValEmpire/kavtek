import React from "react";
import { Container, Grid } from "@mui/material";

const Layout = (props) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md" disableGutters>
          {props.children}
        </Container>
      </Grid>
    </Grid>
  );
};

export default Layout;
