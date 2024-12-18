import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[url('/bg.gif')] bg-cover bg-center text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Ajans Bilgisi */}
          <div>
            <h3 className="text-2xl font-bold mb-4">The Fabrica Web Ajansı</h3>
            <p className="text-gray-400">
              Müşterilerine bulunduğu pazarda büyümesini sağlayacak web tasarım, mobil uygulama, SEO ve dijital pazarlama hizmetleri sunarak dijital dönüşümü hızlandırmakta, müşteri memnuniyetini temel ilkesi kabul etmektedir.
            </p>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-xl font-semibold mb-4">İletişim</h3>
            <ul className="text-gray-400">
              <li>Telefon: <a href="tel:+905319710448" className="text-blue-400 hover:text-blue-600">+90 531 971 04 48</a></li>
              <li>Email: <a href="mailto:info@sardalya.net" className="text-blue-400 hover:text-blue-600">info@sardalya.net</a></li>
              <li>Adres: 123 Yazılım Caddesi, Teknoloji Parkı, Şehir</li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hizmetlerimiz</h3>
            <ul className="text-gray-400">
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
            <h3 className="text-xl font-semibold mb-4">Siteniz İçin</h3>
            <ul className="text-gray-400">
              <li>Kurumsal Web Tasarım</li>
              <li>e-Ticaret</li>
              <li>SEO</li>
              <li>Reklam ve Tanıtım</li>
              <li>Bakım ve Geliştirme</li>
              <li>İçerik Yönetimi</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Sardalya Web Ajansı. Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
