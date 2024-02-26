"use client";
import { signIn } from "next-auth/react";
import React from "react";

const GithubButton = () => {
  return (
    <button
    onClick={() => {
      console.log("Button clicked");
      signIn("github", {
        callbackUrl: `${window.location.origin}`,
      });
    }}
    className="py-4 px-10 bg-blue-500 hover:bg-blue-600 transition-colors rounded-xl mt-4 text-white"
  >
    Sign In With Github
  </button>
  );
};

export default GithubButton;
