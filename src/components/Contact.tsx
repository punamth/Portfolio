import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = `${firstName} ${lastName}`.trim();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ez4f2xk',
        'template_67c02on',
        form.current!,
        'cwmMfkW7ZHDGsSfUV'
      )
      .then(
        () => {
          setStatusMessage('Message sent successfully!');
          setIsSuccess(true);
          form.current?.reset();
          setFirstName('');
          setLastName('');
        },
        (error) => {
          setStatusMessage('Failed to send message. Please try again.');
          setIsSuccess(false);
          console.error(error);
        }
      );
  };

  return (
   <section
      id="contact"
      className="w-full flex flex-col items-center justify-center bg-cream text-ink py-16 sm:py-10"
    >
      <h2
        className="text-center text-blush-600 font-extrabold mb-10"
        style={{ fontSize: '38px', lineHeight: '1.2' }}
      >
        Contact <i className="fa-solid fa-envelope text-blush-600 ml-2" />
      </h2>
      <div className="w-full flex justify-center px-4 sm:px-6">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 sm:p-10">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input type="hidden" name="name" value={fullName} />

            {/* Name Input */}
            <input
              type="text"
              name="first_name"
              placeholder="Enter your name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blush-500 text-lg placeholder:text-lg"
              required
            />
            <div/>
            <br/>

            {/* Email Input */}              
            <input
                type="email"
                name="email"
                placeholder="Enter your email"
                aria-label="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blush-500 text-lg placeholder:text-lg"
                required
              />
            <div/>
            <br/>

            {/* Message Input */}
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about your project"
              aria-label="Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-xs bg-white focus:outline-none focus:ring-2 focus:ring-blush-500 text-lg placeholder:text-lg"
              required
            ></textarea>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-5 font-bold text-black transition-colors hover:blush-700 flex items-center gap-2"
                style={{ 
                  backgroundColor: '#d96b86',
                  borderRadius: '32px'
                }}
              >
                Send
                <i className="fa-solid fa-paper-plane" />
              </button>       
            </div>
            <br/>

            {/* Status Message */}
            {statusMessage && (
              <div
                className={`p-3 rounded-md text-center font-medium ${
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
    </section>
  );
};

export default Contact;