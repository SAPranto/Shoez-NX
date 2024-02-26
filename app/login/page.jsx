"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { ImEye } from "react-icons/im";

const login = () => {
  return (
    <div className=" bg-slate-50">
      <div className="section">
        <div className="container max-w-lg">
          <form
            action="#"
            className="bg-white mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              Sign in to your account
            </p>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow"
                  placeholder="Enter email"
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow"
                  placeholder="Enter password"
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <ImEye className="cursor-pointer hover:text-red-600 transition-colors" />
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 hover:bg-indigo-800 transition-colors px-5 py-3 text-sm font-medium text-white"
            >
              Sign in
            </button>
            <p className="text-center text-sm text-gray-500">
              No account?
              <a className="underline" href="#">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
