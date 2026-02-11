import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
  ];

  const footerLinks = {
    Company: ["About Us", "Projects", "Services", "Careers"],
    Support: ["Contact Us", "Privacy Policy", "Terms of Service", "Blogs"],
  };

  return (
    <footer className="relative bg-[#0a0f14] text-white pt-20 pb-10 overflow-hidden">

      <div className="max-w-7xl mx-auto px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-6">

          {/* Brand & Newsletter Section */}
          <div className="lg:col-span-3 space-y-8">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Solar Reios Logo" />
            </div>
          </div>

          {/* Dynamic Links Mapping */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-3">
              <h4 className="text-white font-bold mb-6 relative inline-block">
                {title}
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#f6b643]" />
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm hover:text-[#f6b643] transition-colors flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-[#f6b643] mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div className="lg:col-span-3 lg:pl-10">
            <h4 className="text-white font-bold mb-6">Global Headquarters</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#f6b643] shrink-0" />
                <span>Nagpur, Maharashtra, India<br />Energy Park, Sector 4</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[#f6b643] shrink-0" />
                <a href="tel:+917447401177" className="hover:text-white transition-colors">
                  +91 99********
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#f6b643] shrink-0" />
                <a href="mailto:info@solarreiso.com" className="hover:text-white transition-colors">
                  info@solarreiso.com
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="mt-8 flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-[#f6b643]/50 hover:bg-[#f6b643]/10 text-white transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {currentYear} Solar Reiso  LLP. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;