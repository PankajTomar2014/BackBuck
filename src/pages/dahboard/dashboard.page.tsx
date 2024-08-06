import Navbar from "@/components/navbar";
import { Outlet } from "react-router-dom";

const DashboardPageLayout = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        {/* Rest of your app */}
      </div>
    </>
  );
};

export { DashboardPageLayout };
