import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getProducts } from "../../api";
import { motion } from "framer-motion";

const OurProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const images = [
    "/assets/images/produk1.png",
    "/assets/images/produk2.png",
    "/assets/images/produk3.png",
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

      {/* our product dan produknya */}
      <div className="bg-gray-200 min-h-screen p-10">
        <motion.div
          className="text-3xl text-red-500 text-center py-16 font-bold mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h1>Our Product</h1>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center px-4 sm:px-20 space-x-0 sm:space-x-6 mb-30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <img
            src="/assets/images/produk1.png"
            alt="PUBLIKA"
            className="w-full sm:w-1/2 lg:w-100 h-auto rounded-2xl"
          />
          <div className="sm:w-1/2">
            <h1 className="text-3xl text-gray-900 font-bold mb-4 text-center sm:text-left">
              Arta : Catat Keuangan AI
            </h1>
            <p className="text-gray-800 text-xl mb-2 text-center sm:text-left">
              Atur keuanganmu lewat chat: buat anggaran, lacak pengeluaran,
              dapatkan saran.
            </p>
            <Link to="/detail-product">
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
            src="/assets/images/produk2.png"
            alt="PUBLIKA"
            className="w-full sm:w-1/2 lg:w-100 h-auto rounded-2xl"
          />
          <div className="sm:w-1/2">
            <h1 className="text-3xl text-gray-900 font-bold mb-4 text-center sm:text-left">
              DUEL: Two Player Finger Battle
            </h1>
            <p className="text-gray-800 text-xl mb-2 text-center sm:text-left">
              Two Player Finger Tap Battle — Tantang Temanmu! Dua pemain dalam
              satu perangkat
            </p>
            <Link to="/detail-product">
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
            src="/assets/images/produk3.png"
            alt="PUBLIKA"
            className="w-full sm:w-1/2 lg:w-100 h-auto rounded-2xl"
          />
          <div className="sm:w-1/2">
            <h1 className="text-3xl text-gray-900 font-bold mb-4 text-center sm:text-left">
              Number Mate - Puzzle Number
            </h1>
            <p className="text-gray-800 text-xl mb-2 text-center sm:text-left">
              Jumlahkan nomor agar sesuai target. Asah kemampuan matematika.
              Puzzle Game.
            </p>
            <Link to="/detail-product">
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

export default OurProduct;
