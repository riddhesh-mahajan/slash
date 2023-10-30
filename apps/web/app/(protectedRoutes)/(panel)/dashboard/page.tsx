"use client";
import useLocalStorage from "@hooks/useLocalStorage";
import { axiosInstance } from "@utilsaxiosHelpers";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import moment from "moment";
import Card from "components/card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  ArcElement
);

function page(): JSX.Element {
  const [dashboardData, setdashboardData] = useState<{
    totalQuestionsCount: number;
    lastLogin: string;
    runsByDate: object;
    totalRuns: number;
    runsStartDate: string;
    runsEndDate: string;
  } | null>(null);

  const getDashboardData = async () => {
    const response = await axiosInstance.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/dashboard`
    );

    if (response.data.message == "success") {
      setdashboardData(response.data.payload);
    }
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-x-5 gap-y-5">
        <Card
          title="Total Questions"
          value={dashboardData?.totalQuestionsCount?.toString()}
        />

        <Card title="Runs" value={dashboardData?.totalRuns?.toString()} />

        <Card
          title="Last Login"
          value={moment(dashboardData?.lastLogin).format("DD MMM, yyyy")}
        />
      </div>

      <div className="w-full mt-7">
        <p className="mb-3 text-lg">
          {dashboardData?.totalRuns} solved last year
        </p>

        {dashboardData?.runsByDate && (
          <CalendarHeatmap
            startDate={
              new Date(
                moment(dashboardData?.runsStartDate).format("YYYY-MM-DD")
              )
            }
            endDate={
              new Date(moment(dashboardData?.runsEndDate).format("YYYY-MM-DD"))
            }
            values={Object.keys(dashboardData?.runsByDate)?.map(
              (singleDate) => {
                return {
                  date: singleDate,
                  count: dashboardData?.runsByDate[singleDate],
                };
              }
            )}
          />
        )}
      </div>
    </div>
  );
}

export default page;
