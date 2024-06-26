"use client";
import React, { useState, useEffect, useRef } from "react";
import logo from "@/public/assets/images/logo.png";
import Image from "next/image";

const AgeVerification: React.FC = () => {
  const [birthYear, setBirthYear] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
  const [rememberDevice, setRememberDevice] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleBirthYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBirthYear(e.target.value);
    setErrorMessage("");

    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(value);

    if (value.length === 4) {
      const currentYear = new Date().getFullYear();
      const age = currentYear - parseInt(value);

      if (age >= 120) {
        setErrorMessage("Sorry, please enter a valid date (YYYY)");
        setIsSubmitDisabled(true);
      } else {
        setIsSubmitDisabled(false);
      }
    } else {
      setIsSubmitDisabled(true);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleSubmit = () => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(birthYear);

    if (age >= 18) {
      setShowModal(false);
    } else {
      setErrorMessage(
        "Sorry, your age does not permit you to enter at this time"
      );
    }
  };

  const handleRememberDevice = () => {
    setRememberDevice(!rememberDevice);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        event.target instanceof HTMLElement &&
        !modalRef.current.contains(event.target)
      ) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    if (showModal) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showModal]);

  return (
    <>
      {showModal && (
        <div className="modal inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md"
              ref={modalRef}
            >
              <Image src={logo} alt="" priority />
              <h4 className="regular-14 font-bold mb-2">Year</h4>
              <input
                type="text"
                placeholder="YYYY"
                maxLength={4}
                value={birthYear}
                onChange={handleBirthYearChange}
                onKeyPress={handleKeyPress}
                className="remove-arrow text-center border rounded-md px-4 py-2 w-full mb-4 appearance-none"
              />
              {errorMessage && (
                <p className="text-red-500 mb-4">{errorMessage}</p>
              )}
              <div className="flex justify-center">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitDisabled}
                  className={`bg-white border border-black text-black font-bold py-2 px-4 rounded-md ${
                    isSubmitDisabled ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  ENTER
                </button>
              </div>
              {/* <div className="flex items-center my-4">
                <input
                  type="checkbox"
                  checked={rememberDevice}
                  onChange={handleRememberDevice}
                  className="mr-2"
                />
                <label className="regular-14">Remember me on this device</label>
              </div> */}
              <p className="regular-14 text-center mt-4">Please confirm your age</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AgeVerification;