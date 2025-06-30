"use client";
import Link from "next/link";
import { FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / Brand */}
        <div>
          <h2 className="text-2xl text-[#c6f10e] font-bold mb-3">
            MyPortfolio
          </h2>
          <p className="text-gray-400 text-sm">
            Fullstack Developer — membangun aplikasi web dari frontend hingga
            backend dengan Laravel, JavaScript, dan desain responsif.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg text-[#c6f10e] font-semibold mb-3">
            Navigasi
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="#home"
                className="hover:underline hover:text-[#c6f10e]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#features"
                className="hover:underline hover:text-[#c6f10e]"
              >
                My Skill
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="hover:underline hover:text-[#c6f10e]"
              >
                My Project
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:underline hover:text-[#c6f10e]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg text-[#c6f10e] font-semibold mb-3">
            Follow Me
          </h3>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://github.com/ruleksz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c6f10e] transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://discord.com/invite/ruleksz'sserver"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c6f10e] transition"
            >
              <FaDiscord />
            </a>
            <a
              href="https://www.instagram.com/ruleks_15/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c6f10e] transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2025 RulsDev. All rights reserved.
      </div>
    </footer>
  );
}
