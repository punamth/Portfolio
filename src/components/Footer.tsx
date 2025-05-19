// Footer.tsx
const Footer = () => (
  <footer className="bg-dark text-white text-center py-4 mt-2">
    <div className="container">
      <p className="mb-2">&copy; {new Date().getFullYear()} Punam Thokar. All rights reserved.</p>
      <div className="d-flex justify-content-center gap-3">
        <a href="http://linkedin.com/in/punam-thokar-a6a64625a" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
          <i className="bi bi-linkedin fs-5"></i>
        </a>
        <a href="https://github.com/punamth" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
          <i className="bi bi-github fs-5"></i>
        </a>
        
      </div>
    </div>
  </footer>
);

export default Footer;
