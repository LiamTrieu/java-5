import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputBase,
  MenuItem,
  Select,
  Typography,
  styled,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Textarea from "../../orther/Textarea";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
export default function FormVoucher() {
  const [srcImg, setsrcImg] = useState("");

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
            <Typography>Mã giảm giá</Typography>
          </Grid2>
          <Grid2 xs={8} pr={3} pb={3}>
            <InputBase
              fullWidth
              style={{
                padding: 8,
                border: "1px solid rgba(229,231,235,1)",
                borderRadius: "0.375rem",
              }}
              placeholder="Nhập mã giảm giá"
            />
          </Grid2>
          <Grid2 xs={4} pl={3} pb={3}>
            <Typography>Giá trị</Typography>
          </Grid2>
          <Grid2 xs={8} pr={3} pb={3}>
            <InputBase
              fullWidth
              style={{
                padding: 8,
                border: "1px solid rgba(229,231,235,1)",
                borderRadius: "0.375rem",
              }}
              placeholder="Nhập giá trị"
            />
          </Grid2>
          <Grid2 xs={4} pl={3} pb={3}>
            <Typography>Loại giảm giá</Typography>
          </Grid2>
          <Grid2 xs={8} pb={3}>
            <FormControl>
              <Select value={"tien"} id="loai-giam-gia">
                <MenuItem value={"%"}>%</MenuItem>
                <MenuItem value={"tien"}>Giá tiền</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid2 xs={4} pl={3} pb={3}>
              <Typography>Ngày bắt đầu</Typography>
            </Grid2>
            <Grid2 xs={8} pb={3}>
              <DatePicker
                format="DD-MM-YYYY"
                label="Ngày bắt đầu"
                defaultValue={dayjs(new Date())}
              />
            </Grid2>
            <Grid2 xs={4} pl={3} pb={3}>
              <Typography>Ngày kết thúc</Typography>
            </Grid2>
            <Grid2 xs={8} pb={3}>
              <DatePicker
                format="DD-MM-YYYY"
                label="Ngày kết thúc"
                defaultValue={dayjs(new Date())}
              />
            </Grid2>
          </LocalizationProvider>
        </Grid2>
      </Box>
    </Box>
  );
}
