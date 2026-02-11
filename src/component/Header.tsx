"use client";

import {  useState, useEffect, type JSX } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Header = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about-us" },
    { name: "Careers", path: "/careers" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact-us" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-lg " 
          : "bg-white "
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={logo}
              alt="Green Revolution Powerpark LLP"
              className={`transition-all duration-300 ${isScrolled ? "h-20" : "h-25"} w-auto`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-md font-bold transition-all duration-300 ${
                    isActive 
                      ? "text-[#1854a1] bg-[#1854a1]/5" 
                      : "text-gray-600 hover:text-[#1854a1] hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
                
              );
            })}
          </nav>

          {/* Action Button */}
          

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 top-18 bg-white z-99 lg:hidden transition-transform duration-500 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-2xl font-black ${
                location.pathname === link.path ? "text-[#1854a1]" : "text-gray-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact-us"
            className="mt-4 bg-[#f6b643] text-[#1854a1] text-center py-4 rounded-2xl font-bold text-lg"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;