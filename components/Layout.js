import Footer from "./Footer";
import Navbar from "./Navbar;

export default function layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="mt-[68px] flex min-h-[calc(100vh-68px)] flex-col justify-between">
        {children}
        <Footer />
      </div>
    </>
  );
}
