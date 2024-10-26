import  { useState } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 border-b shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold"></h1>
            <div className="flex items-center space-x-6">
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
              <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400">Experience</a>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-32 pb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Abhishek Kashyap</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Full Stack Developer</p>
        </div>
      </header>

      {/* About */}
      <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            I'm a passionate developer with 1 years of experience building web applications.
            I love creating elegant solutions to complex problems and learning new technologies.
          </p>
        </div>
      </section>

      {/* Tech Skills */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['JavaScript','React', 'Tailwind CSS','Bootstrap', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Git/GitHub', 'Vercel'].map((skill) => (
              <div key={skill} className="p-4 border rounded-lg dark:border-gray-700">
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'FirstGenIMDB',
                description: 'A clone of IMDb (Internet Movie Database) built with React and Tailwind CSS, allowing users to discover trending movies, search for movies, view movie details, and manage their watchlist.',
                link: 'https://first-gen-imdb.vercel.app/'
              },
              {
                title: 'Employee Management System',
                description: 'An employee management system where employers assign tasks, and employees accept, manage, and mark tasks as completed.',
                link: '#'
              },
              {
                title: 'Foodie - Food Delivery',
                description: 'A food delivery website built with the live Swiggy API, featuring dynamic restaurant listings, menus, and a checkout system.',
                link: '#'
              },
              {
                title: 'RealTime Location',
                description: 'A real-time location tracker with high accuracy, enabling precise tracking of user movement and location updates in real time.',
                link: '#'
              },
              {
                title: 'More',
                link: '#'
              }
            ].map((project) => (
              <div key={project.title} className="border rounded-lg p-6 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-600 dark:text-blue-400 flex items-center gap-2">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {[
              {
                company: 'Tech Corp',
                role: 'Senior Developer',
                period: '2020 - Present',
                description: 'Leading development of enterprise web applications'
              },
              {
                company: 'StartUp Inc',
                role: 'Full Stack Developer',
                period: '2018 - 2020',
                description: 'Developed and maintained multiple client projects'
              }
            ].map((exp) => (
              <div key={exp.company} className="border-l-4 border-blue-600 pl-4 dark:border-blue-400">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-gray-600 dark:text-gray-300">{exp.company} | {exp.period}</p>
                <p className="mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="hover:text-blue-600 dark:hover:text-blue-400">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-600 dark:hover:text-blue-400">
              <Linkedin size={24} />
            </a>
            <a href="mailto:john@example.com" className="hover:text-blue-600 dark:hover:text-blue-400">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 dark:text-gray-300">
        <p>© 2024 Abhishek Kashyap. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;