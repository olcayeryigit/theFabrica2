"use client"
import SectionTitle from '@/components/common/SectionTitle';
import React from 'react';
import { FaUsers, FaRocket, FaServer, FaSmile } from 'react-icons/fa'; // İkonlar ekleniyor

const whyUsData = [
  { id: 1, title: "Uzman Kadro", description: "Deneyimli ve profesyonel geliştirici ekibi.", icon: <FaUsers /> },
  { id: 2, title: "Yüksek Performans", description: "Optimize edilmiş hızlı ve güvenilir yazılımlar.", icon: <FaRocket /> },
  { id: 3, title: "Güçlü Altyapı", description: "Modern teknolojiler ve güçlü altyapı ile projeler.", icon: <FaServer /> },
  { id: 4, title: "Müşteri Memnuniyeti", description: "Her zaman müşteri ihtiyaçlarını ön planda tutarız.", icon: <FaSmile /> },
];

const WhyUs = () => {
  return (
    <div className="bg-[url('/bg-3.png')] bg-cover bg-center py-16">
      <div className="container mx-auto  h-auto relative">
        <SectionTitle title="Neden Biz?" color="white" />

        {/* Arka plan efekti */}
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20 backdrop-blur-md z-[-1]"></div>

        {/* Neden Biz Kartları */}
        <div className="flex flex-wrap justify-center gap-2 mt-12 p-1">
          {whyUsData.map((item) => (
            <div key={item.id} className="glassIco flex flex-col justify-center items-center text-white rounded-lg overflow-hidden ">
             <div className="text-5xl mb-4 text-white ">{item.icon}</div> {/* İkon ekleniyor */}

              <div className="text-center ">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stil */}
        <style jsx>{`
          .glassIco {
            --width: 17rem;
            width: var(--width);
            height: var(--width);
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(4px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
            margin: 20px;
            position: relative;
            transition: transform 200ms;
          }
          .glassIco:before {
            content: "";
            position: absolute;
            display: block;
            width: 50%;
            height: 100%;
            background: rgba(255, 255, 255, 0.5);
            filter: blur(0px);
            transition: 400ms;
            transform: skewX(45deg) translateX(calc(var(--width) + 50%));
          }
          .glassIco:hover {
            transform: translateY(-10px);
          }
          .glassIco:hover:before {
            transform: skewX(45deg) translateX(calc(var(--width) * -1 - 50%));
          }
        `}</style>
      </div>
    </div>
  );
};

export default WhyUs;
