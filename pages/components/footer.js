import {
  FaLinkedin,
  FaGithub,
  FaWhatsappSquare,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = ({ handleMailTo, handleLinkShare }) => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto text-center">
        <h3 className="text-lg font-semibold">Contact me!</h3>
        <div className="flex justify-center space-x-6 my-4">
          <a
            href="https://www.linkedin.com/in/noel-andrew-ortiz-mitre-a666461a2/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaLinkedin className="text-blue-500 text-3xl hover:opacity-75" />
          </a>
          <a
            href="https://github.com/NoelAndrew"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-300 text-3xl hover:opacity-75" />
          </a>
          <a onClick={() => handleMailTo()} className="cursor-pointer">
            <IoIosMail className="text-white text-3xl hover:opacity-75" />
          </a>
          <a
            href={"http://wa.me/2441133663"}
            className="cursor-pointer"
            target="_blank"
          >
            <FaWhatsappSquare className="text-green-500 bg-white text-3xl hover:opacity-75" />
          </a>
          <a onClick={() => handleLinkShare()} className="cursor-pointer">
            <FaPhoneSquareAlt className="text-green-600 text-3xl hover:opacity-50" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
