function scrollTofaq() {
  const element = document.getElementById("faq");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

const footer = () => {
  return (
    <>
      <footer className="bg-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src="/assets/images/logopublika.png"
                  alt="Publika Logo"
                  className="w-15"
                />
                <span className="text-4xl font-bold text-red-500 font-[Offside]">
                  PUBLIKA
                </span>
              </div>
              <p className="text-gray-800">
                Help everyone in the world to have useful apps & realize their
                full potential.
              </p>
              <a href="#" className="block w-32">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="w-32"
                />
              </a>
            </div>
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
              <div>
                <h4 className="font-semibold text-gray-800">Quick Access</h4>
                <div className="w-10 h-1 bg-red-500 mt-1 rounded-full"></div>
                <ul className="mt-4 space-y-2 text-sm text-gray-800">
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-800 transation duration-300"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-800 transation duration-300"
                    >
                      Product
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-800 transation duration-300"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-800 transation duration-300"
                    >
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Support</h4>
                <div className="w-10 h-1 bg-red-500 mt-1 rounded-full"></div>
                <ul className="mt-4 space-y-2 text-sm text-gray-800">
                  <li>
                    <button
                      onClick={scrollTofaq}
                      className="hover:text-blue-800 transation duration-300 cursor-pointer"
                    >
                      FaQ
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Social Media</h4>
                <div className="w-10 h-1 bg-red-500 mt-1 rounded-full"></div>
                <ul className="mt-4 space-y-2 text-sm text-gray-800">
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-800 transation duration-300"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-300 pt-6 text-center text-sm text-gray-800">
            © 2025 Publika. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
