import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex flex-row justify-between w-full boder border-black bg-orange-400 p-5">
             <div className="footer-logo">
        <img className="h-16" src="https://cdn.pixabay.com/photo/2012/04/24/11/54/copyright-39594_640.png" alt=" footer logo" />
      </div>
      <div className="text-white">
        <ul className="cursor-pointer">
          <li>FAQ's</li>
          <li>Privacy Policy</li>
          <Link to={"/contact"}>
          <li>Contact US</li>
          </Link>
        </ul>
      </div>
        </div>
    )
}

export default Footer;