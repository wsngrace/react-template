import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main style={{ padding: "20px" }}>{children}</main>
      <Toaster position="top-center" />
      <Footer />
    </>
  );
}

export default MainLayout;
