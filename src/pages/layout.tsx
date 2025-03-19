import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export function RootLayout() {
  return (
    <main className="relative bg-background min-h-screen font-comfortaa">
      <Navbar />
      <div className="flex flex-col gap-32 w-full">
        <Outlet />
        <Footer />
      </div>
    </main>
  );
}
