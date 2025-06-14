import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function DetailProduct() {
  return (
    <>
      {/* tampilan atas */}
      <div className="relative min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex justify-center items-center overflow-hidden">
        <div className="absolute w-20 h-20 bg-white opacity-20 rounded-full top-62 left-4"></div>
        <div className="absolute w-50 h-50 bg-white opacity-20 rounded-full bottom-25 right-100"></div>
        <div className="absolute w-150 h-150 bg-white opacity-20 rounded-full -top-50 -right-50"></div>
        <div className="absolute w-50 h-50 bg-white opacity-20 rounded-full -bottom-25 -right-2"></div>
        <div className="flex-1 flex flex-col justify-start p-8 text-white rounded-r-2xl mt-12">
          <h1 className="text-5xl font-bold mb-6">Arta: Catat Keuangan AI</h1>
          <p className="text-2xl text-justify mb-6">
            Atur keuanganmu lewat chat buat anggaran, lacak pengeluaran,
            dapatkan saran.
          </p>
          <div className="flex justify-around">
            <div className="text-center">
              <h2 className="text-4xl font-bold">2rb+</h2>
              <p className="text-white opacity-80">Download</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold">1rb+</h2>
              <p className="text-white opacity-80">Perangkat Aktif</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold">4.9</h2>
              <p className="text-white opacity-80">Review (70+)</p>
            </div>
          </div>
          <a href="#" className="block w-32 mt-12">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="w-32"
            />
          </a>
        </div>

        <div className="flex-1 relative h-full flex items-start">
          <img
            src="/assets/images/pagepd1.png"
            alt="Phone Mockup"
            className="w-auto max-h-full object-cover ml-25"
          />
        </div>
      </div>

      {/* deskripsi dan tampilan fitur utama */}
      <div className="bg-gray-200">
        <motion.div
          className="flex-1 flex flex-col justify-start p-20 text-gray-900 rounded-xl gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h1 className="text-3xl font-bold">
            Arta: Asisten Keuangan Cerdas dengan AI
          </h1>
          <p className="text-lg text-justify">
            ARTA adalah aplikasi manajemen keuangan berbasis AI yang dirancang
            untuk kamu yang ingin mengatur keuangan tanpa ribet. Dengan konsep
            obrolan santai, kamu bisa ngobrol langsung dengan ARTA seperti
            temanmu sendiri!
          </p>
        </motion.div>

        <motion.div
          className="min-h-screen flex justify-center items-center bg-gradient-to-br"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
        >
          <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-lg w-full max-w-6xl flex flex-col lg:flex-row overflow-hidden">
            <motion.div
              className="flex-1 p-8 relative z-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: false }}
            >
              <img
                src="/assets/images/produkarta.png"
                alt="Phone Mockup"
                className="w-full"
              />
            </motion.div>

            <motion.div
              className="flex-1 flex flex-col justify-start p-8 text-white rounded-r-2xl -mt-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: false }}
            >
              <h3 className="text-3xl font-bold pl-19 mb-4">Fitur Utama</h3>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center space-x-4 mb-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                  viewport={{ once: false }}
                >
                  <div className="w-25 h-12 bg-white/20 rounded-lg flex justify-center items-center space-x-4 mb-3">
                    <img
                      src="/assets/images/iconfitur1.png"
                      alt="Icon 1"
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Chat Pintar</h3>
                    <p className="text-sm mt-1">
                      Ngobrol langsung dengan ARTA untuk mencatat pengeluaran,
                      menabung, atau tanya tips keuangan.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 mb-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
                  viewport={{ once: false }}
                >
                  <div className="w-30 h-12 bg-white/20 rounded-lg flex justify-center items-center space-x-4 mb-3">
                    <img
                      src="/assets/images/iconfitur2.png"
                      alt="Icon 2"
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Pengkategorian Otomatis
                    </h3>
                    <p className="text-sm mt-1">
                      ARTA secara otomatis mengelompokkan pengeluaranmu ke dalam
                      kategori seperti makanan, transportasi, atau hiburan.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 mb-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
                  viewport={{ once: false }}
                >
                  <div className="w-16 h-12 bg-white/20 rounded-lg flex justify-center items-center space-x-4 mb-3">
                    <img
                      src="/assets/images/iconfitur3.png"
                      alt="Icon 3"
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Insight Keuangan Personal
                    </h3>
                    <p className="text-sm mt-1">
                      Dapatkan saran keuangan yang sesuai dengan kebutuhanmu.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 mb-3"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
                  viewport={{ once: false }}
                >
                  <div className="w-23 h-12 bg-white/20 rounded-lg flex justify-center items-center space-x-4 mb-3">
                    <img
                      src="/assets/images/iconfitur4.png"
                      alt="Icon 4"
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Laporan Ringkas</h3>
                    <p className="text-sm mt-1">
                      Cek grafik dan rangkuman keuangan dalam tampilan yang
                      menarik dan mudah dipahami.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* kenapa pilih arta */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <div className="bg-gray-200">
          <div className="flex-1 flex flex-col justify-start p-18 text-gray-900 rounded-xl">
            <h1 className="text-3xl font-bold mb-8">Kenapa Pilih Arta?</h1>
            <div className="grid grid-cols-2 gap-4">
              {/* Grup 1 (Muncul lebih dulu) */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
                className="flex items-center space-x-4 mb-3"
              >
                <img
                  src="/assets/images/iconarta1.png"
                  alt="Icon 1"
                  className="w-15 h-15"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Mudah Digunakan</h3>
                  <p className="text-sm">
                    Atur anggaran, pantau pengeluaran, atau buat rencana
                    keuangan hanya dengan mengetik.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
                className="flex items-center space-x-4 mb-3"
              >
                <img
                  src="/assets/images/iconarta2.png"
                  alt="Icon 2"
                  className="w-15 h-15"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Pintar dengan AI</h3>
                  <p className="text-sm">
                    ARTA memahami gaya bicaramu, jadi kamu bebas ngobrol dengan
                    bahasa santai.
                  </p>
                </div>
              </motion.div>

              {/* Grup 2 (Muncul setelah Grup 1) */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: false }}
                className="flex items-center space-x-4 mb-3"
              >
                <img
                  src="/assets/images/iconarta3.png"
                  alt="Icon 3"
                  className="w-15 h-15"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    Laporan Keuangan Otomatis
                  </h3>
                  <p className="text-sm">
                    Semua transaksi dan anggaran disajikan dalam laporan yang
                    mudah dipahami.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: false }}
                className="flex items-center space-x-4 mb-3"
              >
                <img
                  src="/assets/images/iconarta4.png"
                  alt="Icon 4"
                  className="w-15 h-15"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Aman dan Terpercaya</h3>
                  <p className="text-sm">
                    Data keuanganmu dilindungi dengan teknologi enkripsi
                    terbaru.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* siapa yang cocok */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
        className="bg-gray-200 flex justify-center items-center p-15"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
          className="flex-1 p-8 relative z-10"
        >
          <img
            src="/assets/images/pagepd2.png"
            alt="Phone Mockup"
            className="w-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false }}
          className="flex-1 flex flex-col justify-start p-8 rounded-r-2xl mt-12"
        >
          <h3 className="text-2xl font-bold mb-4">
            Siapa yang Cocok Menggunakan Arta?
          </h3>

          <div className="flex items-center mb-2">
            <span className="text-blue-600 mr-2">✓</span>
            <p className="text-lg">
              Mahasiswa yang ingin belajar mengatur uang saku.
            </p>
          </div>

          <div className="flex items-center mb-2">
            <span className="text-blue-600 mr-2">✓</span>
            <p className="text-lg">
              Profesional sibuk yang butuh asisten keuangan pribadi.
            </p>
          </div>

          <div className="flex items-center mb-2">
            <span className="text-blue-600 mr-2">✓</span>
            <p className="text-lg">
              Ibu rumah tangga yang ingin mengatur keuangan keluarga dengan
              lebih efisien.
            </p>
          </div>

          <div className="flex items-center mb-2">
            <span className="text-blue-600 mr-2">✓</span>
            <p className="text-lg">
              Siapa saja yang ingin keuangannya lebih teratur tanpa stress!
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* contoh penggunaan arta */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
        className="bg-gray-200"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
          className="text-3xl h-5 py-20 px-20 font-bold"
        >
          Contoh Penggunaan Arta:
        </motion.div>

        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2 * (index + 1),
            }}
            viewport={{ once: false }}
            className="flex flex-col gap-y-2 mb-10 px-10"
          >
            <div className="px-10 flex gap-4">
              <img
                src="/assets/images/iconpin.png"
                alt=""
                className="w-7 h-7"
              />
              <div>
                <h1 className="font-semibold mb-2">
                  {index === 0
                    ? "Ingin mencatat transaksi baru?"
                    : index === 1
                    ? "Ingin tahu pengeluaran bulan ini?"
                    : "Penasaran kenapa uang habis?"}
                </h1>
                <p>
                  {index === 0
                    ? "Cukup bilang: aku baru beli beras 5kg seharga 54 ribu."
                    : index === 1
                    ? 'Cukup ketik: "berapa total pengeluaran bulan ini?"'
                    : 'Tanya: "uangku banyak habis buat apa bulan ini?"'}
                </p>
              </div>
            </div>
            <div className="px-10 flex gap-4 items-start">
              <img
                src="/assets/images/iconchat.png"
                alt=""
                className="w-7 h-7"
              />
              <p>
                {index === 0
                  ? 'ARTA akan langsung mencatat pengeluaranmu ke kategori yang sesuai, misalnya "Belanja Rumah Tangga."'
                  : index === 1
                  ? "ARTA akan langsung memberikan laporan lengkapmu, termasuk pengelompokan berdasarkan kategori."
                  : "ARTA akan menjelaskan pengeluaranmu berdasarkan kategori seperti makanan, transportasi, atau hiburan."}
              </p>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: false }}
          className="text-lg h-5 py-20 px-20 font-semibold"
        >
          Dengan ARTA, semua jadi mudah—kamu cukup ngobrol santai, dan ARTA akan
          mengurus sisanya. Download Sekarang dan rasakan bedanya!
        </motion.div>
      </motion.div>

      {/* more app */}
      <motion.div
        className="bg-gray-200 text-center py-16"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <motion.h2
          className="text-3xl font-bold text-red-500 text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          More App
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20">
          {[
            {
              title: "Arta : Catat Keuangan AI",
              category: "Productivity",
              image: "/assets/images/produk1.png",
              link: "/detail-product",
            },
            {
              title: "DUEL: Two Player Finger Battle",
              category: "Game",
              image: "/assets/images/produk2.png",
              link: "/our-product",
            },
            {
              title: "Number Mate - Puzzle Number",
              category: "Game",
              image: "/assets/images/produk3.png",
              link: "/our-product",
            },
          ].map((app, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-md"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <img src={app.image} alt="Phone Mockup" className="w-full" />
              <div className="p-4 text-left">
                <p className="text-gray-800 mb-2">{app.category}</p>
                <h3 className="text-gray-900 text-xl font-bold mb-4">
                  {app.title}
                </h3>
                <Link to={app.link}>
                  <button className="bg-red-500 text-white px-4 py-1 rounded-lg shadow-md hover:bg-red-600 transition cursor-pointer flex items-center justify-center space-x-2">
                    Detail
                    <i className="ri-arrow-right-s-line text-xl"></i>
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
export default DetailProduct;
