const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="text-white text-xl font-semibold tracking-wide">
              The CARZ WORLD
            </h2>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Building modern web experiences with clean design and scalable
              architecture.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MyBrand. All rights reserved.
          </p>

          {/* Minimal Credits / Tagline */}
          <p className="text-sm text-gray-500">
            Crafted with precision & simplicity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
