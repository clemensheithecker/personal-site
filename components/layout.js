import Navbar from "./navbar";

export default function layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="mt-[52px] flex min-h-[calc(100vh-52px)]">{children}</div>
    </>
  );
}
