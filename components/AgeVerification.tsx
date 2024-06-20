"use client";
import React, { useState, useEffect } from 'react';

const AgeVerification = () => {
  const [birthYear, setBirthYear] = useState('');
  const [showModal, setShowModal] = useState(true);

  const handleBirthYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthYear(e.target.value);
  };

  const handleSubmit = () => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(birthYear);

    if (age >= 18) {
      setShowModal(false);
    } else {
      alert('You must be 18 years old or above to access this content.');
    }
  };

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (showModal) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [showModal]);

  return (
    <>
      {showModal && (
        <div className="modal fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">Age Verification</h2>
              <p className="mb-4">
                Please enter your birth year to verify that you are 18 years old or above.
              </p>
              <input
                type="number"
                placeholder="YYYY"
                value={birthYear}
                onChange={handleBirthYearChange}
                className="remove-arrow text-center border rounded-md px-4 py-2 w-full mb-4 appearance-none"
              />
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AgeVerification;
