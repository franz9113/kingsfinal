import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white padding-component">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-14">
        {/* Left Column */}
        <div className="md:order-1 order-2">
          <p>
            Welcome to Abdawn Limited We are a new force in the world of premium
            spirits, driven by a passion for craftsmanship and a commitment to
            delivering exceptional experiences.
          </p>
        </div>

        {/* Middle Column */}
        <div className="md:order-2 order-3">
          <h3 className="text-lg font-bold mb-4">Products</h3>
          {/* Add your product links here */}
        </div>

        {/* Right Column */}
        <div className="md:order-3 order-1 flex justify-end space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-3xl" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
