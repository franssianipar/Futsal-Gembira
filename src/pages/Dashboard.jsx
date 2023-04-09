import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(
  ChartDataLabels,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const data = {
    labels: [
      "Agustus 2022",
      "September 2022",
      "Oktober 2022",
      "November 2022",
      "Desember 2022",
      "Januari 2022",
    ],
    plugins: [ChartDataLabels],
    datasets: [
      {
        data: [25.73, 16.32, 16.32, 20.46, 10.2, 33.99],
        backgroundColor: ["#FFE600", "#FFE600", "#00D1FF"],
        datalabels: {
          color: "White",
          align: "top",
          anchor: "end",
          font: {
            weight: "bold",
            size: 20,
          },
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-[#2F2F2F]">
        <div className="flex mx-48">
          <div className="px-5 py-4 text-white text-5xl"> Futsal Gembira</div>
          <div className="flex text-2xl  px-5 py-4  ml-auto">
            <a href="/#" className="block px-5 text-white py-4">
              Dashboard
            </a>
            <a href="/#" className="block text-white px-5 py-4">
              Penyewaan
            </a>
            <a href="/#" className="block text-white px-5 py-4">
              Lapangan
            </a>
          </div>
        </div>
      </div>
      <div className=" py-5 bg-[#363636] pt-12 ">
        <div className="mx-20 border-2 py-10">
          <div className="flex static mx-48 ">
            <div className=" absolute left-10 bg-[#363636] top-32 text-white text-3xl">
              Dashboard
            </div>
            <div className=" absolute right-24 bg-[#363636] top-32 text-lg text-white ml-auto">
              Sabtu,21 Januari 2023
            </div>
          </div>
          <div className=" ml-10 mt-10 text-white">
            Kumpulan informasi penting selama satu bulan sejak tanggal 1 hingga
            tanggal hari ini
          </div>
          <div className=" flex justify-between mt-10 mx-48">
            <div className="   ">
              <a href="/#" className=" text-white">
                Jumlah Pendapatan - Januari 2023
                <div>Rp.38.639.517</div>
              </a>
            </div>
            <div className="">
              <a href="/#" className=" text-right text-white">
                Jumlah Jam Penyewaan - Januari 2023
                <div>485 Jam</div>
              </a>
            </div>
          </div>
          <div className="mt-10 ml-48 w-4/6 border-2 rounded-lg   ">
            <Bar
              className=" px-20 py-10 "
              data={data}
              options={{
                scales: {
                  x: {
                    stacked: true,
                    ticks: {
                      color: ["white"],
                      beginAtZero: true,
                      font: { size: 20 },
                    },
                    grid: {
                      display: false,
                    },
                    border: {
                      width: 5,
                      color: ["white"],
                      z: 10,
                    },
                  },
                  y: {
                    beginAtZero: true,
                    grace: "10%",
                    stacked: true,
                    ticks: {
                      color: ["white"],
                      display: false,
                    },
                    grid: {
                      display: false,
                    },
                    border: {
                      display: false,
                    },
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            ></Bar>
          </div>
        </div>
      </div>
    </>
  );
}
