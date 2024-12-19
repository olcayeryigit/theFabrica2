"use client";

import SectionTitle from '@/components/common/SectionTitle';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const projects = [
  {
    id: 1,
    title: "E-Ticaret Platformu",
    description: "Modern bir e-ticaret platformu, kullanıcı dostu tasarımıyla tamamlandı.",
    image: "/11.png"
  },
  {
    id: 2,
    title: "Kurumsal Web Sitesi",
    description: "Kurumsal kimliği öne çıkaran, profesyonel bir web sitesi geliştirildi.",
    image: "/11.png"
  },
  {
    id: 3,
    title: "Mobil Uygulama",
    description: "Android ve iOS uyumlu, performans odaklı bir mobil uygulama tamamlandı.",
    image: "/11.png"
  },
  {
    id: 4,
    title: "Mobil Uygulama",
    description: "Android ve iOS uyumlu, performans odaklı bir mobil uygulama tamamlandı.",
    image: "/11.png"
  }
];

const Projects = () => {
  const [activeAnimation, setActiveAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAnimation((prev) => (prev + 1) % projects.length);
    }, 3000); // 3 saniye aralıklarla animasyonu değiştirir

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 bg-gray-100">


      <section className="pt-10 relative z-50">
        <div className="container mx-auto px-4">

        <div className='flex justify-center items-center mb-16'>
  <h1 className='text-5xl font-extrabold '>Projelerimiz</h1>
</div>

          <div className="grid grid-cols-4 gap-12">
            {projects.map((card, index) => (
              <div key={card.id} className="col-span-1 mb-12">
                <div className="group transition duration-300">
                  <div className="w-full h-full">
                    <div className="relative z-10 p-4">
                      <div
                        className={`relative w-full h-40 skewed border-4 border-[#0C083A] rounded-3xl ${
                          activeAnimation === index ? 'animate-border ' : ''
                        }`}
                      >
                        <Image src={card.image} fill className="object-cover " alt="" />
                      </div>
                      <h3 className=" text-2xl font-bold my-4">{card.title}</h3>
                      <p className=" text-lg mb-8">{card.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
