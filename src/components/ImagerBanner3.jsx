import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function ImageBanner3({ title, description, description1, route, image, smallImage, footerText }) {
  return (
    <Link href={route} passHref>
      <div className="relative w-full max-w-[2000px] m-4 h-[320px] overflow-hidden cursor-pointer">
        <div className="absolute inset-0">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
        
        {/* Petite image superposée */}
        {smallImage && (
          <div className="absolute top-4 right-4 z-10"> {/* Ajustez la position selon vos besoins */}
            <Image
              src={smallImage}
              alt="Petite image"
              width={120} // Ajustez la largeur de la petite image
              height={100} // Ajustez la hauteur de la petite image
              className="object-cover"
            />
          </div>
        )}

        <div className="absolute inset-0 flex items-end justify-start p-5">
          <div className="text-white">
            <div className="flex items-center mb-3">
              {/* Vous pouvez ajouter d'autres éléments ici si nécessaire */}
            </div>
            <h2 className="font-bold text-2xl">{title}</h2>
            <div className="flex flex-col items-start">
              <p className="mr-4 text-[3.5rem]">{description}</p>
              <p className="mr-3 text-[1.5rem]">{description1}</p>
              <div className="flex items-center w-[120px] h-8 text-center rounded-3xl mt-4" style={{ backgroundColor: '#d2b48c' }}>
                <p className="mx-auto text-xs">إكتشف فنادقنا</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Texte sous l'image */}
        {footerText && (
          <p className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-center">
            {footerText}
          </p>
        )}
      </div>
    </Link>
  );
}

export default ImageBanner3;
