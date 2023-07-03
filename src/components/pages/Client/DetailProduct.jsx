import styled from "@emotion/styled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  ButtonGroup,
  Container,
  OutlinedInput,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import { ColorCustom } from "../../../styles/ColorCustom";
import CartProduct from "../../layout/client/CartProduct";
import LabelTitle from "../../layout/client/LabelTitle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomOutlinedInput = styled(OutlinedInput)`
  .MuiOutlinedInput-input {
    padding: 0;
    padding-left: 0;
    text-align: center;
  }
`;

const products = [
  {
    id: 1,
    title: "Giay so 1",
    image:
      "https://images-ext-1.discordapp.net/external/d9tmOqHZxmsQv_ed6p_sl5cEf8vzGe3u7AizusjbLq4/https/a.ipricegroup.com/trends-article/top-3-mau-giay-converse-duoc-cac-ngoi-sao-quoc-te-ua-chuong-medium.jpg?width=947&height=498",
  },
  {
    id: 2,
    title: "Giay so 1",
    image: "http://surl.li/hqdbv",
  },
  {
    id: 3,
    title: "Giay so 1",
    image: "https://shorturl.at/frAES",
  },
  {
    id: 4,
    title: "Giay so 1",
    image: "http://surl.li/hqdas",
  },
  {
    id: 5,
    title: "Giay so 1",
    image: "http://surl.li/hqdaw",
  },
  {
    id: 6,
    title: "Giay so 1",
    image: "http://surl.li/hqdba",
  },
  {
    id: 7,
    title: "Giay so 1",
    image: "http://surl.li/hqdbg",
  },
  {
    id: 8,
    title: "Giay so 1",
    image: "http://surl.li/hqdbn",
  },
];

export default function DetailProduct() {
  const [soLuong, setSoluong] = useState(1);
  return (
    <Container maxWidth="lg">
      <Grid2 container rowSpacing={1} columnSpacing={3}>
        <Grid2 md={6} textAlign={"center"} width={"100%"}>
          <Box
            component={"img"}
            src="http://surl.li/hqdbn"
            width={"100%"}
            alt="error"></Box>
        </Grid2>
        <Grid2 md={6} width={"100%"}>
          <Box borderBottom={"1px dotted gray"} py={2}>
            <Typography
              variant="h4"
              fontFamily={"monospace"}
              fontWeight={"bolder"}>
              New Balance 530 – Bone
            </Typography>
            <Typography
              variant="h5"
              fontFamily={"monospace"}
              fontWeight={"900"}
              color={"red"}>
              3.000.000₫
            </Typography>
          </Box>
          <Box borderBottom={"1px dotted gray"} py={2} mb={2}>
            <Box py={2}>
              <Typography
                mr={2}
                fontWeight={"bold"}
                variant="button"
                gutterBottom>
                Size
              </Typography>
              <Button
                variant="outlined"
                style={{
                  marginLeft: "10px",
                  color: "black",
                  padding: "2px 0px 2px 0px",
                  border: "1px solid gray",
                }}>
                30
              </Button>
              <Button
                variant="outlined"
                style={{
                  marginLeft: "10px",
                  color: "black",
                  padding: "2px 0px 2px 0px",
                  border: "1px solid gray",
                }}>
                31
              </Button>
              <Button
                variant="outlined"
                style={{
                  marginLeft: "10px",
                  color: "black",
                  padding: "2px 0px 2px 0px",
                  border: "1px solid gray",
                }}>
                32
              </Button>
            </Box>
            <Box py={2}>
              <Typography
                mr={2}
                fontWeight={"bold"}
                variant="button"
                gutterBottom>
                Color
              </Typography>
              <Button
                color="secondary"
                variant="contained"
                style={{
                  height: "30px",
                  marginLeft: "10px",
                  padding: "2px 0px 2px 0px",
                  border: "1px solid gray",
                }}></Button>
              <Button
                color="success"
                variant="contained"
                style={{
                  height: "30px",
                  marginLeft: "10px",
                  padding: "2px 0px 2px 0px",
                  border: "1px solid gray",
                }}></Button>
              <Button
                color="error"
                variant="contained"
                style={{
                  height: "30px",
                  marginLeft: "10px",
                  padding: "2px 0px 2px 0px",
                  border: "1px solid gray",
                }}></Button>
            </Box>
            <Box py={2}>
              <Typography
                color={"red"}
                mr={2}
                fontWeight={"bold"}
                variant="button"
                gutterBottom>
                Số lượng: 100
              </Typography>
              <ButtonGroup size="small" aria-label="small button group">
                <Button
                  onClick={(e) => {
                    setSoluong(soLuong - 1);
                  }}>
                  -
                </Button>
                <CustomOutlinedInput
                  onChange={(e) => {
                    setSoluong(e.target.value);
                  }}
                  sx={{
                    height: "30px",
                    width: "50px",
                    fontSize: "15px",
                    borderRadius: "0px",
                  }}
                  value={soLuong}
                />
                <Button
                  onClick={() => {
                    setSoluong(soLuong + 1);
                  }}>
                  +
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
          <ThemeProvider theme={ColorCustom}>
            <Button
              type="submit"
              variant="contained"
              color="neutral"
              sx={{ marginRight: "15px" }}>
              Thêm vào giỏ hàng
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="red"
              sx={{ marginRight: "15px" }}>
              Mua ngay
            </Button>
          </ThemeProvider>
          <Accordion sx={{ boxShadow: "none", mt: 3 }}>
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography color={"gray"}>Mô tả sản phẩm</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid2>
      </Grid2>
      <Box sx={{ width: "100%" }} mt={5}>
        <LabelTitle text="Sản phẩm mới" />
        <CartProduct products={products} colsm={6} colmd={4} collg={3} />
      </Box>
    </Container>
  );
}
