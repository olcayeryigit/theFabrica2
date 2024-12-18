import SectionTitle from "@/components/common/SectionTitle";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// JSON verisi
const cardData = [
  {
    backgroundImage: "/1.png",
    title: "Kart 1",
    subTitle: "Yazılım Geliştirme",
    info: {
      p: "Modern teknolojilerle hızlı, kullanıcı dostu ve etkili yazılım çözümleri geliştiriyoruz.",
      icon: "",
    },
  },
  {
    backgroundImage: "/1.png",
    title: "Kart 2",
    subTitle: "Dijital Pazarlama",
    info: {
      p: "İşletmenizin dijital dünyada büyümesine yardımcı olacak pazarlama çözümleri sunuyoruz.",
      icon: "https://source.unsplash.com/600x900/?technology",
    },
  },
  {
    backgroundImage: "/1.png",
    title: "Kart 3",
    subTitle: "UI/UX Tasarımı",
    info: {
      p: "Kullanıcı odaklı, estetik ve fonksiyonel tasarımlar geliştiriyoruz.",
      icon: "https://source.unsplash.com/600x900/?design",
    },
  },
  {
    backgroundImage: "/1.png",
    title: "Kart 4",
    subTitle: "Web Uygulamaları",
    info: {
      p: "Yüksek performanslı ve ölçeklenebilir web uygulamaları geliştiriyoruz.",
      icon: "https://source.unsplash.com/600x900/?web",
    },
  },
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, entry.target.id]);
          }
        });
      },
      {
        threshold: 0.5, // Kart %50 görünür olduğunda animasyonu tetikle
      }
    );

    // Kartları gözlemlemeye başla
    const elements = document.querySelectorAll('.service-card');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="container mx-auto py-12">
      <SectionTitle title="Hizmetlerimiz" color="black" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            id={`card-${index}`}
            className={`service-card relative opacity-0 transition-all duration-1000 ease-in-out transform ${
              visibleCards.includes(`card-${index}`) ? 'opacity-100 translate-y-0' : 'translate-y-10'
            }`}
          >
            <div
              className="card-image absolute top-2 w-full h-[21rem] rounded-[20px] rounded-bl-[20px] bg-cover bg-center"
              style={{ backgroundImage: `url(${card.backgroundImage})` }}
            ></div>
            <div className="group relative rounded-[20px] shadow-lg overflow-hidden bg-gradient-to-t from-[#161154] via-[#D871A9]/50 to-transparent transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] min-h-[350px]">
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1977D0]-500 via-[#D871A9]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-800 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>

              {/* Content */}
              <div className="relative z-10 p-6">
                <small className="block uppercase text-gray-800/70 font-semibold tracking-widest mb-2">
                  {card.title}
                </small>
                <h2 className="text-xl font-extrabold text-gray-900 group-hover:mt-6 transition-all duration-800 ease-[cubic-bezier(0.19,1,0.22,1)]">
                  {card.subTitle}
                </h2>
              </div>

              {/* Footer */}
              <div className="absolute top-20 z-10 flex items-center pt-4">
                <div className="absolute w-16 h-16 group-hover:w-20 group-hover:h-20 -top-16 right-2 rounded-xl bg-gradient-to-t from-[#191356] to-blue-50 transition-all duration-800 ease-[cubic-bezier(0.19,1,0.22,1)]">
                  <Image
                    className="absolute object-contain"
                    fill
                    src="/8.png"
                    alt="icon"
                  />
                </div>
                <h6 className="px-6 text-gray-800 text-md group-hover:mt-6 transition-all duration-800 ease-[cubic-bezier(0.19,1,0.22,1)]">
                  {card.info.p}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
