import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function ImageBanner2({ title, description, description1, route, image }) {
  return (
    <Link href={route} passHref>
      <div className="relative w-full max-w-[500px] m-4 h-[250px] overflow-hidden cursor-pointer">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>

        {/* Contenu texte avec les descriptions */}
        <div className="absolute inset-0 flex items-end justify-start p-5">
          <div className="text-white">
            <h2 className="font-bold text-2xl">{title}</h2>
            <div className="flex flex-col items-start">
              <p className="mr-2">{description}</p>
              <p className="mr-2">{description1}</p>

              {/* Ajout des étoiles dorées sous les descriptions */}
              <div className="flex mt-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <FontAwesomeIcon 
                    key={index} 
                    icon={faStar} 
                    className="text-yellow-500 mr-1" 
                    style={{ fontSize: '1.5rem' }} // Ajuste la taille des étoiles si besoin
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ImageBanner2;
