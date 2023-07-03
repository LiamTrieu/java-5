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
export default function FormCategory({ category }) {
  const [srcImg, setsrcImg] = useState("");

  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Grid2 container py={3}>
        <Grid2 xs={4} pl={3} pb={3}>
          <Typography>Tên danh mục</Typography>
        </Grid2>
        <Grid2 xs={8} pr={3} pb={3}>
          <InputBase
            value={category}
            fullWidth
            style={{
              padding: 8,
              border: "1px solid rgba(229,231,235,1)",
              borderRadius: "0.375rem",
            }}
            placeholder="Nhập tên danh mục"
          />
        </Grid2>
      </Grid2>
    </Box>
  );
}
