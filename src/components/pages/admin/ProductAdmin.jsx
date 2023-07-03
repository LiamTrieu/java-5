import React, { useState } from "react";
import ListMenuHeader from "../../layout/admin/ListMenuHeader";
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  Paper,
  Select,
  SwipeableDrawer,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CloseIcon from "@mui/icons-material/Close";
import { ColorCustom } from "../../../styles/ColorCustom";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import FormProduct from "../../layout/admin/product/FormProduct";
import TableProduct from "../../layout/admin/product/TableProduct";

export default function ProductAdmin() {
  const [isFrom, setIsFrom] = useState(false);

  const showFrom = (isShow) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsFrom(isShow);
  };

  return (
    <ListMenuHeader>
      <Container maxWidth="lg">
        <Typography variant="h6" fontWeight={"bold"} my={1}>
          Sản phẩm
        </Typography>
        <Paper variant="outlined" sx={{ mb: 2 }}>
          <Box m={2}>
            <ThemeProvider theme={ColorCustom}>
              <Grid2 container spacing={2}>
                <Grid2 lg={6} xs={12}>
                  <Box>
                    <Button
                      sx={{ textTransform: "none" }}
                      variant="outlined"
                      color="neutral">
                      <FileUploadIcon />
                      Export Excel
                    </Button>
                  </Box>
                </Grid2>
                <Grid2 lg={6} xs={12}>
                  <Box sx={{ float: { lg: "right" } }}>
                    <Button variant="contained" color="error" sx={{ mr: 2 }}>
                      <DeleteIcon />
                      Xóa
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={showFrom(true)}>
                      <AddIcon />
                      Thêm sản phẩm
                    </Button>
                  </Box>
                </Grid2>
              </Grid2>
              <SwipeableDrawer
                anchor="right"
                onOpen={showFrom(true)}
                open={isFrom}
                onClose={showFrom(false)}>
                <Toolbar
                  style={{
                    height: "15vh",
                    backgroundColor: "rgba(249,250,251)",
                    boxShadow: "0 1px 2px 0 rgba(0,0,0,.1)",
                  }}>
                  <Box
                    sx={{
                      color: "black",
                      flexGrow: 1,
                    }}>
                    <Typography variant="h6" component="div">
                      Thêm sản phẩm
                    </Typography>
                    Thêm sản phẩm của bạn và thông tin cần thiết từ đây
                  </Box>
                  <IconButton
                    onClick={showFrom(false)}
                    aria-label="close"
                    color="error"
                    style={{
                      boxShadow: "1px 2px 3px 1px rgba(0,0,0,.05)",
                    }}>
                    <CloseIcon />
                  </IconButton>
                </Toolbar>
                <FormProduct />
                <div
                  style={{
                    height: "15vh",
                    backgroundColor: "rgba(249,250,251)",
                    boxShadow: "1px 0px 2px 0 rgba(0,0,0,.1)",
                  }}>
                  <Grid2 container spacing={3} maxWidth={"100%"} m={0} pt={2}>
                    <Grid2 xs={6}>
                      <Button
                        onClick={showFrom(false)}
                        style={{ backgroundColor: "rgba(229,231,235,1)" }}
                        fullWidth
                        size="large"
                        color="error">
                        Hủy
                      </Button>
                    </Grid2>
                    <Grid2 xs={6}>
                      <Button
                        fullWidth
                        size="large"
                        variant="contained"
                        color="success">
                        Thêm sản phẩm
                      </Button>
                    </Grid2>
                  </Grid2>
                </div>
              </SwipeableDrawer>
            </ThemeProvider>
          </Box>
        </Paper>
        <Paper variant="outlined" sx={{ mb: 2 }}>
          <Box p={2}>
            <Grid2 container spacing={2}>
              <Grid2 xs={12} lg={4}>
                <Box>
                  <TextField
                    sx={{ background: "rgba(0,0,0,.03)" }}
                    fullWidth
                    id="search-product-input"
                    label="Nhập tên sản phẩm"
                    variant="outlined"
                    size="small"
                  />
                </Box>
              </Grid2>
              <Grid2 xs={12} lg={4}>
                <Box>
                  <FormControl
                    fullWidth
                    sx={{ background: "rgba(0,0,0,.03)" }}
                    size="small">
                    <InputLabel id="category-product-search-label">
                      Danh mục
                    </InputLabel>
                    <Select
                      labelId="category-product-search-label"
                      id="category-product-search"
                      label="Category"
                      value={""}></Select>
                  </FormControl>
                </Box>
              </Grid2>
            </Grid2>
          </Box>
        </Paper>
        <TableProduct />
      </Container>
    </ListMenuHeader>
  );
}
