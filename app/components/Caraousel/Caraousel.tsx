"use client";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

const images = [
  {
    src: "/assets/caraousel/1.png",
    title: "Landing Page | Twinscc",
    description:
      "Landing page responsif dengan animasi interaktif menggunakan JavaScript. Dirancang mobile-friendly dan cepat diakses pada semua perangkat.",
    github: "https://github.com/ruleksz/landing-page-ads",
    slug: "slide-pertama",
  },
  {
    src: "/assets/caraousel/5.png",
    title: "Company Profile | Warung Berkah",
    description:
      "Company Profile Website HTML, CSS, JavaScript | Web statis responsif untuk menampilkan informasi perusahaan secara profesional.",
    github: "https://github.com/ruleksz/webInfras",
    slug: "slide-kedua",
  },
  {
    src: "/assets/caraousel/8.png",
    title: "Portfolio",
    description:
      "Portofolio responsif yang dilengkapi dengan efek animasi ringan, filter project, dan tampilan dark mode. Dikembangkan tanpa library eksternal, mengutamakan performa dan estetika.",
    github: "https://github.com/ruleksz/portfolio-03",
    slug: "slide-ketiga",
  },
  {
    src: "/assets/caraousel/10.png",
    title: "Sistem Akademik",
    description:
      "Aplikasi Sistem Akademik fullstack menggunakan Laravel sebagai backend dan Blade templating engine untuk frontend.Fitur utama meliputi CRUD data mahasiswa, relasi antara dosen dan mahasiswa, penjadwalan mata kuliah. Dengan menggunakan template AdminLTE.",
    github: "https://github.com/ruleksz/uas-laravel",
    slug: "slide-keempat",
  },
];

export default function CarouselWithDescription() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  return (
    <div className="w-full max-w-6xl mx-auto p-6 h-[500px] bg-gray-900 text-white rounded-2xl shadow-2xl flex flex-col md:flex-row gap-6 items-center">
      {/* Carousel */}
      <div className="relative w-full md:w-2/3 overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={`Slide ${index + 1}`}
              className="w-full flex-shrink-0 h-[450px] object-cover"
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/80"
        >
          <span className="text-white text-lg">◀</span>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/80"
        >
          <span className="text-white text-lg">▶</span>
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="w-full md:w-1/3 space-y-4 text-center md:text-left">
        <h2 className="text-2xl font-bold">{images[current].title}</h2>
        <p className="text-gray-300">{images[current].description}</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <a
            href={`/detail/${images[current].slug}/`}
            className="bg-[#c6f10e] text-black items-center flex transition px-5 py-2 rounded-lg font-medium"
          >
            Lihat Detail
          </a>
          <a
            href={images[current].github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center text-[#c6f10e] hover:text-gray-400 transition text-lg border rounded-lg px-8 py-2 "
            aria-label="GitHub"
          >
            <span>GitHub</span>
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
