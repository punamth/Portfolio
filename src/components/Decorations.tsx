// src/components/Decorations.tsx

const Decorations = () => (
  <>
    
    {/* Right side waves */}
    <svg
      className="fixed top-0 right-0 h-full w-32 opacity-25 pointer-events-none z-0"
      viewBox="0 0 100 1000"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M50,0 C90,200 20,400 50,600 C90,800 20,1000 50,1200"
        fill="none"
        stroke="#f9a8d4"
        strokeWidth="2.5"
      />
      <path
        d="M60,0 C100,250 30,500 60,750 C100,950 30,1100 60,1300"
        fill="none"
        stroke="#f43f5e"
        strokeWidth="5"
      />
    </svg>

    {/* Additional elegant curve on right */}
    <svg
    className="fixed top-0 right-8 h-full w-24 opacity-25 pointer-events-none z-0"
    viewBox="0 0 100 1000"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    >
    <path
        d="M50,0 C60,250 40,500 50,750 C60,900 40,1000 50,1200"
        fill="none"
        stroke="#fda4af"
        strokeWidth="4"
    />
    </svg>

  </>
);

export default Decorations;
