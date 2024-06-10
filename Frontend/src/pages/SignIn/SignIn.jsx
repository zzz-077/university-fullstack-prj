import React, { useState } from "react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    userID: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full h-full bg-slate-950 flex items-center justify-center">
      <div className="w-full max-w-sm py-6 px-6   rounded-lg shadow sm:p-6 md:p-8 bg-gray-800 border-gray-700">
        <form className="pb-5" onSubmit={handleSubmit}>
          <h5 className="text-2xl font-medium text-white text-center uppercase">
            SIS IBSU
          </h5>
          <div className="mt-3 mb-4">
            <label
              htmlFor="text"
              className="block mb-1 text-sm font-medium text-white"
            >
              Your ID
            </label>
            <input
              type="text"
              name="userID"
              id="text"
              value={formData.userID}
              onChange={handleChange}
              className="border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
              placeholder="Your Unique ID"
              required
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-white"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                required
              />
              <button
                type="button"
                onClick={() => {
                  formData.password
                    ? setShowPassword((prev) => !prev)
                    : null;
                }}
                className={`absolute top-0 end-0 p-3.5 rounded-e-md transition-all duration-300 ${
                  formData.password
                    ? "opacity-100  hover:opacity-80"
                    : "opacity-0 cursor-text"
                }`}
              >
                {showPassword ? (
                  <svg
                    className="flex-shrink-0 size-3.5 text-gray-400 scale-125"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                ) : (
                  <svg
                    className="flex-shrink-0 size-3.5 text-gray-400 scale-125"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                    <line x1="2" x2="22" y1="2" y2="22"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-white focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
