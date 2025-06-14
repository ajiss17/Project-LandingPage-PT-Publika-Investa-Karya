import { motion } from "framer-motion";

function AboutUs() {
  return (
    <>
      {/* aboutus */}
      <div>
        <div className="text-white text-center text-5xl bg-red-500 p-10 rounded-b-xl font-semibold">
          About Us
        </div>
        <motion.div
          className="bg-gray-200 flex flex-wrap md:flex-nowrap items-center justify-center md:space-x-20 md:p-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <div className="flex items-center space-x-6">
            <img
              src="/assets/images/logopublika.png"
              alt="PUBLIKA"
              className="w-32 md:w-40 h-auto object-contain"
            />
            <span className="text-5xl md:text-7xl font-bold text-red-500 font-[Offside]">
              PUBLIKA
            </span>
          </div>
          <div className="text-gray-800 max-w-lg text-justify mt-6 md:mt-0">
            <p>
              <strong className="text-red-500 text-center text-2xl">
                PT Publika Investa Karya
              </strong>
            </p>
            <p className="py-3">
              PT Publika Investa Karya adalah perusahaan teknologi yang fokus
              pada pengembangan solusi perangkat lunak inovatif, IoT, dan
              Kecerdasan Buatan (AI). Kami mengembangkan produk-produk unggulan
              dan juga menyediakan layanan pengembangan solusi kustom untuk
              klien, selaras dengan alam dan kehidupan sehari-hari.
            </p>
            <p className="mt-2">
              Sebagai mitra dalam transformasi digital, kami memberikan solusi
              yang mengoptimalkan potensi teknologi untuk mendukung tujuan
              bisnis dan individu, serta membuka peluang pelatihan untuk
              memberdayakan keterampilan dan memperluas akses teknologi bagi
              berbagai kalangan.
            </p>
          </div>
        </motion.div>
      </div>

      {/* visi */}
      <motion.div
        className="bg-gray-200 text-center px-4 md:px-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <h2 className="font-bold text-2xl">Our Vision</h2>
        <div className="w-24 h-1 bg-red-400 mx-auto mt-1 rounded-full"></div>

        <motion.p
          className="mt-5 bg-white shadow-lg rounded-lg p-5 text-gray-700 max-w-6xl w-full mx-auto text-justify leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false }}
        >
          Mewujudkan dunia di mana teknologi berinovasi untuk menghubungkan
          dunia digital dengan kehidupan sehari-hari, selaras dan terintegrasi
          dengan alam untuk menciptakan solusi yang lebih efisien, mempermudah
          kehidupan, dan memberdayakan individu serta bisnis untuk mencapai
          potensi terbaik mereka.
        </motion.p>
      </motion.div>

      {/* misi */}
      <div className="bg-gray-200 py-10 px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold relative inline-block">
            Our Mission
            <span className="block w-24 h-1 bg-red-500 mx-auto mt-1 rounded-full"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Kotak Misi */}
          {[
            {
              title: "Menciptakan Solusi yang Berimpact",
              text: "Mengembangkan perangkat lunak, IoT, dan AI yang tidak hanya menjawab kebutuhan industri, tetapi juga meningkatkan kehidupan sehari-hari dan memecahkan masalah yang ada di masyarakat.",
            },
            {
              title: "Mengintegrasikan Teknologi dengan Alam",
              text: "Merancang solusi yang harmonis dengan alam dan lingkungan sekitar untuk penggunaan teknologi sehari-hari yang ramah lingkungan dan efisien.",
            },
            {
              title: "Berkolaborasi untuk Inovasi",
              text: "Kami percaya bahwa kolaborasi adalah kunci inovasi. Bersama klien dan mitra, kami menghadirkan ide-ide baru untuk manfaat jangka panjang.",
            },
            {
              title: "Pengembangan dan Pemberdayaan",
              text: "Kami menyediakan peluang pelatihan untuk membantu individu menguasai keterampilan teknologi terkini, membuka potensi mereka untuk berkarir dan berinovasi di dunia digital.",
            },
          ].map((mission, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: false }}
            >
              <h3 className="font-bold text-lg">{mission.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{mission.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutUs;
