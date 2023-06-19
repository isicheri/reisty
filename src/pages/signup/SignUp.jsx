import React from "react";
import NavbarDuo from "../../components/navbar/NavbarDuo";
import FacebookIcon from "../../assets/facebook.svg";
import GoogleIcon from "../../assets/google.svg";
import AppleIcon from "../../assets/apple.svg";
import LogoT from "../../assets/logoT.svg";

// import Navbar from "../../components/navbar/Navbar";
// https://ekwonye-richard.github.io/react-flags-select/?path=/story/reactflagsselect--primary

const SignUp = () => {
  return (
    <div>
      <NavbarDuo />
      <div className="bg-white min-h-screen">
        <div className="mx-auto max-w-[45%] pt-16 mb-28">
          <div className="bg-white shadow-2xl rounded px-28 pt-8 pb-8 mb-4">
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
                  className="block py-3 text-gray-700 font-medium mb-2"
                  htmlFor="firstname" 
                >
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded-xl w-full py-4 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-4"
                  id="firstname"
                  type="text"
                  placeholder="First Name"
                />

                <label
                  className="block py-3 text-gray-700 font-medium mb-2"
                  htmlFor="lastname"
                >
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded-xl w-full py-4 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-4"
                  id="Lastname"
                  type="text"
                  placeholder="Last Name"
                />

                <label
                  className="block py-3 text-gray-700 font-medium mb-2"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  className="shadow appearance-none border rounded-xl w-full py-4 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-4"
                  id="email"
                  type="text"
                  placeholder="Email address"
                />

                <label
                  className="block py-3 text-gray-700 font-medium mb-2"
                  htmlFor="phonenumber"
                >
                  Phone Number
                </label>
                <input
                  className="shadow appearance-none border rounded-xl w-full py-4 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-4"
                  id="username"
                  type="text"
                  placeholder="Phone Number"
                />

                <label
                  className="block py-3 text-gray-700 font-medium mb-2"
                  htmlFor="country"
                >
                  Country of Residence
                </label>
                <input
                  className="shadow appearance-none border rounded-xl w-full py-4 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-4"
                  id="country"
                  type="text"
                  placeholder="Country of resisdence"
                />

                <label
                  className="block py-3 text-gray-700 font-medium mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded-xl w-full py-4 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-4"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <div>
                <p className=" font-normal text-[14px] leading-5 text-[#808080]">
                  By clicking the 'Create Account' button below, you agree to
                  the Reisty{" "}
                  <span className="text-[#BC172F] font-medium">
                    Terms of Use
                  </span>{" "}
                  and{" "}
                  <span className="text-[#BC172F] font-medium">
                    Privacy Policy
                  </span>.
                </p>
              </div>

              <div className="flex items-center pt-8 justify-between">
                <button
                  className="bg-red-700 text-white w-[100%] font-normal py-4 px-3 rounded-xl focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Create account
                </button>
              </div>
              <div className="pt-[19px]">
                <span
                  className="text-[#717171] text-[14px]"
                >
                  Already have an account?
                </span>
                <span className="text-red-700 font-medium text-[14px]">
                  Login
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
