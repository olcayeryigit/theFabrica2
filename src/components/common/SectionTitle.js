import React, { useEffect, useState } from 'react';

const SectionTitle = ({ title, color = '#000000' }) => { // Renk kodunu prop olarak al
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
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
      className={`z-50 flex items-center justify-center text-5xl font-extrabold text-center relative py-8 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 animate-fadeIn' : 'opacity-0'
      }`}
    >
      <h2
        className="z-50 inline pb-1"
        style={{ color: color }} // Inline style ile renk ekle
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
