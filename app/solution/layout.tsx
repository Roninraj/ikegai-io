import NavBar from "@/components/navbar";
import SideBar from "@/components/sidebar";
import "@/styles/css/Layout.css";

export default function SolutionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="layout-root">
      {/* 1. The Constant Sidebar on the left */}
      <SideBar />

      {/* The right side container for Navbar + Dynamic Content */}
      <div className="content-container">

        {/* 2. The Constant Navbar at the top */}
        <NavBar />

        {/* 3. The Dynamic Content Area */}
        <main className="main-content">
          {children}
        </main>

      </div>
    </div>
  );
}
