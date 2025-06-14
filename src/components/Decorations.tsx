const Decorations = () => {
  return (
    <>
      {/* Right flowing curve */}
      <svg
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh',
          width: '80px',
          opacity: 0.3,
          pointerEvents: 'none',
          zIndex: 10,
        }}
        viewBox="0 0 100 1000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M50,0 C90,250 20,500 50,750 C90,900 20,1000 50,1200"
          fill="none"
          stroke="#ec4899"
          strokeWidth="4"
        />
      </svg>

      {/* Left mirror curve */}
      <svg
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: '80px',
          opacity: 0.3,
          pointerEvents: 'none',
          zIndex: 10,
        }}
        viewBox="0 0 100 1000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M50,0 C10,250 80,500 50,750 C10,900 80,1000 50,1200"
          fill="none"
          stroke="#f9a8d4"
          strokeWidth="4"
        />
      </svg>
    </>
  );
};

export default Decorations;
