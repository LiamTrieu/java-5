import React, { useState } from "react";
import { Box, InputBase, Typography, styled } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Textarea from "../../orther/Textarea";

const InputImageCustom = styled(Box)`
  border: 1px dashed black;
  width: 99%;
  height: 100%;
  border-radius: 0.375rem;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
export default function FormProduct() {
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
            <Typography>Tên sản phẩm</Typography>
          </Grid2>
          <Grid2 xs={8} pr={3} pb={3}>
            <InputBase
              fullWidth
              style={{
                padding: 7,
                border: "1px solid rgba(229,231,235,1)",
                borderRadius: "0.375rem",
              }}
              placeholder="Nhập tên sản phẩm"
            />
          </Grid2>
          <Grid2 xs={4} pl={3} pb={3}>
            <Typography>Hình ảnh</Typography>
          </Grid2>
          <Grid2 xs={8} pr={3} pb={3}>
            <input
              onChange={() => {
                var fileInput = document.getElementById("input-anh");
                var file = fileInput.files[0];
                var reader = new FileReader();

                if (file) {
                  reader.onload = function (e) {
                    setsrcImg(e.target.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
              accept="image/*"
              id="input-anh"
              type="file"
              hidden
            />
            <InputImageCustom
              onClick={() => {
                document.getElementById("input-anh").click();
              }}>
              <Box py={3}>
                {srcImg && <img id="myImage" src={srcImg} height={"50vh"} />}
                {!srcImg && (
                  <>
                    <CloudUploadIcon color="success" />
                    <p style={{ margin: 0 }}>Drag your images here</p>
                    <em
                      style={{
                        color: "gray",
                        fontSize: "small",
                      }}>
                      (Only *.jpeg, *.webp and *.png images will be accepted)
                    </em>
                  </>
                )}
              </Box>
            </InputImageCustom>
          </Grid2>
          <Grid2 xs={4} pl={3} pb={3}>
            <Typography>Mô tả</Typography>
          </Grid2>
          <Grid2 xs={8} pr={3} pb={3}>
            <Textarea placeholder={"Nhập mô tả"} row={3} />
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}
