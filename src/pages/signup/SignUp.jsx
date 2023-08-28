import React, { useState } from "react";
import NavbarDuo from "../../components/navbar/NavbarDuo";
import FacebookIcon from "../../assets/facebook.svg";
import GoogleIcon from "../../assets/google.svg";
import AppleIcon from "../../assets/apple.svg";
import LogoT from "../../assets/logoT.svg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createUser } from "../../services/authServices";

// import Navbar from "../../components/navbar/Navbar";
// https://ekwonye-richard.github.io/react-flags-select/?path=/story/reactflagsselect--primary


const initialState = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  phoneNumber: "",
  country: "",
  password: "",
  confirmPassword: ""
}
const SignUp = () => {
  const [formData, setFormData] = useState(initialState);
  const { firstName, lastName, emailAddress, phoneNumber, country, password, confirmPassword } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const createNewUser = async (e) => {
    e.preventDefault();
    if (!firstName) {
      return toast.error("First Name is required");
    }

    if (!lastName) {
      return toast.error("Last Name is required");
    }

    if (!emailAddress) {
      return toast.error("Email Address is required");
    }
    if (!phoneNumber) {
      return toast.error("Phone Number is required");
    }
    if (!country) {
      return toast.error("country is required");
    }
    if (!password) {
      return toast.error("Password is required");
    }
    if (!confirmPassword) {
      return toast.error("Confirm password is required");
    }
    try {
      const userData = {
        firstName,
        lastName,
        emailAddress,
        phoneNumber,
        country,
        password,
        confirmPassword
      }

      const save = await createUser(userData);
      toast.success(save.status)
    } catch (error) {
      toast.error(error)
    }
  }
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
                Sign up for Reisty.
              </p>
              <p className="px-3 py-2">
                Your account information and reservations are securely managed
                by Reisty.
              </p>
            </div>
            <div className="mb-4 grid grid-cols-1 gap-3 w-[90%] mx-auto justify-center">
              <button className="border border-gray-300 rounded-3xl justify-center py-3 px-2 flex items-center">
                <img src={FacebookIcon} className="mr-2 w-4 h-4" />
                <span className="w-[200px]">Log in with Facebook</span>
              </button>
              <button className="border border-gray-300 rounded-3xl justify-center py-3 px-2 flex items-center">
                <img src={GoogleIcon} className="mr-2 w-4 h-4" />
                <span className="w-[200px]">Log in with Google</span>
              </button>
              <button className="border rounded-3xl justify-center py-3 px-2 flex items-center">
                <img src={AppleIcon} className="mr-2 w-4 h-4" />
                <span className="w-[200px]">Log in with Apple</span>
              </button>
            </div>

            <div className="twodash flex justify-center my-8 gap-2 items-center">
              <div className="dashone border-b-2 border-black-100 w-full"></div>
              <div className="or px-2 text-sm">Or</div>
              <div className="dashtwo border-b-2 border-black-100 w-full"></div>
            </div>

            <form onSubmit={createNewUser} className=" justify-center">

              <div className="inputBox mb-4 w-[100%] justify-center relative ">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2 absolute bg-white ml-5 -mt-2 px-3 top-0"
                  htmlFor="username"
                >
                  First name
                </label>
                <input
                  className="shadow-md shadow-[#cccccc20] appearance-none border rounded-md w-full py-4 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-4 mb-3 duration-100 focus:border-redd"
                  id="username"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="inputBox mb-4 w-[100%] justify-center relative ">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2 absolute bg-white ml-5 -mt-2 px-3 top-0"
                  htmlFor="lastname"
                >
                  Last name
                </label>
                <input
                  className="shadow-md shadow-[#cccccc20] appearance-none border rounded-md w-full py-4 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-4 mb-3 duration-100 focus:border-redd"
                  id="lastname"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="inputBox mb-4 w-[100%] justify-center relative ">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2 absolute bg-white ml-5 -mt-2 px-3 top-0"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  className="shadow-md shadow-[#cccccc20] appearance-none border rounded-md w-full py-4 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-4 mb-3 duration-100 focus:border-redd"
                  id="email"
                  type="email"
                  placeholder=""
                />
              </div>
              <div className="inputBox mb-4 w-[100%] justify-center relative ">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2 absolute bg-white ml-5 -mt-2 px-3 top-0"
                  htmlFor="phone"
                >
                  Phone number
                </label>
                <input
                  className="shadow-md shadow-[#cccccc20] appearance-none border rounded-md w-full py-4 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-4 mb-3 duration-100 focus:border-redd"
                  id="phone"
                  type="tel"
                  placeholder=""
                />
              </div>
              <div className="inputBox mb-4 w-[100%] justify-center relative ">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2 absolute bg-white ml-5 -mt-2 px-3 top-0"
                  htmlFor="country"
                >
                  Country of residence
                </label>
                <input
                  className="shadow-md shadow-[#cccccc20] appearance-none border rounded-md w-full py-4 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-4 mb-3 duration-100 focus:border-redd"
                  id="country"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="inputBox mb-4 w-[100%] justify-center relative ">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2 absolute bg-white ml-5 -mt-2 px-3 top-0"
                  htmlFor="pword"
                >
                  New Password
                </label>
                <input
                  className="shadow-md shadow-[#cccccc20] appearance-none border rounded-md w-full py-4 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-4 mb-3 duration-100 focus:border-redd"
                  id="pword"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="inputBox mb-4 w-[100%] justify-center relative ">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2 absolute bg-white ml-5 -mt-2 px-3 top-0"
                  htmlFor="confirm"
                >
                  Confirm password
                </label>
                <input
                  className="shadow-md shadow-[#cccccc20] appearance-none border rounded-md w-full py-4 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-4 mb-3 duration-100 focus:border-redd"
                  id="confirm"
                  type="text"
                  placeholder=""
                />
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
