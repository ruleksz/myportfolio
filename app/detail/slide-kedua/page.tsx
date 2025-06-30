import Image from "next/image";

export default function SlideKeduaPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-3xl font-bold mb-4">
        Company Profile | Warung Berkah
      </h1>
      <p className="mb-6">
        Website company profile yang saya kembangkan menggunakan HTML, CSS, dan
        JavaScript. Menampilkan informasi perusahaan secara elegan, responsif di
        berbagai perangkat, serta dilengkapi dengan halaman tentang, layanan,
        dan kontak.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
        {[
          "/assets/caraousel/5.png",
          "/assets/caraousel/6.png",
          "/assets/caraousel/7.png",
        ].map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`Slide kedua ${i + 1}`}
            width={800}
            height={450}
            className="rounded-lg shadow-lg object-cover w-full"
          />
        ))}
      </div>

      <a
        href="https://github.com/ruleksz/webInfras"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg inline-block"
      >
        View Web
      </a>
    </div>
  );
}
