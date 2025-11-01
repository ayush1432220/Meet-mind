import React from "react";
import { Twitter, Linkedin, Youtube } from "lucide-react"; 
import logo from "../../assets/logo.png";

const footerNavigation = {
  product: [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Dashboard", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "API", href: "#" },
    { name: "Support", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Security", href: "#" },
  ],
  social: [
    {
      name: "X (Twitter)",
      href: "#",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
    {
      name: "YouTube",
      href: "#",
      icon: Youtube,
    },
  ],
};

function Footer() {
  return (
    <footer className="bg-[#f4f6fb] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto border-t border-gray-200 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center">
              {/* Logo Icon */}
             <div className="flex items-center mx-3 justify-center h-12 w-12 rounded-xl bg-[#f5f6fa] shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] overflow-hidden">
                 <img
                   src={logo}
                   alt="Meetmind AI Logo"
                   className="h-10 w-10 object-contain"
                 />
               </div>
              <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-lg">
   Meetmind AI</span>
            </div>

            <p className="text-gray-600 text-sm max-w-xs">
              Transform your meetings with AI-powered intelligence and automation.
            </p>

            <div className="flex space-x-3 mt-4">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-105"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-4 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Product
              </h3>
              <ul role="list" className="mt-4 space-y-2">
                {footerNavigation.product.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Company
              </h3>
              <ul role="list" className="mt-4 space-y-2">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Resources
              </h3>
              <ul role="list" className="mt-4 space-y-2">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Legal
              </h3>
              <ul role="list" className="mt-4 space-y-2">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Meetmind AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
