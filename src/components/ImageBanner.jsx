import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function ImageBanner({ title, description, route, image, icon, clipPath, color }) {
  return (
    <Link href={route} passHref>
      <div className="relative w-full max-w-[750px] m-4 h-[250px] overflow-hidden cursor-pointer">
        <div className="absolute inset-0">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div
          className="absolute inset-0 z-5 overflow-hidden"
          style={{
            background: color || "linear-gradient(to bottom right, transparent, rgba(0, 0, 0, 0.9))", // Default gradient background
            clipPath: clipPath || "polygon(79% 0, 100% 0, 100% 100%, 70% 100%)", // Default clipPath
          }}
        />
        <div className="absolute inset-0 flex items-end justify-start p-5">
          <div className="text-white">
            <div className="flex items-center mb-3">
              <div className="flex h-10 w-10 border border-gray-300 rounded-full items-center justify-center p-2">
                <FontAwesomeIcon icon={icon} size="2x" />
              </div>
            </div>
            <h2 className="font-bold text-2xl">{title}</h2>
            <div className="flex items-center">
              <p className="mr-2">{description}</p>
              <div className="w-5 h-5">
                <FontAwesomeIcon icon={faArrowLeft} size="3x" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ImageBanner;
