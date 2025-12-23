import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

export default function TaskProgress({ percent }) {
  // let percent = 231;

  return (
    <Box style={{ width: "100%", textAlign: "center", marginBottom: "16px" }}>
      <Typography variant="p">{percent}% Complete</Typography>
      <LinearProgress variant="determinate" value={percent} />
    </Box>
  );
}
