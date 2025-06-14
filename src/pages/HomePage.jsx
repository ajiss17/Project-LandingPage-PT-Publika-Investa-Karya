import poto1 from "/assets/images/timpublika.jpg";
import poto3 from "/assets/images/produk1.png";
import poto4 from "/assets/images/produk2.png";
import poto5 from "/assets/images/produk3.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function scrollToOurServices() {
  const element = document.getElementById("our-services");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

const homepage = () => {
  return (
    <>
      {/* bg merah */}
      <div className="bg-gray-200 flex justify-center py-12">
        <div className="relative bg-red-500 rounded-3xl w-[1278px] h-[501px] flex items-center px-8 overflow-hidden">
          <div className="absolute w-90 h-90 bg-white opacity-20 rounded-full -bottom-55 -left-5"></div>
          <div className="absolute w-30 h-30 bg-white opacity-20 rounded-full bottom-7 right-140"></div>
          <div className="absolute w-80 h-80 bg-white opacity-20 rounded-full -top-20 -right-20"></div>
          <section className="flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-lg">
              <h1 className="text-4xl font-bold text-white mb-4">
                PT Publika Investa Karya
              </h1>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Help everyone in the world to have useful apps &amp; realize
                their full potential.
              </h2>
              <div className="flex space-x-4">
                <Link to="/contact-us">
                  <button className="bg-white text-red-500 px-6 py-2 rounded-lg shadow-md hover:bg-gray-300 transition cursor-pointer">
                    Hubungi Kami
                  </button>
                </Link>
                <button
                  onClick={scrollToOurServices}
                  className=" text-white px-6 py-2 rounded-lg border-2 border-white shadow-md hover:bg-white hover:text-red-500 transition cursor-pointer"
                >
                  Layanan Kami
                </button>
              </div>
            </div>
            <div className="relative z-10 w-[600px] h-[400px] flex justify-end">
              <img
                src={poto1}
                alt="poto1"
                className="w-full h-full object-cover rounded-3xl shadow-lg"
                style={{ marginRight: "-100px" }}
              />
            </div>
          </section>
        </div>
      </div>

      {/* about us */}
      <div className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-3xl font-bold text-red-500 text-center mb-12"
          >
            About Us
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="w-full md:w-1/2"
            >
              <img
                src={poto1}
                alt="poto1"
                className="rounded-lg shadow-lg w-[550px] h-[300px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false }}
              className="w-full md:w-1/2 space-y-4"
            >
              <h3 className="text-2xl font-semibold">
                PT Publika Investa Karya
              </h3>
              <p className="text-black leading-relaxed text-justify">
                PT Publika Investa Karya (Publika) adalah perusahaan teknologi
                yang fokus pada pengembangan solusi perangkat lunak inovatif,
                IoT, dan Kecerdasan Buatan (AI). Kami mengembangkan
                produk-produk unggulan dan juga menyediakan layanan pengembangan
                solusi kustom untuk klien, selaras dengan alam dan kehidupan
                sehari-hari.
              </p>
              <Link to="/about-us">
                <motion.button
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: false }}
                  className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition cursor-pointer flex items-center justify-center space-x-2"
                >
                  Lihat Selengkapnya
                  <i className="ri-arrow-right-s-line text-xl"></i>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* our servis */}
      <div id="our-services" className="bg-gray-200 text-center py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-3xl font-bold text-red-500 text-center mb-12"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "/assets/images/iconservis1.png",
                title: "PEMBUATAN PERANGKAT LUNAK",
                text: "Kami mengembangkan solusi perangkat lunak berkualitas untuk web, aplikasi mobile, dan desktop yang disesuaikan dengan kebutuhan unik Anda. Dari desain hingga implementasi, kami memberikan aplikasi yang efisien, mudah digunakan, dan dapat diintegrasikan dengan berbagai platform.",
              },
              {
                img: "/assets/images/iconservis2.png",
                title: "PELATIHAN TEKNOLOGI DAN PENGEMBANGAN KETERAMPILAN",
                text: "Kami menawarkan program pelatihan praktis dalam berbagai teknologi terbaru, seperti perangkat lunak, IoT, dan Kecerdasan Buatan (AI). Pelatihan kami dirancang untuk memberdayakan individu dan tim dengan keterampilan yang relevan untuk menghadapi tantangan industri masa depan.",
              },
              {
                img: "/assets/images/iconservis3.png",
                title: "PRODUK INOVATIF KAMI",
                text: "Produk kami meliputi solusi teknologi yang mengintegrasikan dunia digital dengan kehidupan sehari-hari. Kami mengembangkan aplikasi dan sistem berbasis AI dan IoT yang dirancang untuk meningkatkan efisiensi, kenyamanan, dan mencapai potensi terbaik penggunanya.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: false }}
                className="group p-6 rounded-2xl shadow-md cursor-pointer bg-white text-red-500 hover:bg-red-500 hover:text-white transition-all"
              >
                <div className="flex items-center justify-center mb-6">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-16 h-16 transition-all group-hover:filter group-hover:brightness-0 group-hover:invert"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-800 text-center group-hover:text-white leading-relaxed">
                  {service.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* produk arta */}
      <div className="min-h-screen bg-gray-200 flex justify-center items-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="relative bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-lg w-full max-w-5xl flex flex-col lg:flex-row overflow-hidden"
        >
          <div className="absolute w-120 h-120 bg-white opacity-20 rounded-full bottom-o left-4"></div>
          <div className="absolute w-25 h-25 bg-white opacity-20 rounded-full top-54 right-80"></div>
          <div className="absolute w-50 h-50 bg-white opacity-20 rounded-full -top-20 -right-20"></div>
          <div className="absolute w-80 h-80 bg-white opacity-20 rounded-full -bottom-20 -right-20"></div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
            className="flex-1 p-8 relative z-10"
          >
            <img
              src="/assets/images/produkarta.png"
              alt="Phone Mockup"
              className="w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
            className="flex-1 flex flex-col justify-start p-8 text-white rounded-r-2xl mt-12"
          >
            <h1 className="text-3xl font-bold mb-4">Arta: Catat Keuangan AI</h1>
            <p className="text-lg mb-4">
              Atur keuanganmu lewat chat: buat anggaran, lacak pengeluaran,
              dapatkan saran.
            </p>
            <p className="mb-8 z-10">
              Arta adalah aplikasi berbasis AI yang mempermudah pencatatan
              pengeluaran, pengaturan anggaran, dan laporan keuangan secara
              otomatis. Praktis dan mudah digunakan untuk semua kebutuhan
              keuanganmu.
            </p>
            <div className="mt-2">
              <a
                href="#"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="w-32"
                />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* our produk */}
      <div className="bg-gray-200 text-center py-16">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-3xl font-bold text-red-500 text-center mb-12"
        >
          Our Product
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16">
          {[
            {
              img: poto3,
              title: "Arta : Catat Keuangan AI",
              desc: "Atur keuanganmu lewat chat: buat anggaran, lacak pengeluaran, dapatkan saran.",
            },
            {
              img: poto4,
              title: "DUEL: Two Player Finger Battle",
              desc: "Two Player Finger Tap Battle—Tantang Temanmu! Dua pemain dalam satu perangkat.",
            },
            {
              img: poto5,
              title: "Number Mate - Puzzle Number",
              desc: "Jumlahkan nomor agar sesuai target. Asah kemampuan matematika. Puzzle Game.",
            },
          ].map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: false }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden"
            >
              <img alt={product.title} className="w-full" src={product.img} />
              <div className="p-4">
                <h3 className="text-gray-900 text-xl font-bold text-left">
                  {product.title}
                </h3>
                <p className="mt-2 text-gray-800 text-left">{product.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center items-center py-8">
          <Link to="/our-product">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: false }}
              className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition cursor-pointer flex items-center justify-center space-x-2"
            >
              Lihat Lainnya
              <i className="ri-arrow-right-s-line text-xl"></i>
            </motion.button>
          </Link>
        </div>
      </div>

      {/* keunggulan kami */}
      <div className="bg-red-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-3xl text-white font-bold text-center mb-8"
          >
            KEUNGGULAN KAMI
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-16">
          {[
            {
              img: "/assets/images/iconkeunggulan1.png",
              title: "FOKUS PADA KLIEN",
              desc: "Kami tidak sekadar mendengar, tapi benar-benar memahami kebutuhan unik Anda untuk memberikan solusi yang tepat.",
            },
            {
              img: "/assets/images/iconkeunggulan2.png",
              title: "TEKNOLOGI TERBARU",
              desc: "Lupakan teknologi usang, kami menggunakan teknologi terbaru, mengutamakan keamanan untuk solusi lebih cepat dan efektif.",
            },
            {
              img: "/assets/images/iconkeunggulan3.png",
              title: "KOMITMEN PADA KUALITAS",
              desc: "Kami selalu berusaha mencapai hasil terbaik, memastikan setiap proyek mencapai standar tertinggi.",
            },
            {
              img: "/assets/images/iconkeunggulan4.png",
              title: "DUKUNGAN PROFESIONAL",
              desc: "Tim kami yang ahli siap memberikan dukungan penuh di setiap langkah Anda, memastikan solusi yang tepat dan efektif.",
            },
            {
              img: "/assets/images/iconkeunggulan5.png",
              title: "EFISIENSI PROSES",
              desc: "Kami memastikan proyek selesai tepat waktu dengan pendekatan yang terstruktur dan terorganisir.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false }}
              className="bg-white p-10 rounded-2xl shadow-2xl flex flex-col items-center text-center space-y-6"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 filter invert"
              />
              <h3 className="text-2xl text-gray-800 font-semibold">
                {item.title}
              </h3>
              <p className="text-gray-800">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* faq */}
      <div>
        <div
          id="faq"
          className="text-3xl text-red-500 text-center font-semibold py-16 bg-gray-200 mb-[-40px]"
        >
          Frequently Asked Question
        </div>
        <div className="px-4 bg-gray-200 py-16">
          <div className="collapse collapse-arrow bg-white border border-black my-2">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl text-black font-medium peer-checked:bg-white">
              Layanan apa saja yang ditawarkan oleh perusahaan ini?
            </div>
            <div className="collapse-content">
              <p className="text-black">Mulai dari pembuatan perangkat lunak dan masih banyak yang lain</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white border border-black my-2">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl text-black font-medium peer-checked:bg-white">
              Bagaimana skema kerjasama dengan Publika?
            </div>
            <div className="collapse-content">
              <p className="text-black">hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white border border-black my-2">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl text-black font-medium peer-checked:bg-white">
              Apa yang perlu dipersiapkan sebelum menghubungi Publika?
            </div>
            <div className="collapse-content">
              <p className="text-black">hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white border border-black my-2">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl text-black font-medium peer-checked:bg-white">
              Apakah tersedia daftar harga?
            </div>
            <div className="collapse-content">
              <p className="text-black">hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white border border-black my-2">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl text-black font-medium peer-checked:bg-white">
              Teknologi apa yang digunakan?
            </div>
            <div className="collapse-content">
              <p className="text-black">hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white border border-black my-2">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl text-black font-medium peer-checked:bg-white">
              Apakah layanan dukungan tersedia setelah proyek selesai?
            </div>
            <div className="collapse-content">
              <p className="text-black">hello</p>
            </div>
          </div>
           
        </div>
      </div>
    </>
  );
};

export default homepage;
