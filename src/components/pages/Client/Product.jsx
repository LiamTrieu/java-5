import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import CartProduct from "../../layout/client/CartProduct";
import { Container } from "@mui/material";
import LabelTitle from "../../layout/client/LabelTitle";
import { Grid } from "@mui/material";

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
    image: "https://shorturl.at/frAES",
  },
  {
    id: 3,
    title: "Giay so 1",
    image: "https://shorturl.at/frAES",
  },
  {
    id: 4,
    title: "Giay so 1",
    image: "https://shorturl.at/frAES",
  },
  {
    id: 5,
    title: "Giay so 1",
    image: "https://shorturl.at/frAES",
  },
  {
    id: 6,
    title: "Giay so 1",
    image: "https://shorturl.at/frAES",
  },
  {
    id: 7,
    title: "Giay so 1",
    image: "https://shorturl.at/frAES",
  },
  {
    id: 8,
    title: "Giay so 1",
    image: "https://shorturl.at/frAES",
  },
];

export default function Product() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const MenuBar = () => {
    return (
      <List>
        <ListItem sx={{ paddingLeft: 1, paddingTop: 0 }}>
          <ListItemText
            primary="Danh mục"
            primaryTypographyProps={{
              fontSize: 24,
              fontWeight: "700",
              fontFamily: "monospace",
            }}
          />
        </ListItem>
        {["Tất cả sản phẩm", "Giày nam", "Giày nữ"].map((text, index) => (
          <ListItem
            disablePadding
            key={index}
            onClick={() => {
              setOpenDrawer(false);
            }}>
            <ListItemButton sx={{ paddingLeft: 1 }}>
              <ListItemText
                primaryTypographyProps={{
                  fontWeight: "500",
                }}
                primary={text}
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "200px", // Giới hạn độ dài tại đây
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <MenuBar />
          </Box>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ display: { sm: "block", md: "none" } }} // Chỉ hiển thị icon menu trên màn hình sm
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            PaperProps={{
              style: { minWidth: "200px" },
            }}
            anchor="left"
            open={openDrawer}
            onClose={handleDrawerToggle}>
            <MenuBar />
          </Drawer>
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ width: "100%" }}>
            <LabelTitle text="Tất cả sản phẩm" />
            <CartProduct products={products} colmd={4} collg={3} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
