import React from "react";
import Image from "next/image";

import Mecca from "../../../public/images/mecca.png";
import BannerElement from "@/components/BannerElement";
import { AiOutlineSearch } from "react-icons/ai";
import IconComponent from "@/components/IconComponent";
import IkamaImg from "../../../public/images/ikama.png";
import PlaneImg from "../../../public/images/avion.png";
import BayanatImg from "../../../public/images/bayanat.png";
import ImageBanner from "@/components/ImageBanner";
import ImageBanner2 from "@/components/ImageBanner2";
import TextBanner from "@/components/TextBanner";
import TextBannerr from "@/components/TextBannerr";
import image9 from "../../../public/images/image9.png";
import image10 from "../../../public/images/image10.png";
import image8 from "../../../public/images/image8.png";
import image12 from "../../../public/images/image12.png";
import image11 from "../../../public/images/image11.png";
import image7 from "../../../public/images/image7.png";
import { faKaaba, faMosque,faTree } from "@fortawesome/free-solid-svg-icons";
import ImageBanner3 from "@/components/ImagerBanner3";
import karemTourism42 from "../../../public/images/karemTourism42.png";
import karemTourism4 from "../../../public/images/karemTourism4.png";

import wizara from "../../../public/images/wizara.png";
import markez from "../../../public/images/markez.png";
import tijara from "../../../public/images/tijara.png";
import { IoLogoTwitter, IoLogoInstagram,  IoLogoSnapchat, IoLogoYoutube, IoLogoFacebook } from 'react-icons/io';

import pay from "../../../public/images/pay.png";
import stcpay from "../../../public/images/stcpay.png";
import master from "../../../public/images/master.png";
import visa from "../../../public/images/visa.png";
import mada from "../../../public/images/mada.png";









const HomePage = () => {
  const SocialIcon = ({ iconName }) => {
    switch (iconName) {
      case 'twitter':
        return <IoLogoTwitter />;
      case 'instagram':
        return <IoLogoInstagram />;
      case 'youtube':
        return <IoLogoYoutube />;
        case 'facebook':
          return <IoLogoFacebook />;
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
  
      <div className="w-[full] h-[400px]   ">
      <div className="w-[full] h-[390px]  ">

  <Image
    className="z-[-60] object-top"
    src={Mecca}
    layout="fill"
    objectFit="top"
  />
</div>


      <div className="w-full   flex absolute top-[150px] z-[-20] justify-center">
        <div className="w-full h-[400px] flex flex-col justify-center items-center">
        <h3 className="text-[4rem] font-bold font-avenir" style={{ color: '#d2b48c' }}>
         كارم السياحية
        </h3>

          <h2 className=" m-5 font-bold text-white text-[1rem] font-avenir ">
            بوابتك إلى تجربة مميزة في البقاع المقدسة
          </h2>

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

            <div className="w-11 h-11 bg-purple-950 rounded-lg flex justify-center items-center cursor-pointer">
              <AiOutlineSearch size={24} color="white" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[50%] bg-white flex flex-col items-center ">
        <h3 className="text-black m-5 text-[2rem] font-bold">
          حجزكم <span className="text-purple-800">سهل و سريع</span>
        </h3>
        <div className="w-full flex flex-row justify-evenly m-10">
          <IconComponent
            img={BayanatImg}
            title={"أدخل بياناتك"}
            description={"إملأ التفاصيل لإتمام الاجراءت"}
          />


          <IconComponent
            img={IkamaImg}
            title={"إختر إقامتك"}
            description={"إختر فندقك لإقامة  مثالية"}
          />


          <IconComponent
            img={PlaneImg}
            title={"إختر الوجهة"}
            description={"إستكشف خياراتك للسفر"}
          />
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex-1 w-[400px]">
            <TextBanner className="self-center" />
          </div>
          <div className="flex-1 min-w-[700px] max-w-[750px]">
            <ImageBanner
              title="مكة المكرمة"
              description="إكتشف أفضل العروض"
              route="/Hotels"
              image={image9}
              icon={faKaaba}
              clipPath="polygon(79% 0, 100% 0, 100% 100%, 65% 100%)" // First polygon

              
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
        <div className="flex-1 min-w-[600px] max-w-[750px]">
        <ImageBanner
              title=" المدينة المنورة"
              description="إكتشف أفضل العروض"
              route="/Hotels"
              image={image10}
              icon={faMosque}
              clipPath="polygon(79% 0, 100% 0, 100% 100%, 70% 100%) " // First polygon
              color="rgba(73, 15, 106, 0.85)" // Darker violet with slight transparency

           

            />
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex-1 min-w-[350px] max-w-[100px]">
            <ImageBanner
              title=" جدة"
              description="إكتشف أفضل العروض"
              route="/Hotels"
              image={image8}
              icon={faTree}
              clipPath="polygon(70% 0, 100% 0, 100% 100%, 40% 100%)" // First polygon
              color="rgba(222, 198, 161, 0.9)" // Beige transparent à 80%


            />
          </div>




          </div>

          
          <div className="flex flex-wrap gap-4 justify-end">
          <div className="flex-1 min-w-[350px] max-w-[100px] ">
         <ImageBanner2
           description="  مكة كلوك رويال تاور فيرمونت فندق"
           route="/fondok"
           image={image11} 
         />
       </div>
       <div className="flex flex-wrap gap-4 justify-end">
       <div className="flex-1 min-w-[350px] max-w-[100px] ">
         <ImageBanner2
           description=" دار توحيد انتركونتينونتال مكة "
           route="/Hotels"
           image={image12}
         />
         
       </div>
       </div>
       </div>





          <div className="flex flex-wrap gap-4 justify-start">
          <div className="flex-8 w-[380px]">
            <TextBannerr className="self-left-10" />
          </div>
          </div>




          <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex-1 min-w-[1200px] max-w-[600px]">   
            <ImageBanner3 
              description="    إكتشف الإقامة المثالية في وجهاتنا الفريدة "
              description1="  فنادقنا ترحب بك في قلب المدينة وروح التاريخ "
              route="/Hotels"
              image={image7}       
              smallImage={karemTourism4}
              
            />
            </div>
            
            </div>


            <div className="w-full bg-white flex justify-between items-center m-5"> {/* Conteneur flex avec justification à l'espace entre */}
    <h3 className="text-black text-[2rem] font-bold text-center mr-5"> {/* Texte à gauche */}
        <span className="text-black">إشترك بالنيوزلاتر وتلقى أخر اخبارنا</span>
    </h3>
    <div className="flex items-center"> {/* Conteneur flex pour la barre de recherche et le bouton */}
        <input
            type="text"
            placeholder="أدخل بريدك الإلكتروني..."
            className="border border-gray-300 rounded-l-md p-1 focus:outline-none"
        />
        <button className="bg-purple-900 text-white rounded-full p-1 flex items-center ml-1"> {/* Bouton arrondi */}
        إشترك

            <span className="mr-1 text-white">⬅</span> {/* Flèche à gauche en blanc */}
        </button>
    </div>
</div>










  

  
            
  <div className="flex justify-between items-center w-full">

         

  {/* Image à gauche */}
  <div className="flex justify-between ml-10"> {/* Marge à gauche du conteneur */}
  <Image src={karemTourism42} className="w-[150px] h-[150px]" alt="karemTourism42" />
</div>


  {/* Images au centre */}
  <div className="flex flex-col items-center"> {/* Conteneur pour aligner les éléments au centre */}
  <h3 className="text-black text-[1.25rem] mb-3">
    <span className="text-purple-900">شركة سعودية مرخصة ومعتمدة</span>
  </h3>
  
  <div className="flex space-x-4"> {/* Conteneur pour les images avec espacement */}
    <Image src={wizara} className="w-[100px] h-[100px]" alt="wizara" />
    <Image src={markez} className="w-[100px] h-[100px]" alt="markez" />
    <Image src={tijara} className="w-[100px] h-[100px]" alt="tijara" />
  </div>
</div>

  {/* Icônes à droite */}
 

  <div className="flex flex-col items-start ml-8"> {/* Augmentez la marge à gauche pour décaler à droite */}
  <h3 className="text-black text-[1.25rem] font-bold mt-4"> {/* Espace au-dessus du texte */}
    <span className="text-purple-900">تواصل معنا</span>
  </h3>
  
  <div className="flex justify-start space-x-2 mt-2"> {/* Conteneur pour les icônes */}
    <MediaIcon iconName="instagram" url="https://www.instagram.com/" />
    <MediaIcon iconName="youtube" url="https://www.youtube.com/" />
    <MediaIcon iconName="twitter" url="https://www.twitter.com/" />
    <MediaIcon iconName="facebook" url="https://www.facebook.com/" />
  </div>
</div>




  
</div>
<div className="text-center m-5">
<h3 className="text-black text-[0.5rem] font-center mt-6"> {/* Espace au-dessus du texte */}
<span className="text-gray-400">الرقم الضريبي: 311889896400003</span>
  </h3>

  <div className="flex justify-center space-x-20 mt-3 text-[0.75rem] whitespace-nowrap">
  <span className="text-black after:content-['|'] after:mx-2" >عربي</span>
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
<div className="flex flex-col items-center mt-6"> {/* Conteneur pour aligner les éléments au centre */}


  <div className="flex flex-row space-x-10 mb-4"> {/* Espace en bas du conteneur des images */}
    <Image src={stcpay} className="w-[50px] h-[50px]" alt="stcpay" />
    <Image src={mada} className="w-[50px] h-[50px]" alt="mada" />
    <Image src={master} className="w-[50px] h-[50px]" alt="master" />
    <Image src={visa} className="w-[50px] h-[50px]" alt="visa" />
    <Image src={pay} className="w-[50px] h-[50px]" alt="pay" />
  </div>

  <h3 className="text-black text-[0.5rem] font-bold mt-4"> {/* Espace au-dessus du texte */}
    <span className="text-gray-400">Copyright © 2024 KAREM TOURISM</span>
  </h3>

</div>




</div>








          </div>
          

          

          




          <div className="w-full flex flex-wrap gap-4 justify-center mt-10">
          
        </div>



        </div>





      </div>



  );
};

export default HomePage;
