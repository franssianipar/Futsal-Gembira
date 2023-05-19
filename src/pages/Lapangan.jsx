import React from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Ripple, initTE } from "tw-elements";
import futsal from "../image/futsal1.png";

initTE({ Modal, Ripple });

export default function Lapangan() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#2F2F2F]">
        <div className="flex ml-20">
          <div className="py-4 text-white text-5xl"> Futsal Gembira</div>
          <div className="flex text-2xl  ml-auto">
            <button
              className="relative px-32 text-white flex py-4 w-full items-center justify-center overflow-hidden font-medium transition duration-300 ease-out group "
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              <svg
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
              <div className="absolute py-10 items-center justify-center flex w-full h-full text-white duration-300  -translate-x-full bg-[#363636]  group-hover:translate-x-0  ease">
                <svg
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
                <div className="px-10">Dashboard</div>
              </div>
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
              className="text-white  bg-[#363636] "
              onClick={() => {
                navigate("/lapangan");
              }}
            >
              <svg
                className="absolute mt-2 ml-2"
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
              <div className="px-10 ml-5">Lapangan</div>
            </button>
          </div>
        </div>
      </div>
      <div className=" py-5 bg-[#363636] pt-12 ">
        <div className="mx-20 border-2 rounded-lg py-10">
          <div className="flex static mx-48 ">
            <div className=" absolute left-10 bg-[#363636] top-28 text-white text-3xl">
              Daftar Lapangan
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
              Daftar yang memuat catatan tentang hal lapangan futsal, seperti
              nama lapangan, harga sewa, dan harga sewa malam
            </div>
          </div>

          <div class=" ml-20 mt-10 flex border-0">
            <button
              className="w-6/12 "
              data-te-toggle="modal"
              data-te-target="#exampleModal"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img class="rounded-t-lg" src={futsal} alt="" />
            </button>
            <div
              data-te-modal-init
              class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div
                data-te-modal-dialog-ref
                class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
              >
                <div class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                  <div class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <h5
                      class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                      id="exampleModalLabel"
                    >
                      Lapangan #2
                    </h5>

                    <button
                      type="button"
                      class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                      data-te-modal-dismiss
                      aria-label="Close"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div class="relative flex-auto p-4" data-te-modal-body-ref>
                    Modal body text goes here.
                  </div>

                  <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <button
                      type="button"
                      class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                      data-te-modal-dismiss
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      class="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
