import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
export default function Result() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
  };

  const labels = ["1-1", "1-2", "2-1", "2-2", "3-1", "3-2", "4-1", "4-2"];

  const data = {
    labels,
    datasets: [
      {
        label: "TGPA",
        data: [2.5, 2.3, 3.9, 3.5, 3.5, 1, 2, 3, 2],
        backgroundColor: "rgba(30,58,138 , 0.5)",
      },
    ],
  };
  return (
    <div className="pt-2 px-5 max-w-screen-lg mx-auto w-full mb-4">
      <h2 className="text-2xl">Result</h2>

      <h4 className="text-2xl text-center font-bold my-2 mt-8">
        CGPA : <span className="text-blue-900 font-semibold">3.25</span>
      </h4>

      <div className=" my-5 max-w-lg mx-auto">
        <Bar options={options} data={data} />
        <p className="text-xs text-center">Term vs TGPA</p>
      </div>
    </div>
  );
}
