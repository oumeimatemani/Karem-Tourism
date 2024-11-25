import React from "react";
import Image from "next/image";
import BannerElement from "@/components/BannerElement";

import ImageBanner2 from "@/components/ImageBanner2";

import image11 from "../../../public/images/image11.png";

import karemTourism42 from "../../../public/images/karemTourism42.png";
import wizara from "../../../public/images/wizara.png";
import markez from "../../../public/images/markez.png";
import tijara from "../../../public/images/tijara.png";
import { IoLogoTwitter, IoLogoInstagram,  IoLogoSnapchat } from 'react-icons/io';

import pay from "../../../public/images/pay.png";
import stcpay from "../../../public/images/stcpay.png";
import master from "../../../public/images/master.png";
import visa from "../../../public/images/visa.png";
import mada from "../../../public/images/mada.png";
import mappp from "../../../public/images/mappp.png";










const HomePage = () => {
  const SocialIcon = ({ iconName }) => {
    switch (iconName) {
      case 'twitter':
        return <IoLogoTwitter />;
      
      case 'instagram':
        return <IoLogoInstagram />;
      case 'youtube':
        return <IoLogoSnapchat />;
      default:
        return null;
    }
  };

  const MediaIcon = ({ iconName, url }) => {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center">
          <SocialIcon iconName={iconName} />
        </div>
      </a>
    );
  };

  return (
    <div className="w-full h-screen ">
      <div className="w-full h-[25%]  ">
        <Image
          className="z-[-10]"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-full   flex absolute top-[50px] z-[-10] justify-center">
        <div className="w-full h-[600px] flex flex-col justify-center items-center">
        <h3 className="text-black m-5 text-[0.75rem] font-bold">
        الصفحة الرئيسية /الفنادق/ <span className="text-purple-800">  فندق رحال البحر </span>
        </h3>

        <div className="flex">
        <div className="flex-2 min-w-[200px] max-w-[400px]">
    <ImageBanner2
      description="  مكة كلوك رويال تاور فيرمونت فندق"
      route=""
      image={mappp}
    />
  </div>



  <div className="flex-2 min-w-[600px] max-w-[200px]">
    <ImageBanner2
      description="   "
      route=""
      image={image11}
    />
  </div>

  
</div>



          

          <div className=" w-[1000px] p-2 bg-white rounded-3xl flex flex-row justify-around items-center">
            <BannerElement
              option={
                <select>
                  <option value="egypt">مصر </option>
                  <option value="saudi_arabia">
                    المملكة العربية السعودية{" "}
                  </option>
                  <option value="iraq">العراق</option>
                  <option value="morocco">المغرب </option>
                  <option value="uae">الإمارات العربية المتحدة</option>
                  <option value="jordan">الأردن</option>
                  <option value="algeria">الجزائر</option>
                  <option value="tunisia">تونس </option>
                  <option value="lebanon">لبنان </option>
                  <option value="qatar">قطر</option>
                </select>
              }
              title={"الوجهة"}
            />
            <BannerElement
              option={
                <select>
                  <option value="" disabled>
                    تاريخ الوصول
                  </option>

                  <option value="2023-12-02">2023-12-02</option>
                  <option value="2023-12-03">2023-12-03</option>
                  <option value="2023-12-04">2023-12-04</option>
                  <option value="2023-12-05">2023-12-05</option>
                  <option value="2023-12-06">2023-12-06</option>
                  <option value="2023-12-07">2023-12-07</option>
                  <option value="2023-12-08">2023-12-08</option>
                  <option value="2023-12-09">2023-12-09</option>
                  <option value="2023-12-10">2023-12-10</option>
                  <option value="2023-12-11">2023-12-11</option>
                </select>
              }
              title={"تاريخ الوصول"}
            />
            <BannerElement
              option={
                <select>
                  <option value="" disabled>
                    تاريخ المغادرة
                  </option>

                  <option value="2023-12-02">2023-12-02</option>
                  <option value="2023-12-03">2023-12-03</option>
                  <option value="2023-12-04">2023-12-04</option>
                  <option value="2023-12-05">2023-12-05</option>
                  <option value="2023-12-06">2023-12-06</option>
                  <option value="2023-12-07">2023-12-07</option>
                  <option value="2023-12-08">2023-12-08</option>
                  <option value="2023-12-09">2023-12-09</option>
                  <option value="2023-12-10">2023-12-10</option>
                  <option value="2023-12-11">2023-12-11</option>
                </select>
              }
              title={"تاريخ المغادرة"}
            />
            <BannerElement
              option={<input className="border-2 w-[90px]" type="text" />}
              title={"البروموكود"}
            />

           
          </div>
        </div>
      </div>

      <div className="w-full h-[50%] bg-white flex flex-col items-center ">

        <div className="flex flex-wrap gap-2 justify-center">
         

          

          
         
 

 
</div>

          <div className="w-full flex items-center justify-between mt-4">

            
            
  {/* Conteneur des images */}
  <div className="w-full flex justify-center">
    
  <Image src={karemTourism42} className="w-[150px] h-[150px]" alt="karemTourism42" />
  </div>


  <div className="flex flex-row space-x-4">

    
    
    <Image src={wizara} className="w-[100px] h-[100px]" alt="wizara" />
    <Image src={markez} className="w-[100px] h-[100px]" alt="markez" />
    <Image src={tijara} className="w-[100px] h-[100px]" alt="tijara" />


    <MediaIcon iconName="instagram" url="https://www.instagram.com/" />
    <MediaIcon iconName="twitter" url="https://x.com/" />
    <MediaIcon iconName="youtube" url="https://www.youtube.com/" />
  </div>

  
</div>
<div className="text-center m-5">
  <h3 className="text-black text-[0.5rem] font-bold flex justify-center items-center m-5">
    <span className="text-gray-500">الرقم الضريبي: 311889896400003</span>
  </h3>

  <div className="flex justify-center space-x-4 mt-3 text-[0.75rem] whitespace-nowrap">
  <span className="text-black cursor-pointer flex items-center space-x-1">
    <span  className="text-black after:content-['|'] after:mx-2" >عربية</span>
  </span> 
  <span className="text-black after:content-['|'] after:mx-2"> الخصوصية</span>
  <span className="text-black after:content-['|'] after:mx-2">الشروط والأحكام</span>
  <span className="text-black after:content-['|'] after:mx-2">تقييم </span>
  <span className="text-black after:content-['|'] after:mx-2">الفنادق</span>
  <span className="text-black after:content-['|'] after:mx-2"> حجوزاتي</span>
  <span>الصفحة الرئيسية</span>




  <div className="relative inline-block text-left">
  <div className="relative inline-block text-left">
  

 
</div>

</div>
</div>

<div className="flex flex-row space-x-4">

    
    
    <Image src={stcpay} className="w-[50px] h-[50px]" alt="stcpay" />
    <Image src={mada} className="w-[50px] h-[50px]" alt="mada" />
    <Image src={master} className="w-[50px] h-[50px]" alt="master" />
    <Image src={visa} className="w-[50px] h-[50px]" alt="visa" />
    <Image src={pay} className="w-[50px] h-[50px]" alt="pay" />



    
  </div>

  <h3 className="text-black text-[0.5rem] font-bold">
    <span className="text-gray-400">   Copyright © 2024 KAREM TOURISM</span>
  </h3>



</div>








          </div>
          

          

          




          <div className="w-full flex flex-wrap gap-4 justify-center mt-10">
          
        </div>



        </div>








  );
};

export default HomePage;
