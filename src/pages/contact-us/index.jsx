import { useState } from "react";
import { addContact } from "../../api";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addContact(name, email, phone, message);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    alert("Pesan berhasil dikirim!");
  };

  return (
    <>
      <div className="bg-gray-200">
        <div className="text-white text-center text-5xl bg-red-500 rounded-b-3xl p-10 font-semibold">
          Contact Us
        </div>

        <div className="flex flex-col md:flex-row bg-gray-200 p-6 md:p-10 rounded-lg text-black gap-15">
          {/* Formulir Kontak */}
          <div className="w-full md:w-2/3 p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Nama"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-1/2 p-2 rounded-md text-black border border-gray-300 bg-gray-200"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-1/2 p-2 rounded-md text-black border border-gray-300 bg-gray-200"
                />
              </div>
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 rounded-md text-black border border-gray-300 bg-gray-200"
              />
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 rounded-md text-black h-32 border border-gray-300 bg-gray-200"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-red-500 text-white p-2 rounded-md font-bold border border-gray-300 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Informasi Kontak */}
          <div className="w-full md:w-1/3 p-4 bg-white rounded-2xl shadow-lg">
            <h2 className="text-lg font-bold mb-4">
              We Are Always Here to Help You
            </h2>
            <div className="space-y-3">
              <div className="flex items-center bg-gray-200 text-black p-2 rounded-md border border-gray-300 gap-1.5 text-xs">
                <img
                  src="/assets/images/phonecontact.png"
                  alt="Phone"
                  className="w-5 h-5 object-contain"
                />
                <span>+62 822-4909-8340</span>
              </div>
              <div className="flex items-center bg-gray-200 text-black p-2 rounded-md border border-gray-300 gap-2 text-xs">
                <img
                  src="/assets/images/emailcontact.png"
                  alt="Email"
                  className="w-5 h-5 object-contain"
                />
                <span>publikinvestakarya@gmail.com</span>
              </div>
              <div className="flex items-center bg-gray-200 text-black p-2 rounded-md border border-gray-300 gap-2 text-xs">
                <img
                  src="/assets/images/jamcontact.png"
                  alt="Jam"
                  className="w-5 h-5 object-contain"
                />
                <span>09:00 - 16:00 WIB</span>
              </div>
              <div className="flex items-center bg-gray-200 text-black p-2 rounded-md border border-gray-300 gap-2 text-xs">
                <img
                  src="/assets/images/alamatcontact.png"
                  alt="Alamat"
                  className="w-5 h-5 object-contain"
                />
                <span>
                  Depan Koramil, RT/RW:003/001, Banjiran, Kec. Warungasem,
                  Kabupaten Batang, Jawa Tengah 51252
                </span>
              </div>
              <hr className="border-gray-300 my-2 border-t-2" />
            </div>
            <h3 className="mt-4 text-sm font-bold">Connect with Us</h3>
            <div className="mt-2">
              <img
                src="/assets/images/iconinstagram.png"
                alt="Instagram"
                className="w-5 h-5 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 flex justify-center items-center px-10 py-16 mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.55851642157!2d109.68131537363115!3d-6.943245893056863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70238ccbd08333%3A0xa91b5c5338b37917!2sPT%20Publika%20Investa%20Karya!5e0!3m2!1sid!2sid!4v1738743154342!5m2!1sid!2sid"
            width="1500"
            height="200"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabIndex="0"
            className="rounded-xl"
          />
        </div>
      </div>
    </>
  );
}
export default ContactUs;
