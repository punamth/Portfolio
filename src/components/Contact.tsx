const Contact = () => (
  <section className="py-3 bg-light" id="contact" style={{ marginTop: '40px' }}>
    <div className="container">
      <h2 className="text-center mb-3">Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="p-3 border rounded bg-white shadow-sm">
            <div className="mb-2">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="mb-2">
              <label className="form-label">Your Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-2">
              <label className="form-label">Your Message</label>
              <textarea className="form-control" rows={3} placeholder="Enter your message"></textarea>
            </div>
            <div className="text-center mt-3">
              <button type="submit" className="btn btn-primary px-4">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
