import React from "react";
import { Grid, Row } from "react-bootstrap";
export default function layout(props) {
  return (
    <Grid>
      <Row>This is the Place for Navigation Components;</Row>
      <main>{props.children}</main>
    </Grid>
  );
}
