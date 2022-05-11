import React from "react";
import { Container, Grid } from "@mui/material";

const Layout = (props) => {
  <Grid container>
    <Grid item xs={12}>
      <Container maxWidth="lg">{props.children}</Container>
    </Grid>
  </Grid>;
};

export default Layout;
