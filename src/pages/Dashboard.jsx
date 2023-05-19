import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
        backgroundColor: [
          "#FFE600",
          "#FFE600",
          "#FFE600",
          "#FFE600",
          "#FFE600",
          "#00D1FF",
        ],
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
  const data1 = {
    labels: ["Januari 2022"],
    plugins: [ChartDataLabels],
    datasets: [
      {
        label: "Biaya Admin - 5.5% - Rp 2.144.493",
        data: [16.32],
        backgroundColor: ["#219E44"],

        datalabels: {
          color: "White",
          font: {
            weight: "bold",
            size: 30,
          },
        },
        barPercentage: 1.5,
      },
      {
        label: "Sewa Per Jam - 43.44% - Rp 16.785.006",
        data: [25.73],
        backgroundColor: ["#167C93"],
        datalabels: {
          color: "White",

          font: {
            weight: "bold",
            size: 30,
          },
        },
        barPercentage: 1.5,
      },
      {
        label: "Sewa Khusus Malam Per Jam - 51.01% - Rp 19.710.018",
        data: [33.99],
        backgroundColor: ["#CAB91D"],
        datalabels: {
          color: "White",
          font: {
            weight: "bold",
            size: 30,
          },
        },
        barPercentage: 1.5,
      },
    ],
  };

  return (
    <>
      <div className="bg-[#2F2F2F]">
        <div className="flex ml-20">
          <div className="py-4 text-white text-5xl"> Futsal Gembira</div>
          <div className="flex text-2xl  ml-auto">
            <button
              className="text-white  bg-[#363636] "
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              <svg
                className="absolute mt-1 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                fill="#FFFFFF"
                viewBox="0 0 64 64"
              >
                <g id="Layer_17" data-name="Layer 17">
                  <path d="M52,32.75H34.25a1.5,1.5,0,0,0-1.5,1.5V52a1.5,1.5,0,0,0,1.5,1.5H48.62a4.89,4.89,0,0,0,4.88-4.88V34.25A1.5,1.5,0,0,0,52,32.75ZM50.5,48.62a1.88,1.88,0,0,1-1.88,1.88H35.75V35.75H50.5Z" />
                  <path d="M48.62,10.5H34.25a1.5,1.5,0,0,0-1.5,1.5V29.75a1.5,1.5,0,0,0,1.5,1.5H52a1.5,1.5,0,0,0,1.5-1.5V15.38A4.89,4.89,0,0,0,48.62,10.5ZM50.5,28.25H35.75V13.5H48.62a1.88,1.88,0,0,1,1.88,1.88Z" />
                  <path d="M29.75,32.75H12a1.5,1.5,0,0,0-1.5,1.5V48.62a4.89,4.89,0,0,0,4.88,4.88H29.75a1.5,1.5,0,0,0,1.5-1.5V34.25A1.5,1.5,0,0,0,29.75,32.75ZM28.25,50.5H15.38a1.88,1.88,0,0,1-1.88-1.88V35.75H28.25Z" />
                  <path d="M29.75,10.5H15.38a4.89,4.89,0,0,0-4.88,4.88V29.75a1.5,1.5,0,0,0,1.5,1.5H29.75a1.5,1.5,0,0,0,1.5-1.5V12A1.5,1.5,0,0,0,29.75,10.5Zm-1.5,17.75H13.5V15.38a1.88,1.88,0,0,1,1.88-1.88H28.25Z" />
                </g>
              </svg>
              <div className="px-10 ml-5">Dashboard</div>
            </button>
            <button className="relative px-32 text-white flex py-4 w-full items-center justify-center overflow-hidden font-medium transition duration-300 ease-out group ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="30"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-bookmark"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
              <div className="absolute py-10 items-center justify-center flex w-full h-full text-white duration-300  -translate-x-full bg-[#363636]  group-hover:translate-x-0  ease">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="30"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-bookmark"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
                <div className="px-10">Penyewaan</div>
              </div>
            </button>
            <button
              className="relative px-32 text-white flex py-4 w-full items-center justify-center overflow-hidden font-medium transition duration-300 ease-out group "
              onClick={() => {
                navigate("/lapangan");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4m0 2h7v2.13c-1.76.46-3 2.05-3 3.87a4.01 4.01 0 0 0 3 3.87V18H4v-2h3V8H4V6m9 0h7v2h-3v8h3v2h-7v-2.13c1.76-.46 3-2.05 3-3.87a4.01 4.01 0 0 0-3-3.87V6m-9 4h1v4H4v-4m15 0h1v4h-1v-4m-6 .27c.62.36 1 1.02 1 1.73s-.38 1.37-1 1.73v-3.46m-2 0v3.46c-.62-.36-1-1.02-1-1.73s.38-1.37 1-1.73Z"
                />
              </svg>
              <div className="absolute py-10 items-center justify-center flex w-full h-full text-white duration-300  -translate-x-full bg-[#363636]  group-hover:translate-x-0  ease">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4m0 2h7v2.13c-1.76.46-3 2.05-3 3.87a4.01 4.01 0 0 0 3 3.87V18H4v-2h3V8H4V6m9 0h7v2h-3v8h3v2h-7v-2.13c1.76-.46 3-2.05 3-3.87a4.01 4.01 0 0 0-3-3.87V6m-9 4h1v4H4v-4m15 0h1v4h-1v-4m-6 .27c.62.36 1 1.02 1 1.73s-.38 1.37-1 1.73v-3.46m-2 0v3.46c-.62-.36-1-1.02-1-1.73s.38-1.37 1-1.73Z"
                  />
                </svg>
                <div className="px-10">Lapangan</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className=" py-5 bg-[#363636] pt-12 ">
        <div className="mx-20 border-2 py-10">
          <div className="flex static mx-48 ">
            <div className=" absolute left-10 bg-[#363636] top-28 text-white text-3xl">
              Dashboard
            </div>
            <div className=" absolute right-24 bg-[#363636] top-28 text-lg text-white ml-auto">
              Sabtu,21 Januari 2023
            </div>
          </div>
          <div className=" ml-10 mt-10 text-white flex ml-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 10.75C12.4142 10.75 12.75 11.0858 12.75 11.5V16.5C12.75 16.9142 12.4142 17.25 12 17.25C11.5858 17.25 11.25 16.9142 11.25 16.5V11.5C11.25 11.0858 11.5858 10.75 12 10.75Z"
                fill="white"
              />
              <path
                d="M12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.25 12C3.25 7.16751 7.16751 3.25 12 3.25C16.8325 3.25 20.75 7.16751 20.75 12C20.75 16.8325 16.8325 20.75 12 20.75C7.16751 20.75 3.25 16.8325 3.25 12ZM12 4.75C7.99594 4.75 4.75 7.99594 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75Z"
                fill="white"
              />
            </svg>
            <div className="ml-2">
              Kumpulan informasi penting selama satu bulan sejak tanggal 1
              hingga tanggal hari ini
            </div>
          </div>
          <div className=" flex justify-between mt-10 mx-20 ">
            <button
              className=" bg-[#2F2F2F] text-white w-6/12  text-left text-lg  font-medium uppercase text-white px-10 py-10 mt-10 "
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Jumlah Pendapatan - Januari 2023
              <div className="text-3xl">Rp 38.639.517</div>
            </button>
            <button
              className=" z-10 relative hover:rounded-lg hover:border-2 bg-transparent  font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0  before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100 w-6/12  text-right text-lg  rounded-lg px-10 py-10 mt-10"
              onClick={() => {
                navigate("/dashboardpenyewaan");
              }}
            >
              Jumlah Jam Penyewaan - Januari 2023
              <div className="text-3xl">485 Jam</div>
            </button>
          </div>
          <div className="bg-[#2F2F2F]  py-10 mx-20   ">
            <div className="mt-10 ml-10 w-9/12 border-2 rounded-lg ">
              <Bar
                className=" px-10 "
                data={data}
                options={{
                  scales: {
                    x: {
                      stacked: true,
                      ticks: {
                        color: ["white"],
                        beginAtZero: true,
                        font: { size: 15 },
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
            <div className="mt-10 ml-10 py-5 w-11/12 border-2 rounded-lg ">
              <Bar
                className="ml-10 mt-5"
                data={data1}
                options={{
                  indexAxis: "y",
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: "bottom",
                      align: "start",
                      labels: {
                        color: ["white"],
                        usePointStyle: true,
                        pointStyle: "rect",
                        font: {
                          size: 20,
                        },
                      },
                    },
                    tooltip: {
                      enabled: false,
                    },
                  },
                  scales: {
                    x: {
                      stacked: true,
                      ticks: {
                        color: ["white"],
                        beginAtZero: true,
                        font: { size: 10 },
                        display: false,
                      },
                      grid: {
                        display: false,
                      },
                      border: {
                        width: 5,
                        color: ["white"],
                        display: false,
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
                }}
              ></Bar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
