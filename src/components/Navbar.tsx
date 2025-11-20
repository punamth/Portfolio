import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sectionIds = navItems.map(n => n.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // 👇 Loosened margins so the last section like #contact is easier to detect
        rootMargin: '0px 0px -30% 0px',
        threshold: 0.1,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-cream shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 h-15 flex justify-between items-center">
        {/* Logo / Title */}
        <div className="text-2xl font-bold text-blush-600 tracking-wide">
          Punam/<span className="font-light text-blush-500">Portfolio</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-ink hover:text-blush-600 focus:outline-none transition-colors duration-300"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-cream lg:bg-transparent shadow-lg lg:shadow-none`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 p-4 lg:p-0 text-lg font-medium">
            {navItems.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className={`block cursor-pointer py-2 lg:py-0 transition-colors duration-300 ${
                    activeSection === href.replace('#', '')
                      ? 'text-blush-600 font-bold'
                      : 'text-ink hover:text-blush-600'
                  }`}
                  onClick={() => {
                    // 👇 Instantly highlight the clicked link
                    setActiveSection(href.replace('#', ''));
                    setIsOpen(false);
                  }}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
