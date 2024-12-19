import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[url('/fabrika3.gif')] bg-cover bg-top bg-black bg-opacity-80 text-gray-200 pt-24 pb-12">
      <div className="container mx-auto px-6 z-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Ajans Bilgisi */}
          <div>
            <h3 className="text-4xl font-extrabold mb-6 text-pink-400 hover:text-pink-500 transition-colors duration-300">The Fabrica Web Ajansı</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Müşterilerine bulunduğu pazarda büyümesini sağlayacak web tasarım, mobil uygulama, SEO ve dijital pazarlama hizmetleri sunarak dijital dönüşümü hızlandırmakta, müşteri memnuniyetini temel ilkesi kabul etmektedir.
            </p>
            <Link href="/" className="text-blue-400 hover:text-blue-600 text-lg font-semibold">Daha Fazla Bilgi</Link>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-pink-400 hover:text-pink-500 transition-colors duration-300">İletişim</h3>
            <ul className="text-lg space-y-2">
              <li>
                Telefon: 
                <Link href="tel:+905319710448" className="text-blue-400 hover:text-blue-600 transition-colors duration-300">+90 531 971 04 48</Link>
              </li>
              <li>
                Email: 
                <Link href="mailto:info@sardalya.net" className="text-blue-400 hover:text-blue-600 transition-colors duration-300">info@sardalya.net</Link>
              </li>
              <li>Adres: 123 Yazılım Caddesi, Teknoloji Parkı, Şehir</li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-pink-400 hover:text-pink-500 transition-colors duration-300">Hizmetlerimiz</h3>
            <ul className="text-lg space-y-2">
              <li>Web Tasarım</li>
              <li>e-Ticaret Yazılımları</li>
              <li>SEO</li>
              <li>Mobil Uygulama</li>
              <li>Reklam ve Tanıtım</li>
              <li>Web Hosting</li>
              <li>Bakım ve Geliştirme</li>
            </ul>
          </div>

          {/* Siteniz İçin Hizmetler */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-pink-400 hover:text-pink-500 transition-colors duration-300">Siteniz İçin</h3>
            <ul className="text-lg space-y-2">
              <li>Kurumsal Web Tasarım</li>
              <li>e-Ticaret</li>
              <li>SEO</li>
              <li>Reklam ve Tanıtım</li>
              <li>Bakım ve Geliştirme</li>
              <li>İçerik Yönetimi</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-300">
            &copy; 2024 The Fabrica Web Ajansı. Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
