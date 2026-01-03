import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', href: '#home' },
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
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="w-full pl-4 pr-40 h-14 flex items-center justify-between">
        <div className="text-2xl font-bold text-[#12294d] tracking-wide">
          Punam/<span className="font-light opacity-60">Portfolio</span>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#12294d] hover:text-[#D9A441]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Nav Links */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 p-4 lg:p-0 text-lg font-medium">
            {navItems.map(({ name, href }) => (
              <li key={name}>
               <a
                  href={href}
                  className={`
                    block cursor-pointer py-2 lg:py-0 transition-colors duration-300
                    ${activeSection === href.replace('#', '')
                      ? '!text-[#D9A441] font-bold'
                      : 'text-[#12294d] hover:text-[#D9A441]'}
                  `}
                  onClick={() => {
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
