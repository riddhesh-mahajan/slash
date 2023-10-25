"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  ArcElement
);

function page() {
  const searchParams = useSearchParams();
  const accessToken = searchParams.get("accessToken");
  const email = searchParams.get("email");

  useEffect(() => {
    if (accessToken && accessToken != "") {
      localStorage.setItem("accessToken", accessToken);
    }

    if (email && email != "") {
      localStorage.setItem("email", email);
    }
  }, [email, accessToken]);

  return (
    <div>
      <Doughnut
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "red",
                "blue",
                "yellow",
                "green",
                "purple",
                "orange",
              ],
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
          },
        }}
      />
    </div>
  );
}

export default page;
