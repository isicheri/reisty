import React from "react";
import LogoT from "../../assets/logoT.svg";
// import Navbar from "../../components/navbar/Navbar";
// import { NavLink, Link } from 'react-router-dom';
import FacebookIcon from "../../assets/facebook.svg";
import GoogleIcon from "../../assets/google.svg";
import AppleIcon from "../../assets/apple.svg";
import NavbarDuo from "../../components/navbar/NavbarDuo";
import { Link } from "react-router-dom";

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
      <div className="bg-white min-h-full ">
        <div className="mx-auto w-full lg:max-w-[45%] pt-12 lg:pt-16">
          <div className="bg-white shadow-2xl rounded px-[2rem] lg:px-28 pt-6 lg:pt-8 lg:pb-8 lg:mb-4">
            <div className="flex justify-center pb-6">
              <img src={LogoT} alt="" />
            </div>
            <div className="text-center flex justify center pb-6">
              <p>
                Your account information and reservations are securely managed
                by Reisty.
              </p>
            </div>
            <div className="mb-4 grid grid-cols-1 gap-3 w-[90%] mx-auto justify-center">
              <button className="border border-gray-300 rounded-3xl justify-center py-3 px-2 flex items-center">
                <img src={FacebookIcon} className="mr-2 w-4 h-4" />
                Log in with Facebook
              </button>
              <button className="border border-gray-300 rounded-3xl justify-center py-3 px-2 flex items-center">
                <img src={GoogleIcon} className="mr-2 w-4 h-4" />
                Log in with Google
              </button>
              <button className="border rounded-3xl justify-center py-3 px-2 flex items-center">
                <img src={AppleIcon} className="mr-2 w-4 h-4" />
                Log in with Apple
              </button>
            </div>

            <div className="twodash flex justify-center mb-6 mt-6 gap-2 items-center">
              <div className="dashone border-b-2 border-black-100 w-[150px]"></div>
              <div className="or">Or</div>
              <div className="dashtwo border-b-2 border-black-100 w-[150px]"></div>
            </div>

            <form className=" justify-center">
              <div className="mb-4 w-[100%] justify-center">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="username"
                >
                  Email address
                </label>
                <input
                  className="shadow appearance-none border rounded-xl w-full py-4 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-4"
                  id="username"
                  type="text"
                  placeholder="Email address"
                />
              </div>
              <div className="mb-6 w-[100%]">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="password"
                >
                  Password*
                </label>
                <input
                  className="shadow appearance-none border rounded-xl w-full py-4 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline pl-4"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
                <p className="text-red-600 font-bold text-xs">
                  Forgot Password?
                </p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-red-700 text-white w-[100%] font-normal py-4 px-3 rounded-xl focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Login
                </button>
              </div>
            </form>
          <div className="w-[] border-b-2 border-b-gray-200 lg:pt-8 mb-1 lg:mb-8"></div>
          <div className="text-center pb-2">
            <span>Don't have an account? </span>
            <Link to="/signup">
            <span className="text-red-700 font-medium text-[12px] lg:text-[14px]">Create a free account</span>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
