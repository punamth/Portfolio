import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    emailjs
      .send(
        'service_ez4f2xk',
        'template_67c02on',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        'cwmMfkW7ZHDGsSfUV'
      )
      .then(
        () => {
          setStatusMessage('Message sent successfully!');
          setIsSuccess(true);
          setFormData({ name: '', email: '', message: '' });
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
      className="bg-[#0B1323] text-[#D9A441] min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-24 py-20"
    >
      <div className="container max-w-6xl">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9A441] to-orange-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let's work together!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-700">
            <div className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D9A441] transition-all"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-white mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D9A441] transition-all"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D9A441] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-[#D9A441] to-orange-400 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <Send size={20} />
                Send Message
              </button>

              {/* Status Message */}
              {statusMessage && (
                <div
                  className={`p-3 rounded-lg text-center font-medium ${
                    isSuccess
                      ? 'bg-green-500/20 text-green-300 border border-green-500/40'
                      : 'bg-red-500/20 text-red-300 border border-red-500/40'
                  }`}
                  role="alert"
                >
                  {statusMessage}
                </div>
              )}
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="bg-[#D9A441] rounded-2xl p-8 shadow-xl text-white">
            <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
            <p className="text-white/90 mb-8 text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            {/* Contact Links */}
            <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:thokarpunam14@gmail.com"
                className="flex items-center gap-4 text-white hover:text-white/80 transition-colors group"
              >
                <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors">
                  <Mail size={24} />
                </div>
                <span className="text-lg font-medium">thokarpunam14@gmail.com</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/punamth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white hover:text-white/80 transition-colors group"
              >
                <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors">
                  <Github size={24} />
                </div>
                <span className="text-lg font-medium">github.com/punamth</span>
              </a>

              {/* LinkedIn */}
              <a
                href="http://linkedin.com/in/punam-thokar-a6a64625a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white hover:text-white/80 transition-colors group"
              >
                <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors">
                  <Linkedin size={24} />
                </div>
                <span className="text-lg font-medium">linkedin.com/in/punam-thokar</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;