"use client"; // Add this line to mark the component as a Client Component

import React, { useState } from 'react';
import Image from 'next/image';

const hotels = [
  {
    id: 1,
    name: 'فندق جدة 1',
    city: 'جدة',
    imageUrl: '/images/hotel1.jpeg',
    description: 'فندق رائع يقع في قلب جدة، يتميز بخدمات ممتازة وإطلالات خلابة.',
    rating: 4, // 4 étoiles

  },
  {
    id: 2,
    name: 'فندق المدينة 1',
    city: 'المدينة',
    imageUrl: '/images/hotel2.jpg',
    description: 'فندق فاخر قريب من المسجد النبوي، يوفر راحة وخدمة متميزة.',
    rating: 4, // 4 étoiles

  },
  {
    id: 3,
    name: 'فندق الرياض 1',
    city: 'الرياض',
    imageUrl: '/images/hotel3.jpg',
    description: 'فندق حديث في الرياض يوفر جميع وسائل الراحة للنزلاء.',
    rating: 4, // 4 étoiles

  },
  {
    id: 4,
    name: 'فندق جدة 2',
    city: 'جدة',
    imageUrl: '/images/hotel4.jpg',
    description: 'فندق مثالي لقضاء عطلة مميزة في جدة، قريب من الشاطئ والمرافق السياحية.',
    rating: 4, // 4 étoiles

  },
  {
    id: 5,
    name: 'فندق المدينة 2',
    city: 'المدينة',
    imageUrl: '/images/hotel5.jpg',
    description: 'فندق مريح يقدم خدمة رائعة وموقع متميز بالقرب من المسجد النبوي.',
    rating: 4, // 4 étoiles

  },
  {
    id: 6,
    name: 'فندق الرياض 2',
    city: 'الرياض',
    imageUrl: '/images/hotel6.jpg',
    description: 'فندق أنيق في وسط الرياض، مثالي لرحلات العمل والترفيه.',
    rating: 4, // 4 étoiles

  },

  {
    id: 7,
    name: 'فندق جدة 3',
    city: 'جدة',
    imageUrl: '/images/hotel7.jpg',
    description: 'فندق مثالي لقضاء عطلة مميزة في جدة، قريب من الشاطئ والمرافق السياحية.',
    rating: 4, // 4 étoiles

  },
  {
    id: 8,
    name: '3 فندق المدينة ',
    city: 'المدينة',
    imageUrl: '/images/hotel8.jpg',
    description: 'فندق مريح يقدم خدمة رائعة وموقع متميز بالقرب من المسجد النبوي.',
    rating: 4, // 4 étoiles

  },
  {
    id: 9,
    name: '3 فندق الرياض ',
    city: 'الرياض',
    imageUrl: '/images/hotel9.jpg',
    description: 'فندق أنيق في وسط الرياض، مثالي لرحلات العمل والترفيه.',
    rating: 4, // 4 étoiles

  },

];

const cities = ['جدة', 'المدينة', 'الرياض'];

const Hotels = () => {
  const [selectedCity, setSelectedCity] = useState('جدة');

  // Filter hotels by selected city
  const filteredHotels = hotels.filter(hotel => hotel.city === selectedCity);

    // Fonction pour afficher les étoiles
    const renderStars = (rating) => {
      return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    };
  
    return (
      <div className="w-full h-auto flex flex-col items-center p-8">
        <div className="bg-white w-[80%] p-8 rounded-3xl shadow-lg">
          {/* Breadcrumb */}
          <div className="w-full text-right mb-4 text-lg text-gray-600">
            <a href="/" className="text-blue-600">الصفحة الرئيسية</a>    | الفنادق 
          </div>
  
          {/* Title */}
          <h3 className="text-yellow-500 text-[2rem] font-bold font-avenir mb-8 text-right w-full">
            اكتشف فندقنا
          </h3>
  
          {/* City Selector */}
          <div className="mb-8">
            <label htmlFor="city-select" className="text-lg font-bold mr-4">اختر المدينة:</label>
            <select
              id="city-select"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="p-2 border rounded-lg"
            >
              {cities.map(city => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
  
          {/* Display filtered hotels as a horizontal gallery */}
          <div className="w-full flex overflow-x-auto space-x-6">
            {filteredHotels.map(hotel => (
              <div key={hotel.id} className="flex-none w-[300px] bg-gray-100 rounded-lg p-4 shadow-md">
                <div className="relative w-full h-[200px] overflow-hidden">
                  <Image
                    src={hotel.imageUrl}
                    alt={hotel.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="mt-2 text-right">
                  {/* Display stars rating */}
                  <div className="text-yellow-500 mb-2">
                    {renderStars(hotel.rating)}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{hotel.name}</h4>
                  <p className="text-gray-700 mb-2">{hotel.city}</p>
                  <p className="text-gray-600">{hotel.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Hotels;
