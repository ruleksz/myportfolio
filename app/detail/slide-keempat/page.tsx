import Image from "next/image";

export default function SlideKeempatPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-3xl font-bold mb-4">Sistem Akademik</h1>
      <p className="mb-6">
        Project ini adalah sistem akademik berbasis Laravel yang saya buat
        sebagai Project UAS. Menggunakan fitur bawaan Laravel seperti Eloquent
        ORM, middleware, validasi form, serta autentikasi admin untuk mengelola
        data akademik secara terpusat.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {["/assets/caraousel/9.png", "/assets/caraousel/10.png"].map(
          (img, i) => (
            <Image
              key={i}
              src={img}
              alt={`Slide keempat ${i + 1}`}
              width={800}
              height={450}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          )
        )}
      </div>

      <a
        href="https://github.com/ruleksz/uas-laravel"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg inline-block"
      >
        View Web
      </a>
    </div>
  );
}
