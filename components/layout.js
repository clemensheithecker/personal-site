import Footer from "./footer";
import Navbar from "./navbar";

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
