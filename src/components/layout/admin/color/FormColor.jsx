import React from "react";
import { Box, InputBase, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
export default function FormColor({ color }) {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Grid2 container py={3}>
        <Grid2 xs={4} pl={3} pb={3}>
          <Typography>Tên màu sắc</Typography>
        </Grid2>
        <Grid2 xs={8} pr={3} pb={3}>
          <InputBase
            value={color.name}
            fullWidth
            style={{
              padding: 8,
              border: "1px solid rgba(229,231,235,1)",
              borderRadius: "0.375rem",
            }}
            placeholder="Nhập tên màu sắc"
          />
        </Grid2>
        <Grid2 xs={4} pl={3} pb={3}>
          <Typography>Mã màu sắc</Typography>
        </Grid2>
        <Grid2 xs={8} pr={3} pb={3}>
          <InputBase
            type="color"
            value={color.ma}
            style={{
              width: "30px",
            }}
            placeholder="Nhập tên màu sắc"
          />
        </Grid2>
      </Grid2>
    </Box>
  );
}
