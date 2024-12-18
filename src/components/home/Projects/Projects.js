"use client";
import React, { useState } from "react";
import Image from "next/image"; // Next.js için Image componenti
import SectionTitle from "@/components/common/SectionTitle";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "E-Ticaret Platformu",
    description: "Modern bir e-ticaret platformu, kullanıcı dostu tasarımıyla tamamlandı.",
    image: "/images/ecommerce.png"
  },
  {
    id: 2,
    title: "Kurumsal Web Sitesi",
    description: "Kurumsal kimliği öne çıkaran, profesyonel bir web sitesi geliştirildi.",
    image: "/images/corporate.png"
  },
  {
    id: 3,
    title: "Mobil Uygulama",
    description: "Android ve iOS uyumlu, performans odaklı bir mobil uygulama tamamlandı.",
    image: "/images/mobileapp.png"
  },
  {
    id: 4,
    title: "Blog Platformu",
    description: "Kapsamlı özelliklere sahip bir blog platformu geliştirilmiştir.",
    image: "/images/blog.png"
  },
  {
    id: 5,
    title: "Portföy Sitesi",
    description: "Kişisel portföylerinizi sergileyebileceğiniz şık bir site.",
    image: "/images/portfolio.png"
  },
  {
    id: 6,
    title: "Sağlık Uygulaması",
    description: "Sağlık takibi için kullanıcı dostu bir mobil uygulama.",
    image: "/images/healthapp.png"
  },
  {
    id: 7,
    title: "Eğitim Platformu",
    description: "Online eğitim vermek için gelişmiş bir platform.",
    image: "/images/education.png"
  },
  {
    id: 8,
    title: "Yemek Sipariş Uygulaması",
    description: "Restoranlar için kullanıcı dostu bir yemek sipariş uygulaması.",
    image: "/images/foodapp.png"
  },
  {
    id: 9,
    title: "Finansal Takip Uygulaması",
    description: "Bütçe ve gider takibi için kullanışlı bir mobil uygulama.",
    image: "/images/financeapp.png"
  },
  {
    id: 10,
    title: "Sosyal Medya Platformu",
    description: "Kullanıcıların etkileşimde bulunabileceği bir sosyal medya platformu.",
    image: "/images/socialapp.png"
  }
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  // Sayfalama işlemi
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Sayfa numaralarını hesapla
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // Sayfa numaralarını oluşturma (dinamik olarak)
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Daha gelişmiş sayfa aralığı (örneğin: 1, 2, 3, ..., 10)
  const renderPageNumbers = pageNumbers.map((number) => {
    if (
      number === 1 ||
      number === totalPages ||
      (number >= currentPage - 2 && number <= currentPage + 2)
    ) {
      return (
        <li
          key={number}
          className={`px-4 py-2 cursor-pointer rounded-md transition-all duration-300 ease-in-out ${
            currentPage === number
              ? "bg-gradient-to-r from-[#191356] to-indigo-400 text-white"
              : "bg-white text-indigo-600 hover:bg-indigo-100 hover:text-indigo-700"
          }`}
          onClick={() => handlePageClick(number)}
        >
          {number}
        </li>
      );
    }
    if (number === currentPage - 3 || number === currentPage + 3) {
      return <li key={number} className="px-4 py-2">...</li>;
    }
    return null;
  });

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto py-8 px-4 mt-[28rem]">
      <SectionTitle title="Projelerimiz" color="black" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-2">
          {currentProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-md p-4 hover:shadow-lg hover:-mt-2">
              <Image
                src="/8.png"
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover rounded-md"
              />
              <div>
                <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                <p className="text-sm mt-2">{project.description}</p>
                <div className="flex gap-1 items-center mt-2">
                  <FaLink />
                  <Link href="#" className="underline">
                    Proje Linki
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-[#191356] text-white rounded-md mr-4 disabled:opacity-50 hover:bg-[#191356] transition duration-300"
          >
            Önceki
          </button>

          <ul className="flex gap-2">
            {renderPageNumbers}
          </ul>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-[#191356] text-white rounded-md ml-4 disabled:opacity-50 hover:bg-[#191356] transition duration-300"
          >
            Sonraki
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
