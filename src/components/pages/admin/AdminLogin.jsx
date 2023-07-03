import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Paper,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: "Monospace",
  },
});

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Thực hiện xác thực người dùng tại đây, ví dụ: gọi API đăng nhập

    // Sau khi xác thực thành công, có thể chuyển hướng người dùng đến trang quản trị
  };

  const handleForgotPassword = () => {
    // Xử lý chuyển hướng người dùng đến trang khôi phục mật khẩu
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}>
        <Paper elevation={3} sx={{ p: 5, width: "100%" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Đăng nhập Admin
          </Typography>
          <form
            onSubmit={handleSubmit}
            style={{ width: "100%", marginTop: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Tên đăng nhập"
                  variant="outlined"
                  fullWidth
                  value={username}
                  onChange={handleUsernameChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Mật khẩu"
                  variant="outlined"
                  fullWidth
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Grid>
            </Grid>
            <Button
              component={Link}
              to="/admin/dashboard"
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: "20px" }}>
              Đăng nhập
            </Button>
            <Box sx={{ textAlign: "center", marginTop: "10px" }}>
              <Button color="primary" onClick={handleForgotPassword}>
                Quên mật khẩu?
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
