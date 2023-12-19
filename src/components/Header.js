import { LOGO_URL, CART_LOGO } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = UseOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-200 shadow-lg px-4">
      <div className="logo-box">
        <img
          className="w-28 p-3 rounded-full"
          src={LOGO_URL}
          alt="logo-image"
        />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-5 m-3 gap-4 font-medium text-lg">
          <li>Online status : {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <button
              className="loginBtn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="font-normal">{loggedInUser}</li>
          <li className="w-8 h-4">
            <Link to="/cart">
              <img src={CART_LOGO} alt="cart logo" />
            </Link>
          </li>
          <li className="text-sm py-1 items-center">Items in Cart - ({cartItems.length} Items)</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
