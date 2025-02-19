"use client";

import { useState } from "react";
const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    console.log("mss", res);
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
      setIsSubmitted(true);
    }
  };

  return (
    <div
      id="contactMe"
      className="bg-gradient-to-t from-blue-100 to-yellow-50 w-full shadow-2xl px-4 sm:px-8 md:px-12 lg:px-24 xl:px-28"
    >
      <h1 className="text-red-500 text-2xl font-semibold pt-4 sm:py-16 sm:text-3xl md:text-5xl text-center">
        Contact
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-center items-center">
          <div className="max-w-md text-center w-full">
            <div className="mb-6">
              {/* Animated Code Symbol */}
              <div className="animate-bounce mb-4">
                <svg
                  className="w-20 h-20 mx-auto text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                Let&apos;s Connect!
              </h3>

              {/* Animated Code Lines */}
              <div className="space-y-2 text-left bg-gray-800 p-4 rounded-lg shadow-lg font-mono text-sm">
                <p className="text-green-400 animate-typing overflow-hidden whitespace-nowrap">
                  &gt; const developer = new Developer();
                </p>
                <p className="text-blue-400 animate-typing-2 overflow-hidden whitespace-nowrap">
                  &gt; developer.openToWork = true;
                </p>
                <p className="text-purple-400 animate-typing-3 overflow-hidden whitespace-nowrap">
                  &gt; developer.connect();
                </p>
              </div>
            </div>

            <p className="text-gray-600 mb-8">
              Ready to collaborate on exciting projects?
              <br />
              Let&apos;s turn ideas into reality!
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-0">
          <div className="bg-slate-100 flex flex-col">
            {error &&
              error.length > 0 &&
              error.map((e, index) => (
                <div key={index} className="text-red-600 px-5 py-2">
                  {e}
                </div>
              ))}
          </div>
          {success ? (
            <div className="text-green-600 font-semibold text-xl text-center py-4">
              Thank you for your message!
            </div>
          ) : (
            <form className="py-4 mt-4 border-t flex flex-col gap-5 max-w-md mx-auto">
              <div>
                <label htmlFor="fullname">Full Name</label>
                <input
                  onChange={(e) => setFullname(e.target.value)}
                  value={fullname}
                  type="text"
                  id="fullname"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  id="email"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message">Your Message</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="h-32"
                  id="message"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  className="bg-green-700 px-8 py-3 text-white font-bold rounded hover:bg-green-800 transition-colors"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
export default Contact;
