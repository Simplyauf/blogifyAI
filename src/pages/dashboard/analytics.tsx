import React from "react";
import DashboardLayout from "@/src/layouts/DashboardLayout";

const Analytics = () => {
  return <div>Analytics</div>;
};

Analytics.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Analytics;
