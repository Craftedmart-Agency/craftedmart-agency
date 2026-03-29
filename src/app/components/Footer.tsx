"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-4 md:pt-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Bar with Logo + Call Any Time */}
        <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center border-b border-gray-800 pb-6 md:mb-8">
          {/* Logo */}
          <div className="flex items-center gap-2 ">
            <span className="text-teal-400 text-2xl font-bold">●</span>
            <h2 className="md:text-2xl font-bold">
              Crafted M<span className="text-rose-400">a</span>rt Agency
            </h2>
          </div>

          {/* Call Any Time */}
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <div className="bg-teal-400/10 p-2 rounded-full">
              <HiOutlinePhone className="text-teal-400 text-xl" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Call Any Time</p>
              <p className="text-teal-400 font-semibold text-xs md:text-base">
                +880-1815-149399
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-800 pb-8">
          {/* Address & Newsletter */}
          <div className="col-span-2">
            {/* Address */}
            <div className="mb-4">
              <div className="flex items-center gap-2 text-teal-400">
                <HiOutlineLocationMarker />
                <h3 className="font-semibold">Address</h3>
              </div>
              <p className="text-gray-400 text-sm mt-1">
                HQ Suite: CM-114, 1st Floor Burischar,
                Nazumiahat, Chittagong, <br/> Fax: +880 31
                7689908
              </p>
            </div>

            {/* Say Hello */}
            <div className="mb-4">
              <div className="flex items-center gap-2 text-teal-400">
                <HiOutlineMail />
                <h3 className="font-semibold">Say Hello</h3>
              </div>
              <p className="text-gray-400 text-sm mt-1">
                info@craftedmartagency.com
              </p>
              <p className="text-gray-400 text-sm">
                info@craftedmartsupport.com
              </p>
            </div>

            {/* Newsletter */}
            <p className="text-sm text-gray-400 mb-2">See Our New Updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email..."
                className="bg-transparent border border-gray-700 p-2 w-full focus:outline-none text-sm"
              />
              <button className="bg-teal-400 px-4 flex items-center justify-center">
                →
              </button>
            </div>
          </div>

          {/* Our Solutions */}
          <div>
            <h3 className="font-bold mb-3">Our Solutions</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Web Development</li>
              <li>Cloud Solutions</li>
              <li>Cyber Security</li>
              <li>Data Analytic</li>
              <li>Software Development</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>About Us</li>
              <li>Case Study</li>
              <li>News & Article</li>
              <li>Our Team</li>
              <li>All Portfolio</li>
              <li>Pricing Plan</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-3">Resources</h3>
            <Link href="/terms">
              <li className="text-red-400 mb-1 list-none text-sm">
                Terms & Conditions
              </li>
            </Link>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Support Area</li>
              <li>Support Policy</li>
              <li>Privacy Policy</li>
              <li>Career</li>
              <li>Pricing Plan</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 text-gray-500 text-sm">
          <p>
            © Copyright 2026{" "}
            <span className="text-teal-400">Craftedmart Agency</span> | All
            rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/Craftedmartagency"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-teal-400 cursor-pointer" />
            </a>
            <FaTwitter className="hover:text-teal-400 cursor-pointer" />
            <FaPinterestP className="hover:text-teal-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
