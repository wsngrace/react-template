import { Routes, Route } from "react-router-dom";
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
import Private from "@/pages/Private";
import Return from "@/pages/Return";
import ShippingPolicy from "@/pages/ShippingPolicy";

function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Ordersuccess" element={<OrderSuccess />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Private" element={<Private />} />
        <Route path="/Return" element={<Return />} />
        <Route path="/ShippingPolicy" element={<ShippingPolicy />} />
      </Routes>
    </MainLayout>
  );
}

export default AppRoutes;