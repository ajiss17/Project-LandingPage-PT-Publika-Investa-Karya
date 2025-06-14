import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function DetailProject() {
  return (
    <>
      {/* tampilan atas */}
      <div className="relative min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex justify-center items-center overflow-hidden">
        <div className="absolute w-20 h-20 bg-white opacity-20 rounded-full top-70 left-4"></div>
        <div className="absolute w-30 h-30 bg-white opacity-20 rounded-full -bottom-15 -left-8"></div>
        <div className="absolute w-50 h-50 bg-white opacity-20 rounded-full bottom-20 right-95"></div>
        <div className="absolute w-150 h-150 bg-white opacity-20 rounded-full -top-50 -right-50"></div>
        <div className="absolute w-50 h-50 bg-white opacity-20 rounded-full -bottom-25 -right-2"></div>
        <div className="flex-1 flex flex-col justify-start p-8 text-white rounded-r-2xl mt-12">
          <h1 className="text-4xl font-bold mb-6">
            Ajar Mapan—PKBM Padamu negeri
          </h1>
          <p className="text-lg text-justify">
            Platform LMS untuk memfasilitasi kolaborasi antara guru dan murid.
            materi, absensi, raport, dll.
          </p>
          <a href="#" className="block w-32 mt-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="w-32"
            />
          </a>
        </div>

        <div className="flex-1 relative h-full flex items-start">
          <img
            src="/assets/images/pagepj1.png"
            alt="Phone Mockup"
            className="w-auto max-h-full object-cover ml-25"
          />
        </div>
      </div>

      {/* deskripsi dan tampilan fitur utama */}
      <div className="bg-gray-200 py-10">
        <motion.div
          className="flex-1 flex flex-col justify-start p-20 text-gray-900 rounded-xl gap-4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h1 className="text-3xl font-bold">Ajar Mapan—PKBM Padamu Negeri</h1>
          <p className="text-lg text-justify mb-2">
            Ajar Mapan, atau disingkat sebagai Aplikasi Belajar Mandiri Padamu
            Negeri, adalah solusi inovatif yang dibuat sebagai sarana informasi
            dan pembelajaran bagi peserta didik pendidikan kesetaraan di PKBM
            Padamu Negeri.
          </p>
          <p className="text-lg text-justify">
            Aplikasi ini hadir sebagai pendamping yang menguatkan pembelajaran
            tatap muka. Memuat beragam fitur, Ajar Mapan memungkinkan peserta
            didik untuk belajar secara mandiri, sambil tetap terpantau oleh
            tutor atau pengajar dalam melihat perkembangan belajar mereka.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center items-center p-8 bg-gradient-to-br"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-lg w-full max-w-6xl flex flex-col lg:flex-row overflow-hidden">
            <motion.div
              className="flex-1 p-8 relative z-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <img
                src="/assets/images/pagepj2.png"
                alt="Phone Mockup"
                className="w-full"
              />
            </motion.div>
            <motion.div
              className="flex-1 flex flex-col justify-start p-8 text-white rounded-r-2xl -mt-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <h3 className="text-2xl font-bold pl-17 mb-2">Fitur Utama:</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Unggah Materi Guru",
                    desc: "Guru dapat dengan mudah mengunggah materi pembelajaran ke dalam platform untuk diakses oleh peserta didik.",
                    img: "/assets/images/fiturpagepj1.png",
                  },
                  {
                    title: "Akses Materi Murid",
                    desc: "Peserta didik memiliki akses penuh untuk melihat dan mempelajari materi yang diunggah oleh guru, memungkinkan mereka belajar secara mandiri dan efektif.",
                    img: "/assets/images/fiturpagepj2.png",
                  },
                  {
                    title: "Diskusi Interaktif",
                    desc: "Guru dan peserta didik dapat berkomunikasi langsung melalui fitur obrolan atau forum diskusi, memfasilitasi pertukaran ide dan dukungan antar anggota.",
                    img: "/assets/images/fiturpagepj3.png",
                  },
                  {
                    title: "Absensi Murid",
                    desc: "Murid dapat melakukan absensi masuk dan pulang dari aplikasi, untuk memudahkan tracking absensi murid.",
                    img: "/assets/images/fiturpagepj4.png",
                  },
                ].map((fitur, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 mb-3"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: false }}
                  >
                    <div className="w-25 h-12 bg-white/20 rounded-lg flex justify-center items-center space-x-4 mb-3">
                      <img src={fitur.img} alt="Icon" className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{fitur.title}</h3>
                      <p className="text-sm mt-1">{fitur.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* deskripsi */}
      <div className="bg-gray-200">
        <motion.div
          className="flex-1 flex flex-col justify-start p-20 text-gray-900 rounded-xl gap-4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="text-lg text-justify mb-2">
            Jadwal: Peserta didik dapat dengan mudah melihat jadwal pelajaran
            mereka secara real-time, memastikan tidak terlewatkan sesi
            pembelajaran penting.
          </p>
          <p className="text-lg text-justify">
            Ajar Mapan membuka pintu bagi pembelajaran yang lebih fleksibel dan
            terjangkau. Mulailah perjalanan pendidikan Anda yang seru dan
            terarah dengan mengunduh Ajar Mapan sekarang!
          </p>
        </motion.div>
      </div>

      {/* more project */}
      <div className="bg-gray-200 text-center py-16">
        <motion.h2
          className="text-3xl font-bold text-red-500 text-center mb-12"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          More Project
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:px-20">
          {[
            {
              title: "SIAPPEM — KPU PEMALANG",
              image: "/assets/images/gambarkpupml.png",
              link: "/our-project",
            },
            {
              title: "JDIH KPU Pemalang",
              image: "/assets/images/gambarjdihpml.png",
              link: "/our-project",
            },
            {
              title: "JDIH KPU Pemalang",
              image: "/assets/images/gambarjdihpml.png",
              link: "/our-project",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-md"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <img src={project.image} alt="Phone Mockup" className="w-full" />
              <div className="p-4 text-left">
                <h3 className="text-gray-900 text-xl font-bold mb-4">
                  {project.title}
                </h3>
                <Link to={project.link}>
                  <button className="bg-red-500 text-white px-4 py-1 rounded-lg shadow-md hover:bg-red-600 transition cursor-pointer flex items-center justify-center space-x-2">
                    Detail
                    <i className="ri-arrow-right-s-line text-xl"></i>
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
export default DetailProject;
