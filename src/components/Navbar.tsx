import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const getActiveSection = () => {
    const pathname = location.pathname;
    if (pathname === '/') return 'home';
    return pathname.substring(1);
  };

  const activeSection = getActiveSection();

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 h-20 flex justify-between items-center">
        <div className="text-2xl font-bold text-pink-600 tracking-wide">
          Punam Thokar
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-pink-600 focus:outline-none transition-colors duration-300"
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 p-4 lg:p-0 text-lg font-medium">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className={`block cursor-pointer py-2 lg:py-0 transition-colors duration-300 ${
                    activeSection === (path === '/' ? 'home' : path.substring(1))
                      ? 'text-pink-600 font-bold'
                      : 'text-gray-800 hover:text-pink-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;