"use client";
import Image from "next/image";
import logo from "@/assets/logo/logo.png";
import { BsTelephonePlus } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Button from "./shared/Button";
import { useAuth } from "../context/AuthContext";

// import { useAuth } from "@/context/AuthContext"; // adjust import path if needed

const Navbar = () => {
  const router = useRouter();
  const path = usePathname();
  const { user, logoutUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Add background when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-20 flex justify-between items-center lg:px-12 py-2 lg:py-6 transition-colors duration-300 ${
        scrolled ? "bg-gray-900 shadow-md" : "bg-transparent"
      } text-white`}
    >
      {/* logo */}
      <Link href="/" className="cursor-pointer lg:pl-0">
        <div className="flex items-center absolute -top-4 md:-top-3 lg:-top-6 lg:left-0">
          <div className="w-[180px] h-[100px] sm:w-[150px] sm:h-[70px] md:w-[180px] md:h-[90px] lg:w-[300px] lg:h-[150px] ">
            <Image
              src={logo}
              alt="logo"
              width={300}
              height={150}
              priority
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </Link>
      <div></div>

      {/* Desktop nav */}
      <div className="hidden lg:flex">
        <ul className="flex gap-5 justify-center items-center">
          <Link href="/">
            <li className={`${path == "/" ? "text-green-500" : ""}`}>Home</li>
          </Link>
          <Link href="/about">
            <li className={`${path == "/about" ? "text-green-500" : ""}`}>
              About
            </li>
          </Link>
          <Link href="/service">
            <li className={`${path == "/service" ? "text-green-500" : ""}`}>
              Service
            </li>
          </Link>
          <Link href="/websites">
            <li className={`${path == "/websites" ? "text-green-500" : ""}`}>
              Portfolio
            </li>
          </Link>
          <Link href="/pricing">
            <li className={`${path == "/pricing" ? "text-green-500" : ""}`}>
              Pricing
            </li>
          </Link>
        </ul>
      </div>

      {/* Right side buttons */}
      <div className="flex gap-4 lg:ml-5 items-center">
        <div className="hidden lg:flex items-center justify-center gap-2">
          <BsTelephonePlus className="text-green-500" />
          <div className="text-xs">
            <p>For Client Support:</p>
            <p>+880-1815-149399</p>
          </div>
        </div>

        <Link href="#contactme" className="hidden lg:flex">
          <button className="text-green-400 border rounded-md border-green-400 px-5 py-2 font-semibold cursor-pointer hover:bg-green-500 hover:text-white transition">
            Get A Quote
          </button>
        </Link>

        {/* Desktop Auth Buttons */}
        {!user ? (
          <Link href="/login" className="hidden md:flex">
            <Button text="Login" />
          </Link>
        ) : (
          <button
            onClick={async () => {
              await logoutUser();
              router.push("/"); // ✅ redirect to home
            }}
            className="hidden md:flex text-red-500 border border-red-500 px-5 py-2 rounded-md font-semibold hover:bg-red-600 hover:text-white transition"
          >
            Logout
          </button>
        )}

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl focus:outline-none mr-4 my-3 "
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 left-0 z-10 w-full bg-gradient-to-r from-gray-800 to-purple-600 text-white shadow-lg lg:hidden animate-slide-down"
        >
          <ul className="flex flex-col gap-4 py-6 px-6 text-lg">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <li className={`${path == "/" ? "text-green-500" : ""}`}>Home</li>
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              <li className={`${path == "/about" ? "text-green-500" : ""}`}>
                About
              </li>
            </Link>
            <Link href="/service" onClick={() => setMenuOpen(false)}>
              <li className={`${path == "/service" ? "text-green-500" : ""}`}>
                Service
              </li>
            </Link>
            <Link href="/websites" onClick={() => setMenuOpen(false)}>
              <li className={`${path == "/websites" ? "text-green-500" : ""}`}>
                Portfolio
              </li>
            </Link>
            <Link href="/pricing" onClick={() => setMenuOpen(false)}>
              <li className={`${path == "/pricing" ? "text-green-500" : ""}`}>
                Pricing
              </li>
            </Link>

            {/* Mobile Auth Buttons */}
            {!user ? (
              <div>
                <Link href="/login" onClick={() => setMenuOpen(false)}>
                  <Button text="Login" />
                </Link>
              </div>
            ) : (
              <button
                onClick={async () => {
                  await logoutUser();
                  setMenuOpen(false);
                  router.push("/"); // ✅ redirect to home
                }}
                className="text-red-500 border border-red-500 px-5 py-2 rounded-md font-semibold hover:bg-red-600 hover:text-white transition"
              >
                Logout
              </button>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
