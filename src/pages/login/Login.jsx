import React from "react";
import LogoT from "../../assets/logoT.svg";
// import Navbar from "../../components/navbar/Navbar";
// import { NavLink, Link } from 'react-router-dom';
import FacebookIcon from "../../assets/facebook.svg";
import GoogleIcon from "../../assets/google.svg";
import AppleIcon from "../../assets/apple.svg";
import NavbarDuo from "../../components/navbar/NavbarDuo";
import { Link } from "react-router-dom";
// import Example from "../../components/countrydropdown/CountryDropdown";
// import CountrySelector from "../../components/countrydropdown/CountryDropdown";

const Login = () => {
  const handleFacebookLogin = () => {
    // Implement your Facebook login logic here
  };

  const handleGoogleLogin = () => {
    // Implement your Google login logic here
  };

  const handleAppleLogin = () => {
    // Implement your Apple login logic here
  };

  return (
    <div>
      <NavbarDuo />
      <div className="bg-white min-h-[100vh] md:flex items-center justify-center">
        <div className="mx-auto w-full max-w-[600px] md:py-12 lg:py-16 lg:px-14">
          <div className="bg-white shadow-2xl rounded px-[2rem] pt-6 md:py-8 lg:mb-4">
            <div className="flex justify-center pb-6">
              <img src={LogoT} alt="" />
            </div>
            <div className="text-center flex flex-col items-center w-full justify-center text-[#2b2b2b] center pb-6 text-sm md:">
              <p className="text-2xl md:text-3xl font-bold md:my-2">
                Sign in to Reisty.
              </p>
              <p className="px-3 py-2">
                Your account information and reservations are securely managed
                by Reisty.
              </p>
            </div>
            <div className="mb-4 grid grid-cols-1 gap-3 w-[90%] mx-auto justify-center">
              <button className="border border-gray-300 rounded-full justify-center py-3 px-2 flex items-center">
                <img src={FacebookIcon} className="mr-2 w-4 h-4" />
                <span className="w-[200px]">Log in with Facebook</span>
              </button>
              <button className="border border-gray-300 rounded-full justify-center py-3 px-2 flex items-center">
                <img src={GoogleIcon} className="mr-2 w-4 h-4" />
                <span className="w-[200px]">Log in with Google</span>
              </button>
              <button className="border rounded-full justify-center py-3 px-2 flex items-center">
                <img src={AppleIcon} className="mr-2 w-4 h-4" />
                <span className="w-[200px]">Log in with Apple</span>
              </button>
            </div>

            <div className="twodash flex justify-center my-8 gap-2 items-center">
              <div className="dashone border-b-2 border-black-100 w-full"></div>
              <div className="or px-2 text-sm">Or</div>
              <div className="dashtwo border-b-2 border-black-100 w-full"></div>
            </div>

            <form className=" justify-center">
              <div className="inputBox mb-4 w-[100%] justify-center relative ">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2 absolute bg-white ml-5 -mt-2 px-3 top-0"
                  htmlFor="username"
                >
                  Email address
                </label>
                <input
                  className="shadow-md shadow-[#cccccc20] appearance-none border rounded-md w-full py-4 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-4 mb-3 duration-100 focus:border-redd"
                  id="username"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="inputBox mb-6 w-[100%] relative ">
                <label
                  className="block text-gray-700 text-sm font-medium absolute top-0 bg-white ml-5 -mt-2 px-3"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow-md shadow-[#cccccc20] appearance-none border rounded-md w-full py-4 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline pl-4 duration-100 focus:border-redd"
                  id="password"
                  type="password"
                  placeholder=""
                />
                <p className="text-red-600 cursor-pointer font-medium text-xs mt-3">
                  Forgot Password?
                </p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-redd text-white w-full font-normal p-3 rounded-md focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Log in
                </button>
              </div>
            </form>
          <div className="border-b border-gray-200 pt-8 mb-5"></div>
          <div className="text-center text-sm pb-8 md:pb-3">
            <span>Don't have an account? </span>
            <Link to="/signup">
            <span className="text-redd font-medium ">Create a free account</span>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
