import React from "react";

export default function Dashboard() {
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
      <div className="  bg-[#7E7E7E] pt-12 bg-[#363636]">
        <div className="mx-20 border-2">
          <div className="flex static mx-48 ">
            <div className=" absolute left-10 bg-[#7E7E7E] bg-[#363636] top-32 text-white text-3xl">
              Dashboard
            </div>
            <div className=" absolute right-24 bg-[#7E7E7E] bg-[#363636] top-32 text-lg text-white ml-auto">
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
          <div className="text-white border-2 ">halo sayang</div>
        </div>
      </div>
    </>
  );
}
