"use client";
import Image from "next/image";
import logo from "@/assets/logo/logo.svg";
import { BsTelephonePlus } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Button from "./shared/Button";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const router = useRouter();
  const path = usePathname();
  const { user, logoutUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const closeMenu = () => setMenuOpen(false);

  // Close menu when clicking outside & prevent scroll
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Service", href: "/service" },
    { name: "Portfolio", href: "/websites" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black-900/95 backdrop-blur-sm shadow-xl h-24"
          : "bg-transparent h-24 md:h-24"
      } text-white`}
    >
      <div className="container mx-auto px-4 lg:px-12 flex justify-between items-center h-full">
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center">
          <div className="relative w-[220px] h-[70px] md:w-[200px] md:h-[65px] lg:w-[300px] lg:h-[90px]">
            <Image
              src={logo}
              alt="logo"
              fill
              priority
              className="object-contain object-left scale-110 md:scale-115 lg:scale-100 ml-5 md:ml-0"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-6 font-medium">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <li
                  className={`hover:text-teal-400 transition cursor-pointer ${
                    path === link.href ? "text-teal-400" : ""
                  }`}
                >
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Contact */}
          <div className="hidden xl:flex items-center gap-2 border-r border-gray-700 pr-4">
            <BsTelephonePlus className="text-teal-400" />
            <div className="text-[10px] leading-tight">
              <p className="text-gray-400">Client Support:</p>
              <p className="font-bold">+880-1815-149399</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {!user ? (
              <Link href="/login">
                <Button text="Login" />
              </Link>
            ) : (
              <button
                onClick={async () => {
                  await logoutUser();
                  router.push("/");
                }}
                className="text-red-500 border border-red-500 px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-red-500 hover:text-white transition"
              >
                Logout
              </button>
            )}

            {/* <Link href="#contactme">
              <button className="bg-teal-700 text-white px-5 py-3 rounded-md font-semibold hover:bg-teal-500 transition text-sm">
                Get A Quote
              </button>
            </Link> */}
          </div>

          <div>
            <button
              onClick={() => {
                router.push("/dashboard");
              }}
              className="px-5 py-2 md:py-3  bg-white/5 border border-white/10 backdrop-blur-md text-gray-200 rounded-lg hover:bg-teal-400/10 hover:border-teal-400/50 hover:text-teal-400 hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all duration-300 font-medium text-sm"
            >
              Dashboard
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl flex items-center justify-center"
          >
            {menuOpen ? (
              <FiX className="text-teal-400" />
            ) : (
              <FiMenu className="leading-none" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-screen w-[75%] max-w-[300px] bg-gray-900 shadow-2xl transform transition-transform duration-300 z-40 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 pt-24 px-8 text-lg font-semibold">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu}>
              <li
                className={`${
                  path === link.href
                    ? "text-teal-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </li>
            </Link>
          ))}

          <hr className="border-gray-800" />

          <div className="flex flex-col gap-6">
            {!user ? (
              <Link href="/login" onClick={closeMenu}>
                <Button text="Login" />
              </Link>
            ) : (
              <button
                onClick={async () => {
                  await logoutUser();
                  closeMenu();
                  router.push("/");
                }}
                className="w-full text-red-500 border border-red-500 py-2 rounded-md font-semibold"
              >
                Logout
              </button>
            )}

            {/* Social */}
            <div className="pt-4 flex justify-center gap-5">
              <a
                href="https://www.facebook.com/Craftedmartagency"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="hover:text-teal-400 transition cursor-pointer" />
              </a>
              <FaInstagram />
              <FaLinkedinIn />
            </div>

            <p className="text-center text-[10px] text-gray-500">
              © 2026 CraftedMart Agency
            </p>
          </div>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
