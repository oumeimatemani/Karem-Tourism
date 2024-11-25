import React from 'react';
import BannerElement from "@/components/BannerElement";

const Reservations = () => {
  return (
    <div className="w-full flex justify-center items-center ">
    <div className="bg-white w-[70%] p-6 rounded-3xl shadow-lg flex flex-col items-center">
      {/* Title */}
      <h3 className="text-yellow-500 text-[2rem] font-bold font-avenir mt-1 mb-8 text-right w-full">
        حجوزاتي
      </h3>
      {/* Table */}
      <div className="w-full p-4 bg-white rounded-3xl flex flex-col space-y-4">
        {/* Table Header */}
        <div className="w-full flex justify-between text-center font-bold text-lg">
          <span className="w-1/4">رقم الحجز</span>
          <span className="w-1/4">تاريخ الوصول</span>
          <span className="w-1/4">تاريخ المغادرة</span>
          <span className="w-1/4">حالة الحجز</span>
        </div>
  
        {/* Table Rows */}
        <div className="w-full flex justify-between items-center text-center border-t pt-4">
          <span className="w-1/4">015-5178651</span>
          <span className="w-1/4">09-11-2022</span>
          <span className="w-1/4">15-11-2022</span>
          <span className="w-1/4">
            <select className="p-2 rounded-lg border">
              <option value="" disabled>حالة الحجز</option>
              <option value="confirmed">مؤكد</option>
              <option value="pending">قيد الانتظار</option>
              <option value="cancelled">ملغى</option>
            </select>
          </span>
        </div>
  
        <div className="w-full flex justify-between items-center text-center border-t pt-4">
          <span className="w-1/4">015-5178651</span>
          <span className="w-1/4">09-11-2022</span>
          <span className="w-1/4">15-11-2022</span>
          <span className="w-1/4">
            <select className="p-2 rounded-lg border">
              <option value="" disabled>حالة الحجز</option>
              <option value="confirmed">مؤكد</option>
              <option value="pending">قيد الانتظار</option>
              <option value="cancelled">ملغى</option>
            </select>
          </span>
        </div>

        <div className="w-full flex justify-between items-center text-center border-t pt-4">
          <span className="w-1/4">015-5178651</span>
          <span className="w-1/4">09-11-2022</span>
          <span className="w-1/4">15-11-2022</span>
          <span className="w-1/4">
            <select className="p-2 rounded-lg border">
              <option value="" disabled>حالة الحجز</option>
              <option value="confirmed">مؤكد</option>
              <option value="pending">قيد الانتظار</option>
              <option value="cancelled">ملغى</option>
            </select>
          </span>
        </div>

        <div className="w-full flex justify-between items-center text-center border-t pt-4">
          <span className="w-1/4">015-5178651</span>
          <span className="w-1/4">09-11-2022</span>
          <span className="w-1/4">15-11-2022</span>
          <span className="w-1/4">
            <select className="p-2 rounded-lg border">
              <option value="" disabled>حالة الحجز</option>
              <option value="confirmed">مؤكد</option>
              <option value="pending">قيد الانتظار</option>
              <option value="cancelled">ملغى</option>
            </select>
          </span>
        </div>

        <div className="w-full flex justify-between items-center text-center border-t pt-4">
          <span className="w-1/4">015-5178651</span>
          <span className="w-1/4">09-11-2022</span>
          <span className="w-1/4">15-11-2022</span>
          <span className="w-1/4">
            <select className="p-2 rounded-lg border">
              <option value="" disabled>حالة الحجز</option>
              <option value="confirmed">مؤكد</option>
              <option value="pending">قيد الانتظار</option>
              <option value="cancelled">ملغى</option>
            </select>
          </span>
        </div>


        <div className="w-full flex justify-between items-center text-center border-t pt-4">
          <span className="w-1/4">015-5178651</span>
          <span className="w-1/4">09-11-2022</span>
          <span className="w-1/4">15-11-2022</span>
          <span className="w-1/4">
            <select className="p-2 rounded-lg border">
              <option value="" disabled>حالة الحجز</option>
              <option value="confirmed">مؤكد</option>
              <option value="pending">قيد الانتظار</option>
              <option value="cancelled">ملغى</option>
            </select>
          </span>
        </div>




      </div>
    </div>
  </div>
  
  );
};

export default Reservations;
