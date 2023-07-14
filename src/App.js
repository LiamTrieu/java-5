import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HeadingClient from "./components/layout/client/HeadingClient";
import FooterClient from "./components/layout/client/FooterClient";
import Product from "./components/pages/Client/Product";
import Home from "./components/pages/Client/Home";
import Cart from "./components/pages/Client/Cart";
import Login from "./components/pages/Client/Login";
import Checkout from "./components/pages/Client/Checkout";
import DetailProduct from "./components/pages/Client/DetailProduct";
import ScrollToTop from "./components/utils/ScrollToTop";
import Dashboard from "./components/pages/admin/Dashboard";
import ProductAdmin from "./components/pages/admin/ProductAdmin";
import AdminLogin from "./components/pages/admin/AdminLogin";
import VoucherAdmin from "./components/pages/admin/VoucherAdmin";
import CategoryAdmin from "./components/pages/admin/CategoryAdmin";
import ColorAdmin from "./components/pages/admin/ColorAdmin";
import StaffAdmin from "./components/pages/admin/StaffAdmin";
import CustomerAdmin from "./components/pages/admin/CustomerAdmin";
import OrderAdmin from "./components/pages/admin/OrderAdmin";
import SellAdmin from "./components/pages/admin/SellAdmin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<OutletWithLayout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:id" element={<DetailProduct />} />
          </Route>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/order" element={<OrderAdmin />} />
          <Route path="/admin/sell" element={<SellAdmin />} />
          <Route path="/admin/product" element={<ProductAdmin />} />
          <Route path="/admin/voucher" element={<VoucherAdmin />} />
          <Route path="/admin/category" element={<CategoryAdmin />} />
          <Route path="/admin/color" element={<ColorAdmin />} />
          <Route path="/admin/staff" element={<StaffAdmin />} />
          <Route path="/admin/customer" element={<CustomerAdmin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const OutletWithLayout = () => (
  <>
    <HeadingClient />
    <Outlet />
    <FooterClient />
  </>
);
export default App;
