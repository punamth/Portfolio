import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ez4f2xk',      // Replace with your actual Service ID
      'template_67c02on',     // Replace with your actual Template ID
      form.current!,
      'cwmMfkW7ZHDGsSfUV'     // Replace with your actual Public Key
    ).then(
      () => {
        setStatusMessage('Message sent successfully!');
        setIsSuccess(true);
        form.current?.reset();
      },
      (error) => {
        setStatusMessage('Failed to send message. Please try again.');
        setIsSuccess(false);
        console.error(error);
      }
    );
  };

  return (
    <section className="min-h-[87vh] flex items-center justify-center bg-gray-200 text-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 w-full">
        <div className="text-center mb-8">
          <h1
            className="text-9xl font-extrabold text-pink-600"
            style={{ fontSize: '32px', marginLeft: '-1rem' }}
          >
            Contact Me
          </h1>
        </div>

        <br/>
        
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="p-8 border-2 border-pink-200 rounded-2xl bg-white shadow-2xl backdrop-blur-sm"
            >
              <div className="mb-6">
                <label className="block text-left font-semibold mb-2 text-gray-800 ml-4">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300" 
                  placeholder="Enter your full name"
                  required 
                />
              </div>

              <br/>

              <div className="mb-6">
                <label className="block text-left font-semibold mb-2 text-gray-800 ml-2">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300" 
                  placeholder="Enter your email address"
                  required 
                />
              </div>

              <br/>

              <div className="mb-6">
                <label className="block text-left font-semibold mb-2 text-gray-800 ml-2">Your Message</label>
                <textarea 
                  name="message" 
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 resize-none transition-all duration-300" 
                  rows={4} 
                  placeholder="Tell me about your project or inquiry..."
                  required
                ></textarea>
              </div>

              <div className="text-center mt-8">
                <button 
                  type="submit" 
                  className="px-8 py-3 font-semibold text-white rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: '#ec4899' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#be185d';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ec4899';
                  }}
                >
                  Send Message 
                </button>
              </div>
              <br/>

              {statusMessage && (
                <div
                  className={`mt-6 p-4 rounded-lg text-center font-semibold ${
                    isSuccess 
                      ? 'bg-green-100 text-green-800 border border-green-300' 
                      : 'bg-red-100 text-red-800 border border-red-300'
                  }`}
                  role="alert"
                >
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;