import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SwipeableDrawer,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DataTable from "../../../../Temp/DataTable";
import CloseIcon from "@mui/icons-material/Close";
import FormProduct from "./FormProduct";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const [isFrom, setIsFrom] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const showFrom = (isShow) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsFrom(isShow);
  };

  const ProductDetail = () => {
    return (
      <Box width={{ xs: "100vw", md: "50vw" }}>
        <Grid2 container>
          <Grid2 xs={12} md={4} px={2} pb={2}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Màu sắc</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Màu sắc">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 xs={12} md={4} px={2}>
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="Size"
              variant="outlined"
            />
          </Grid2>
          <Grid2 xs={12} md={4} px={2}>
            <Button variant="contained" color="secondary" fullWidth>
              Thêm chi tiết
            </Button>
          </Grid2>
        </Grid2>
        <DataTable />
      </Box>
    );
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={showFrom(true)} color="warning">
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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
              Cập nhập sản phẩm
            </Typography>
            Cập nhập sản phẩm của bạn và thông tin cần thiết từ đây
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
        <Box
          style={{
            overflow: "auto",
            minHeight: "70vh",
          }}>
          <Tabs
            sx={{ mb: 3 }}
            value={value}
            onChange={handleChange}
            aria-label="disabled tabs example">
            <Tab
              label="Sản phẩm"
              sx={{
                textTransform: "none",
                fontFamily: "monospace",
                fontSize: "17px",
                color: "black",
              }}
            />
            <Tab
              label="Chi tiết sản phẩm"
              sx={{
                textTransform: "none",
                fontFamily: "monospace",
                fontSize: "17px",
                color: "black",
              }}
            />
          </Tabs>
          {value === 0 ? <FormProduct /> : <ProductDetail />}
        </Box>
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
                Cập nhập sản phẩm
              </Button>
            </Grid2>
          </Grid2>
        </div>
      </SwipeableDrawer>
    </>
  );
}
