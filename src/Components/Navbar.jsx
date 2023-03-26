import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../images/Logo.png";
import { SiAbletonlive } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const token = useSelector((state) => state.LoginSlice.userInfo.token);
  const token = localStorage.getItem("token");

  return (
    <div className="navbar grid grid-cols-3 w-screen ">
      <div className="mt-5 mb-3 ml-52">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="list-main mt-7 ml-26 text-white font-medium">
        <ul className="list">
          <Link to={"/"}>
            <li className="inline pl-6">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="inline pl-6">About</li>
          </Link>
          <Link to={"/contact"}>
            <li className="inline pl-6">Contact US</li>
          </Link>
          <Link to={"/createtask"}>
            <li className="inline pl-6">Task</li>
          </Link>

          {token ? (
            <button type="submit" className="inline pl-6">
              My Profile
            </button>
          ) : (
            <Link to={"/signup"}>
              <li className="inline pl-10">Signup</li>
            </Link>
          )}
        </ul>
      </div>

      <div className="icon ml-44 mt-10">
        <FontAwesomeIcon icon="fa-solid fa-bars" />
        <SiAbletonlive />
      </div>
    </div>
  );
};

export default Navbar;
