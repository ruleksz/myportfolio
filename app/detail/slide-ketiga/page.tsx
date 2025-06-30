import Image from "next/image";

export default function SlideKetigaPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
      <p className="mb-6">
        Ini adalah website portofolio pribadi saya, dibuat sepenuhnya tanpa
        framework menggunakan HTML, CSS, dan JavaScript. Project ini merupakan
        refleksi dari perjalanan belajar saya di bidang front-end development,
        serta tempat untuk memamerkan karya-karya terbaik saya.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {["/assets/caraousel/8.png"].map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`Slide ketiga ${i + 1}`}
            width={800}
            height={450}
            className="rounded-lg shadow-lg object-cover w-full"
          />
        ))}
      </div>

      <a
        href="https://github.com/ruleksz/portfolio-03"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg inline-block"
      >
        View Web
      </a>
    </div>
  );
}
