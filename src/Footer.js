import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0d16] py-10 text-gray-400 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-bold text-cyan-400 mb-3">Java Junction</h3>
          <p className="text-gray-500">
            The ultimate gaming hub — where fun meets performance.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() =>
                  document.getElementById("hero").scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-cyan-400 transition"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document.getElementById("services").scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-cyan-400 transition"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document.getElementById("pricing").scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-cyan-400 transition"
              >
                Pricing
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-cyan-400 transition"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold text-white mb-3">Follow Us</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 mt-10 text-sm border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Java Junction Cyber Café — All Rights Reserved.
      </div>
    </footer>
  );
}
