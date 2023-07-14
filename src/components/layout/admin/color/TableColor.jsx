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
  IconButton,
  Modal,
  Toolbar,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import FormCategory from "./FormColor";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "50%", xs: "100%" },
  bgcolor: "background.paper",
};

export default function TableColor() {
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

      <Modal open={isFrom} onClose={showFrom(false)}>
        <Box sx={style}>
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
                Cập nhập màu sắc
              </Typography>
              Cập nhập màu sắc của bạn và thông tin cần thiết từ đây
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
          <FormCategory color={{ name: "Đen", ma: "#000000" }} />
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
                  Cập nhập màu sắc
                </Button>
              </Grid2>
            </Grid2>
          </div>
        </Box>
      </Modal>
    </>
  );
}
