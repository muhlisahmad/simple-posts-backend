import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const data = await prisma.post.createMany({
    data: [
      {
        title: "Masa Depan Teknologi di Dunia yang Berubah Cepat",
        content:
          "Dalam artikel ini, kita mengeksplorasi berbagai kemajuan dalam teknologi yang akan membentuk masa depan kita. Dari kecerdasan buatan hingga blockchain, lanskap teknologi berubah dengan cepat, dan memahami perubahan ini sangat penting untuk tetap unggul di era digital.",
        category: "Tech",
        status: "publish",
      },
      {
        title: "Memahami Dasar-dasar Kesehatan Mental dan Kesejahteraan",
        content:
          "Kesehatan mental adalah aspek penting dari kesejahteraan kita secara keseluruhan, namun sering diabaikan. Dalam artikel ini, kita membahas dasar-dasar kesehatan mental, pentingnya kesejahteraan mental, dan memberikan tips tentang cara menjaga pikiran yang sehat di lingkungan yang penuh tekanan saat ini.",
        category: "Health",
        status: "draft",
      },
      {
        title: "Destinasi Wisata Terbaik untuk Jiwa Petualang",
        content:
          "Bagi mereka yang mencari petualangan, dunia penuh dengan destinasi menarik yang menunggu untuk dijelajahi. Artikel ini menyoroti beberapa tempat wisata terbaik untuk para pecinta petualangan, dari puncak Himalaya hingga kedalaman hutan hujan Amazon.",
        category: "Travel",
        status: "publish",
      },
      {
        title: "Mengelola Keuangan Anda di Masa yang Tidak Pasti",
        content:
          "Manajemen keuangan adalah keterampilan penting, terutama di masa yang tidak pasti. Dalam artikel ini, kami memberikan strategi dan saran tentang cara mengelola keuangan Anda secara efektif, memastikan Anda dapat menghadapi badai ekonomi apa pun yang datang.",
        category: "Finance",
        status: "thrash",
      },
      {
        title: "Evolusi Pendidikan di Abad ke-21",
        content:
          "Pendidikan mengalami transformasi signifikan di abad ke-21. Dengan munculnya teknologi dan metode pengajaran baru, model pendidikan tradisional terus berkembang. Artikel ini mengeksplorasi perubahan-perubahan ini dan apa artinya bagi masa depan pembelajaran.",
        category: "Education",
        status: "publish",
      },
      {
        title: "Tren Terbaru dalam Kecerdasan Buatan",
        content:
          "Kecerdasan buatan adalah salah satu bidang teknologi yang berkembang paling cepat. Artikel ini membahas tren terbaru dalam AI, termasuk perkembangan baru dalam pembelajaran mesin, pemrosesan bahasa alami, dan robotika, serta apa arti semua ini bagi masa depan.",
        category: "Tech",
        status: "draft",
      },
      {
        title: "Pentingnya Kesehatan Fisik dan Kebugaran",
        content:
          "Kesehatan fisik sama pentingnya dengan kesehatan mental, dan menjaga gaya hidup seimbang adalah kunci kesejahteraan secara keseluruhan. Dalam artikel ini, kami memberikan tips dan saran tentang cara tetap bugar dan sehat secara fisik, termasuk rutinitas olahraga dan rekomendasi diet.",
        category: "Health",
        status: "publish",
      },
      {
        title: "Menjelajahi Lanskap Alam Terindah di Dunia",
        content:
          "Dunia penuh dengan lanskap alam yang menakjubkan yang merupakan bukti keindahan planet kita. Artikel ini membawa Anda dalam perjalanan melalui beberapa keajaiban alam paling menakjubkan, dari Grand Canyon hingga Great Barrier Reef.",
        category: "Travel",
        status: "draft",
      },
      {
        title: "Strategi Investasi untuk Keberhasilan Keuangan Jangka Panjang",
        content:
          "Investasi adalah komponen kunci dalam membangun kekayaan jangka panjang, namun memerlukan perencanaan dan strategi yang matang. Artikel ini membahas berbagai strategi investasi yang dapat membantu Anda mencapai keberhasilan keuangan jangka panjang, termasuk investasi di pasar saham, real estat, dan lainnya.",
        category: "Finance",
        status: "publish",
      },
      {
        title: "Metode Pengajaran Inovatif yang Mengubah Ruang Kelas",
        content:
          "Pendidikan berkembang dengan diperkenalkannya metode pengajaran inovatif yang mengubah ruang kelas di seluruh dunia. Artikel ini mengeksplorasi pendekatan baru ini, termasuk pembelajaran berbasis proyek, flipped classrooms, dan penggunaan teknologi dalam pendidikan.",
        category: "Education",
        status: "thrash",
      },
    ],
  });
  console.log({ data });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
