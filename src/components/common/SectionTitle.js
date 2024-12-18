import React, { useEffect, useState } from 'react';

const SectionTitle = ({ title, color = 'text-black' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // Başlık %50 görünür olduğunda animasyonu tetikle
      }
    );

    const element = document.getElementById('section-title');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div
      id="section-title"
      className={`flex items-center justify-center text-5xl font-extrabold ${color} text-center relative py-8 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100 animate-fadeIn' : 'opacity-0'}`}
    >
      <div className="h-10 w-2 bg-[#DB9FC0] "></div> {/* Dikey çizgi */}
      <h2 className="inline ml-2 pb-1">{title}</h2> {/* Metin ve çizgi arasındaki boşluğu kaldırdık */}
    </div>
  );
};

export default SectionTitle;
