import React, { useState, useCallback } from "react";
import styles from "../style";
import Button from "./Button";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const toggleButtonClick = () => {
    setShowInput(() => !showInput);
  };

  const handleInputChange = useCallback((e) => {
    setEmail(e.target.value);
    setError(""); // Clear error when user starts typing
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (email.includes("@")) {
      setShowInput(false);
      setError("");
    } else {
      setError("Please enter a valid email address."); // Set error message if invalid
    }
  };

  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Get Notified First!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Be the first to know when HiGuy is ready to revolutionize your customer service. Sign up now and stay updated with the latest news and offers.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        {showInput ? (
          <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row items-center">
            <div className="relative flex">
              <input
                type="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className={`py-2 px-4 rounded-[10px] mb-4 sm:mb-0 sm:mr-4 text-black ${submitted && error ? 'border-red-500' : ''
                  }`}
                required
              />
              {submitted && error && (
                <span className="text-red-500 text-sm absolute top-full mt-1">
                  {error}
                </span>
              )}
            </div>
            <Button text="Submit" onClick={handleFormSubmit} />
          </form>
        ) : (
          <Button text="Stay in touch" onClick={toggleButtonClick} className="animate-bounce" />
        )}
      </div>
    </section>
  );
};

export default CTA;