import SectionTitle from "@/components/common/SectionTitle";
import React, { useEffect, useState } from "react";

const cardData = [
  {
    backgroundImage: "/33.png",
    title: "Web Tasarım",
    subTitle: "Profesyonel Web Tasarım",
    info: {
      p: "Kullanıcı dostu ve modern tasarımlar ile markanızın dijital dünyada güçlü bir varlık oluşturmasına yardımcı oluyoruz.",
    },
  },
  {
    backgroundImage: "/33.png",
    title: "e-Ticaret Yazılımları",
    subTitle: "Etkili e-Ticaret Çözümleri",
    info: {
      p: "E-ticaret platformları ve entegrasyonları ile ürünlerinizi çevrimiçi dünyada başarıyla satmanıza olanak sağlıyoruz.",
    },
  },
  {
    backgroundImage: "/33.png",
    title: "SEO",
    subTitle: "Arama Motoru Optimizasyonu",
    info: {
      p: "SEO stratejileri ile web sitenizin organik sıralamalarda yükselmesine ve daha fazla hedef kitleye ulaşmasına yardımcı oluyoruz.",
    },
  },
  {
    backgroundImage: "/33.png",
    title: "Mobil Uygulama",
    subTitle: "Mobil Uygulama Geliştirme",
    info: {
      p: "Kullanıcı deneyimini ön planda tutarak Android ve iOS için mobil uygulamalar geliştiriyoruz.",
    },
  },
  {
    backgroundImage: "/33.png",
    title: "Reklam ve Tanıtım",
    subTitle: "Dijital Pazarlama ve Reklam",
    info: {
      p: "Dijital pazarlama çözümleri ile markanızı hedef kitlenize tanıtıyor ve çevrimiçi görünürlüğünüzü artırıyoruz.",
    },
  },
  {
    backgroundImage: "/33.png",
    title: "Web Hosting",
    subTitle: "Güvenli ve Hızlı Hosting",
    info: {
      p: "Web siteniz için hızlı, güvenli ve kesintisiz hosting çözümleri sunuyoruz.",
    },
  },
  {
    backgroundImage: "/33.png",
    title: "Bakım ve Geliştirme",
    subTitle: "Web Siteleri Bakımı",
    info: {
      p: "Web sitenizin güncel kalmasını sağlıyor, bakım ve geliştirme hizmetleri ile sürekli performansını artırıyoruz.",
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
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll(".service-card");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="container mx-auto py-10">
      <SectionTitle title="Hizmetlerimiz" color="black" />
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            id={`card-${index}`}
            className={`service-card relative opacity-0 transition-all duration-1000 ease-in-out transform cursor-pointer ${
              visibleCards.includes(`card-${index}`)
                ? "opacity-100 translate-y-0"
                : "translate-y-10"
            }`}
          >
            {/* Kart Görseli */}
            <div
              className="card-image absolute top-2 w-full h-[21.4rem] rounded-[20px] bg-cover bg-center"
              style={{ backgroundImage: `url(${card.backgroundImage})` }}
            ></div>
    
            {/* Kart İçeriği */}
            <div className="group relative rounded-[20px] shadow-lg bg-gradient-to-t from-[#000033] via-[#C200B0]/60 to-white transition-all duration-500 ease-in-out min-h-[350px] hover:shadow-2xl hover:scale-105">
              <div className="absolute rounded-[20px] inset-0 bg-gradient-to-t from-[#090838] via-[#C200B0]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-800 ease-in-out"></div>
    
              <div className="relative z-10 px-4 py-8">
                {/* Kart Başlığı */}
                <small className="block uppercase text-gray-500 font-semibold tracking-wider mb-2 group-hover:text-[#451F75] transition-all duration-300">
                  {card.title}
                </small>
                <h2 className="text-3xl font-extrabold text-gray-800 group-hover:pt-4 group-hover:text-white transition-all duration-700 ease-in-out leading-tight">
                  {card.subTitle}
                </h2>
              </div>
    
              {/* Açıklama Metni */}
              <div className="absolute top-20 z-10 flex items-center pt-16">
                <h6 className="px-4 text-black group-hover:text-white transition-all duration-700 ease-in-out text-md leading-relaxed tracking-wide group-hover:text-gray-50 group-hover:mt-4 transition-all duration-800 ease-in-out">
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
