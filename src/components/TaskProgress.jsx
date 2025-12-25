import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

export default function TaskProgress({ completedTodosCount, itemsCount }) {
  let percentValue = (completedTodosCount / itemsCount) * 100;

  // const x = 25;

  return (
    <Box style={{ width: "100%", textAlign: "center", marginBottom: "16px" }}>
      <Typography variant="p">{percentValue}% Complete</Typography>
      <LinearProgress variant="determinate" value={percentValue} />
      {/* <LinearProgress variant="determinate" value={percent} /> */}
      {/* <LinearProgress variant="determinate" value={x} /> */}
    </Box>
  );
}
