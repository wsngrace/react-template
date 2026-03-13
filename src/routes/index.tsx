import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import Shop from "@/pages/Shop";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import Contact from "@/pages/Contact";
import MainLayout from "@/components/layout/MainLayout";
import Payment from "@/pages/Payment";
import OrderSuccess from "@/pages/OrderSuccess";

function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/NotFound" element={<NotFound />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/OrderSuccess" element={<OrderSuccess />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default AppRoutes;
