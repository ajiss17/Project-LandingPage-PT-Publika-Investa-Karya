import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const OurProject = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjects();
      setProjects(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const images = [
    "/assets/images/pixelcut-export.png",
    "/assets/images/gambarabirafda.png",
    "/assets/images/gambarkpupml.png",
  ];

  return (
    <>
      {/* tampilan atas dan tombol navigasi */}
      <div className="bg-gray-200 relative w-full max-w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} w-4 h-4 mx-1 rounded-full transition-all 
              ${
                className.includes("swiper-pagination-bullet-active")
                  ? "!bg-white"
                  : "!bg-gray-200"
              }"></span>`,
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="rounded-lg shadow-lg"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* our project dan produknya */}
      <div className="bg-gray-200 min-h-screen p-10">
        <motion.div
          className="text-3xl text-red-500 text-center py-16 font-bold mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h1>Our Project</h1>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center px-4 sm:px-20 space-x-0 sm:space-x-6 mb-30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <img
            src="/assets/images/gambar ajarmapan.jpg"
            alt="PUBLIKA"
            className="w-full sm:w-1/2 lg:w-100 h-auto rounded-2xl"
          />
          <div className="sm:w-1/2">
            <h1 className="text-3xl text-gray-900 font-bold mb-4 text-center sm:text-left">
              Ajar Mapan
            </h1>
            <p className="text-gray-800 text-xl mb-2 text-center sm:text-left">
              Platform LMS untuk memfasilitasi kolaborasi antara guru dan murid.
              Materi, absensi, raport, dll.
            </p>
            <p className="text-red-600 mb-3">MOBILE APP</p>
            <Link to="/detail-project">
              <button className="bg-red-500 text-white px-4 py-1 rounded-lg shadow-md hover:bg-red-600 transition cursor-pointer flex items-center justify-center space-x-2 mx-auto sm:mx-0">
                Detail
                <i className="ri-arrow-right-s-line text-xl"></i>
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center px-4 sm:px-20 space-x-0 sm:space-x-6 mb-30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
        >
          <img
            src="/assets/images/gambarabirafda.png"
            alt="PUBLIKA"
            className="w-full sm:w-1/2 lg:w-100 h-auto rounded-2xl"
          />
          <div className="sm:w-1/2">
            <h1 className="text-3xl text-gray-900 font-bold mb-4 text-center sm:text-left">
              Abirafda Design
            </h1>
            <p className="text-gray-800 text-xl mb-2 text-center sm:text-left">
              Company profile Abirafda Design — Responsive mobile & Perfect
              pixel design.
            </p>
            <p className="text-red-600 mb-3">MOBILE APP</p>
            <Link to="/detail-project">
              <button className="bg-red-500 text-white px-4 py-1 rounded-lg shadow-md hover:bg-red-600 transition cursor-pointer flex items-center justify-center space-x-2 mx-auto sm:mx-0">
                Detail
                <i className="ri-arrow-right-s-line text-xl"></i>
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center px-4 sm:px-20 space-x-0 sm:space-x-6 mb-30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false }}
        >
          <img
            src="/assets/images/gambarkpupml.png"
            alt="PUBLIKA"
            className="w-full sm:w-1/2 lg:w-100 h-auto rounded-2xl"
          />
          <div className="sm:w-1/2">
            <h1 className="text-3xl text-gray-900 font-bold mb-4 text-center sm:text-left">
              SIAPPEM — KPU PEMALANG
            </h1>
            <p className="text-gray-800 text-xl mb-2 text-center sm:text-left">
              Sistem Informasi Administrasi Pemilih Pemalang (SIAPPEM)
            </p>
            <p className="text-red-600 mb-3">MOBILE APP</p>
            <Link to="/detail-project">
              <button className="bg-red-500 text-white px-4 py-1 rounded-lg shadow-md hover:bg-red-600 transition cursor-pointer flex items-center justify-center space-x-2 mx-auto sm:mx-0">
                Detail
                <i className="ri-arrow-right-s-line text-xl"></i>
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center px-4 sm:px-20 space-x-0 sm:space-x-6 mb-30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: false }}
        >
          <img
            src="/assets/images/gambarjdihpml.png"
            alt="PUBLIKA"
            className="w-full sm:w-1/2 lg:w-100 h-auto rounded-2xl"
          />
          <div className="sm:w-1/2">
            <h1 className="text-3xl text-gray-900 font-bold mb-4 text-center sm:text-left">
              JDIH KPU Pemalang
            </h1>
            <p className="text-gray-800 text-xl mb-2 text-center sm:text-left">
              Jaringan Dokumentasi dan Informasi Hukum KPU Kabupaten Pemalang
              (JDIH).
            </p>
            <p className="text-red-600 mb-3">MOBILE APP</p>
            <Link to="/detail-project">
              <button className="bg-red-500 text-white px-4 py-1 rounded-lg shadow-md hover:bg-red-600 transition cursor-pointer flex items-center justify-center space-x-2 mx-auto sm:mx-0">
                Detail
                <i className="ri-arrow-right-s-line text-xl"></i>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default OurProject;
