import React from "react";
import { Grid, Row } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
export default function layout(props) {
  return (
    <Grid>
      <Row>
        <Navigation />
      </Row>
      <main>{props.children}</main>
    </Grid>
  );
}
