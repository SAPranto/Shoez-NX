"use client";
import { signIn } from "next-auth/react";
import React from "react";

const GoogleButton = () => {
  return (
    <button
      onClick={() =>
        signIn("google", {
          callbackUrl: `${window.location.origin}`,
        })
      }
      className="py-4 px-10 bg-red-500 hover:bg-red-600 transition-colors rounded-xl mt-4 text-white"
    >
      Sign In With Google
    </button>
  );
};

export default GoogleButton;
