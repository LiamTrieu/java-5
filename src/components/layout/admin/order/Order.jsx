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
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import PreviewIcon from "@mui/icons-material/Preview";
import CloseIcon from "@mui/icons-material/Close";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { ColorCustom } from "../../../../styles/ColorCustom";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import DataTable from "../../../../Temp/DataTable";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FactCheckIcon from "@mui/icons-material/FactCheck";

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

export default function Order({ status }) {
  const [isFrom, setIsFrom] = useState(false);
  const arrStatusService = [
    { chageButton: "Xác nhận", icon: <DoneIcon />, color: "success" },
    { chageButton: "Giao hàng", icon: <LocalShippingIcon />, color: "warning" },
    { chageButton: "Hoàn thành", icon: <FactCheckIcon />, color: "primary" },
  ];
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
                  {status < 4 && (
                    <Button variant="contained" color="error" sx={{ mr: 2 }}>
                      <DeleteIcon />
                      Hủy
                    </Button>
                  )}
                  {status < 3 && (
                    <Button
                      variant="contained"
                      color={arrStatusService[status].color}>
                      {arrStatusService[status].icon}
                      {arrStatusService[status].chageButton}
                    </Button>
                  )}
                </Box>
              </Grid2>
            </Grid2>
          </ThemeProvider>
        </Box>
      </Paper>
      <Paper variant="outlined" sx={{ mb: 2 }}>
        <Box p={2}>
          <Grid2 container spacing={2}>
            <Grid2 lg={3} md={4} xs={12}>
              <TextField
                sx={{ background: "rgba(0,0,0,.03)" }}
                fullWidth
                size="small"
                id="search-wait-order-input"
                label="Mã đơn hàng"
                variant="outlined"
              />
            </Grid2>
          </Grid2>
        </Box>
      </Paper>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
              <TableCell align="center">Action</TableCell>
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
                <TableCell align="center">
                  {status < 3 && (
                    <IconButton color={arrStatusService[status].color}>
                      {arrStatusService[status].icon}
                    </IconButton>
                  )}
                  <IconButton onClick={showFrom(true)} color="secondary">
                    <PreviewIcon />
                  </IconButton>
                  {status < 4 && (
                    <IconButton color="error">
                      <DeleteIcon />
                    </IconButton>
                  )}
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
              backgroundColor: "rgba(249,250,251)",
              boxShadow: "0 1px 2px 0 rgba(0,0,0,.1)",
            }}>
            <Box
              sx={{
                color: "black",
                flexGrow: 1,
              }}>
              <Typography variant="h6" component="div">
                Sản phẩm của đơn hàng
              </Typography>
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
          <DataTable />
          <div
            style={{
              backgroundColor: "rgba(249,250,251)",
              boxShadow: "1px 0px 2px 0 rgba(0,0,0,.1)",
            }}>
            <Grid2 container spacing={3} maxWidth={"100%"} m={0} pt={2}>
              <Grid2 xs={6}>
                <Button
                  onClick={showFrom(false)}
                  style={{ backgroundColor: "rgba(229,231,235,1)" }}
                  fullWidth
                  color="error">
                  Ẩn
                </Button>
              </Grid2>
              <Grid2 xs={6}>
                {status < 3 ? (
                  <Button
                    fullWidth
                    variant="contained"
                    color={arrStatusService[status].color}>
                    {arrStatusService[status].chageButton}
                  </Button>
                ) : status === 3 ? (
                  <Button variant="contained" color="error" fullWidth>
                    <DeleteIcon />
                    Hủy
                  </Button>
                ) : (
                  ""
                )}
              </Grid2>
            </Grid2>
          </div>
        </Box>
      </Modal>
    </>
  );
}
