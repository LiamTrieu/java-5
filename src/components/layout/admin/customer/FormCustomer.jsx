import React from "react";
import { Box, InputBase, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function FormCustomer() {
  return (
    <Box width={{ xs: "100vw", md: "50vw" }}>
      <Box
        style={{
          overflow: "auto",
          maxHeight: "70vh",
          minHeight: "70vh",
        }}>
        <Grid2 container py={3}>
          <Grid2 xs={4} pl={3} pb={3}>
            <Typography>Tên khách hàng</Typography>
          </Grid2>
          <Grid2 xs={8} pr={3} pb={3}>
            <InputBase
              fullWidth
              style={{
                padding: 8,
                border: "1px solid rgba(229,231,235,1)",
                borderRadius: "0.375rem",
              }}
              placeholder="Nhập tên khách hàng"
            />
          </Grid2>
          <Grid2 xs={4} pl={3} pb={3}>
            <Typography>Email</Typography>
          </Grid2>
          <Grid2 xs={8} pr={3} pb={3}>
            <InputBase
              fullWidth
              style={{
                padding: 8,
                border: "1px solid rgba(229,231,235,1)",
                borderRadius: "0.375rem",
              }}
              placeholder="Nhập email"
            />
          </Grid2>
          <Grid2 xs={4} pl={3} pb={3}>
            <Typography>Số điện thoại</Typography>
          </Grid2>
          <Grid2 xs={8} pr={3} pb={3}>
            <InputBase
              fullWidth
              style={{
                padding: 8,
                border: "1px solid rgba(229,231,235,1)",
                borderRadius: "0.375rem",
              }}
              placeholder="Nhập số điện thoại"
            />
          </Grid2>
          <Grid2 xs={4} pl={3} pb={3}>
            <Typography>Địa chỉ</Typography>
          </Grid2>
          <Grid2 xs={8} pr={3} pb={3}>
            <InputBase
              fullWidth
              style={{
                padding: 8,
                border: "1px solid rgba(229,231,235,1)",
                borderRadius: "0.375rem",
              }}
              placeholder="Nhập địa chỉ"
            />
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}
