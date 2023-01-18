import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Clock from "../../Utils/Clock";
import RoutesPaths from "../../Utils/RoutePaths.json";

export default function Home() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center" component={Paper}>
            <Clock />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Link to={`/${RoutesPaths.createBill}`}>Create Bill</Link>
        </Grid>
      </Grid>
    </Box>
  );
}
