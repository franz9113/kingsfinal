"use client";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const NewsletterInput = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div>
      <span className="text-white font-bold">
        <button className="flex items-center justify-between px-2 md:px-4 py-1 md:py-2 bg-transparent border border-[#d8b476] rounded-md">
          <span className="flex items-center">
            <input
              type="text"
              placeholder="Your mail"
              className="bg-transparent border-none outline-none text-white placeholder-white mr-1 md:mr-2"
            />
          </span>
          <span className="flex items-center">
            Submit
            <ArrowLongRightIcon className="h-4 md:h-5 w-4 md:w-5 text-white ml-1 md:ml-2" />
          </span>
        </button>
      </span>
    </div>
  );
};

export default NewsletterInput;
