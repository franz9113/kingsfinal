"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useState } from "react";
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string | null>("/");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  const toggleDropdown = (key: string | null) => {
    setActiveDropdown(key);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
    className={`flexBetween max-container padding-container relative z-50 ${
      isScrolled
        ? "navbar scrolled text-gray-600"
        : "navbar text-gray-400"
    }`}
  >
    <Link href="/">
      <Image src="/assets/images/logo.png" alt="logo" width={300} height={50} />
    </Link>

    <ul className="hidden h-full gap-12 lg:flex">
      {NAV_LINKS.map((link) => (
        <li
          key={link.key}
          className={`relative ${
            activeDropdown === link.key ? "dropdown-active" : ""
          }`}
          onMouseEnter={() => toggleDropdown(link.key)}
          onMouseLeave={() => toggleDropdown(null)}
        >
           <Link
              href={link.href}
              className={`regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ${
                isScrolled ? "text-gray-600" : "text-gray-400"
              } ${link.href === activeLink ? "active-link" : ""}`}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.label}
            </Link>
            {link.dropdown && (
              <ul
                className={`absolute top-full left-0 bg-white shadow-md rounded-md py-2 px-4 w-48 z-50 ${
                  isDropdownOpen && activeDropdown === link.key
                    ? "block"
                    : "hidden"
                }`}
              >
                {link.dropdown.map((dropdownLink) => (
                  <li key={dropdownLink.key}>
                    <Link
                      href={dropdownLink.href}
                      className="block regular-16 text-gray-700 py-2 hover:font-bold"
                    >
                      {dropdownLink.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div> */}

<Bars3Icon
        className="inline-block cursor-pointer h-8 w-8 lg:hidden"
        onClick={toggleMobileMenu}
      />
      {/* Mobile Screen */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-40 p-6">
          <div className="flexBetween items-center mb-6">
            <Link href="/">
              <Image src="/assets/images/logo.png" alt="logo" width={300} height={50} />
            </Link>
            <XMarkIcon
              className="cursor-pointer h-8 w-8 text-black"
              onClick={toggleMobileMenu}
            />
          </div>
          <ul className="space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <div
                  className={`flexBetween cursor-pointer pb-1.5 transition-all hover:font-bold ${
                    activeDropdown === link.key ? "dropdown-active" : ""
                  }`}
                  onClick={() => toggleDropdown(link.key)}
                >
                  <Link
                    href={link.href}
                    className="regular-16 text-gray-700 flexCenter"
                    onClick={toggleMobileMenu}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <span
                      className={`transition-transform ${
                        isDropdownOpen && activeDropdown === link.key
                          ? "rotate-180"
                          : ""
                      }`}
                    >
                      <ChevronDownIcon className="h-6 w-6 text-black" />
                    </span>
                  )}
                </div>
                {link.dropdown && (
                  <ul
                    className={`pl-4 space-y-2 ${
                      isDropdownOpen && activeDropdown === link.key
                        ? "block"
                        : "hidden"
                    }`}
                  >
                    {link.dropdown.map((dropdownLink) => (
                      <li key={dropdownLink.key}>
                        <Link
                          href={dropdownLink.href}
                          className="block regular-16 text-gray-700 py-2 hover:font-bold"
                          onClick={toggleMobileMenu}
                        >
                          {dropdownLink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;