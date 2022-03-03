import Navbar from "./navbar";

export default function layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="mt-[68px] flex min-h-[calc(100vh-68px)]">{children}</div>
    </>
  );
}
