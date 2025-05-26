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
        form.current?.reset(); // Clear form
      },
      (error) => {
        setStatusMessage('Failed to send message. Please try again.');
        setIsSuccess(false);
        console.error(error);
      }
    );
  };

  return (
    <section className="py-3 bg-light" id="contact" style={{ marginTop: '40px' }}>
      <div className="container">
        <h2 className="text-center mb-3">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form ref={form} onSubmit={sendEmail} className="p-3 border rounded bg-white shadow-sm">
              <div className="mb-2">
                <label className="form-label">Your Name</label>
                <input type="text" name="name" className="form-control" required />
              </div>
              <div className="mb-2">
                <label className="form-label">Your Email</label>
                <input type="email" name="email" className="form-control" required />
              </div>
              <div className="mb-2">
                <label className="form-label">Your Message</label>
                <textarea name="message" className="form-control" rows={3} required></textarea>
              </div>
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-primary px-4">Send Message</button>
              </div>

              {/* Message below the form */}
              {statusMessage && (
                <div
                  className={`alert mt-3 ${isSuccess ? 'alert-success' : 'alert-danger'}`}
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
