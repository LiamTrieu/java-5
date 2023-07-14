import React, { useState } from "react";
import ListMenuHeader from "../../layout/admin/ListMenuHeader";
import { Container, Tab, Tabs, Typography } from "@mui/material";
import Order from "../../layout/admin/order/Order";

export default function OrderAdmin() {
  const [statusOrder, setStatusOrder] = useState(0);
  const handleChange = (event, newValue) => {
    setStatusOrder(newValue);
  };
  return (
    <ListMenuHeader>
      <Container maxWidth="lg">
        <Typography variant="h6" fontWeight={"bold"} my={1}>
          Đơn hàng
        </Typography>
        <Tabs
          sx={{ mb: 2 }}
          value={statusOrder}
          onChange={handleChange}
          aria-label="disabled tabs example">
          <Tab
            style={{
              padding: 0,
              textTransform: "none",
              fontWeight: "bold",
            }}
            label="Chờ xác nhận"
          />
          <Tab
            style={{
              padding: 0,
              textTransform: "none",
              fontWeight: "bold",
            }}
            label="Chờ giao"
          />
          <Tab
            style={{
              padding: 0,
              textTransform: "none",
              fontWeight: "bold",
            }}
            label="Đang giao"
          />
          <Tab
            style={{
              padding: 0,
              textTransform: "none",
              fontWeight: "bold",
            }}
            label="Hoàn thành"
          />
          <Tab
            style={{
              padding: 0,
              textTransform: "none",
              fontWeight: "bold",
            }}
            label="Đã hủy"
          />
        </Tabs>
        <Order status={statusOrder} />
      </Container>
    </ListMenuHeader>
  );
}
