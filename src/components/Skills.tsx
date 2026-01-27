const skills = [
  { 
    name: 'HTML', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    color: 'from-orange-500 to-red-500',
    bg: 'bg-white'
  },
  { 
    name: 'CSS', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-white'
  },
  { 
    name: 'JavaScript', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: 'from-yellow-400 to-yellow-600',
    bg: 'bg-white'
  },
  { 
    name: 'TypeScript', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-white'
  },
  { 
    name: 'React', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: 'from-cyan-400 to-blue-500',
    bg: 'bg-white'
  },
  { 
    name: 'Python', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: 'from-blue-600 to-yellow-500',
    bg: 'bg-white'
  },
  { 
    name: 'C#', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    color: 'from-purple-600 to-purple-800',
    bg: 'bg-white'
  },
  { 
    name: 'Git', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    color: 'from-orange-600 to-red-600',
    bg: 'bg-white'
  },
  { 
    name: 'Tailwind CSS', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    color: 'from-teal-400 to-blue-600',
    bg: 'bg-white'
  },

  { 
    name: 'Node.js', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: 'from-green-500 to-green-700',
    bg: 'bg-white'
  },

  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    color: 'from-green-600 to-green-800',
    bg: 'bg-white'
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0B1323] py-16 sm:py-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-24">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-5 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

       <div className="text-[#D9A441] font-md mb-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="!text-5xl md:text-5xl lg:text-6xl text-center mb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Skills
          </h2>
          <p className="text-center text-white mb-4 text-xl max-w-2xl mx-auto pl-6 sm:pl-10">
            Tools and Technologies I work with
          </p>
          <br/>
          <br/>
        
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-16">
              {skills.map((skill) => {
                return (
                  <div key={skill.name} className="flex flex-col items-center gap-4">
                    <div
                      className={`group relative ${skill.bg} backdrop-blur-sm rounded-2xl w-20 h-20 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 flex items-center justify-center`}
                    >
                      <div className="w-15 h-15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    </div>
                    <h3 className="text-white text-center text-md">
                      {skill.name}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
          </div>
        </div>
    </section>
  );
}