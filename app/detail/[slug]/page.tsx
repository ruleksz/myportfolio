import Image from "next/image";

// Data statis
const detailData: Record<
  string,
  {
    title: string;
    description: string;
    github: string;
    images?: string[];
  }
> = {
  "slide-pertama": {
    title: "Landing Page | Twinscc",
    description:
      "Project ini adalah landing page sederhana yang saya buat menggunakan HTML, CSS, dan JavaScript murni. Proyek ini membantu saya memahami struktur web, styling responsif, dan dasar-dasar interaktivitas di sisi client.",
    github: "https://ruleksz.github.io/landing-page-ads/",
    images: [
      "/assets/caraousel/1.png",
      "/assets/caraousel/3.png",
      "/assets/caraousel/4.png",
    ],
  },
  "slide-kedua": {
    title: "Company Profile | Warung Berkah",
    description:
      "Website company profile yang saya kembangkan menggunakan HTML, CSS, dan JavaScript. Menampilkan informasi perusahaan secara elegan, responsif di berbagai perangkat, serta dilengkapi dengan halaman tentang, layanan, dan kontak.",
    github: "https://ruleksz.github.io/webInfras/",
    images: [
      "/assets/caraousel/5.png",
      "/assets/caraousel/6.png",
      "/assets/caraousel/7.png",
    ],
  },
  "slide-ketiga": {
    title: "Portfolio",
    description:
      "Ini adalah website portofolio pribadi saya, dibuat sepenuhnya tanpa framework menggunakan HTML, CSS, dan JavaScript. Project ini merupakan refleksi dari perjalanan belajar saya di bidang front-end development, serta tempat untuk memamerkan karya-karya terbaik saya.",
    github: "https://ruleksz.github.io/portfolio-03/",
    images: ["/assets/caraousel/8.png"],
  },
  "slide-keempat": {
    title: "Sistem Akademik",
    description:
      "Project ini adalah sistem akademik berbasis Laravel yang saya buat sebagai Project UAS membangun aplikasi web berskala menengah. Menggunakan fitur bawaan Laravel seperti Eloquent ORM, middleware, validasi form, serta autentikasi admin untuk mengelola data akademik secara terpusat.",
    github: "#",
    images: ["/assets/caraousel/9.png", "/assets/caraousel/10.png"],
  },
};

// ✅ Tambahkan ini untuk Next.js App Router
export default async function DetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const detail = detailData[params.slug];

  if (!detail) {
    return <div className="p-10 text-white">404 - Data tidak ditemukan</div>;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-3xl font-bold mb-4">{detail.title}</h1>
      <p className="mb-6">{detail.description}</p>

      {detail.images && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
          {detail.images.map((image, idx) => (
            <Image
              key={idx}
              src={image}
              alt={`${detail.title} ${idx + 1}`}
              width={800}
              height={450}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          ))}
        </div>
      )}

      <a
        href={detail.github}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg inline-block"
      >
        View Web
      </a>
    </div>
  );
}
