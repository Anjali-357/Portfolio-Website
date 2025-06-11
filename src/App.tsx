import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Download,
  ExternalLink,
  Code,
  Palette,
  BookOpen,
  Database,
  Cpu,
  Users
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = [
    { category: 'Technical Skills', items: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Python', 'C++', 'GitHub'], icon: Code },
    { category: 'Creative Skills', items: ['Creative Writing', 'Ideation', 'Editing', 'Graphic Design'], icon: Palette },
    { category: 'Design Tools', items: ['Canva', 'Pages', 'Figma'], icon: Palette },
    { category: 'Database', items: ['MySQL', 'MongoDB'], icon: Database },
    { category: 'Other', items: ['Public Speaking', 'Literature', 'DSA Coding'], icon: Users }
  ];

  const projects = [
    {
      title: 'Sign Language Recognition System',
      description: 'Real-time sign language to text translation using MediaPipe, TensorFlow, ReactJS, and Firebase.',
      tech: ['Python', 'TensorFlow', 'ReactJS', 'Firebase'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'QuizQuest',
      description: 'Java + Spring Boot full-stack quiz application with REST APIs, database, and Spring Security.',
      tech: ['Java', 'Spring Boot', 'REST APIs', 'Spring Security'],
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Bentelligent',
      description: 'Static website for club selection and event interaction using HTML/CSS/JS/Python.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Python'],
      gradient: 'from-green-500 to-blue-500'
    },
    {
      title: 'Customer Sentiment Analysis Tool',
      description: 'Hackathon project using DeBERTa, MongoDB, Azure, and Power BI.',
      tech: ['DeBERTa', 'MongoDB', 'Azure', 'Power BI'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Dhwani',
      description: 'AI-powered audio deepfake detection using CNN + Bi-LSTM, built during Hackacino 3.0.',
      tech: ['CNN', 'Bi-LSTM', 'AI', 'Python'],
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const services = [
    {
      title: 'Graphic Design',
      description: 'Professional graphic design using Canva, Pages, and Figma for all your visual needs.',
      icon: Palette
    },
    {
      title: 'Web Design & UI Mockups',
      description: 'Modern, responsive web designs and interactive UI mockups that engage users.',
      icon: Code
    },
    {
      title: 'Content Writing & Ideation',
      description: 'Creative content writing and innovative ideation for your projects and campaigns.',
      icon: BookOpen
    },
    {
      title: 'DSA & Python Coding',
      description: 'Expert assistance in Data Structures & Algorithms and Python programming.',
      icon: Cpu
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              Anjali Tiwari
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-white hover:text-purple-300 transition-colors duration-300 ${
                    activeSection === item.id ? 'text-purple-300 border-b-2 border-purple-300' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-white hover:text-purple-300 py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-2xl mb-8 animate-pulse">
              <img 
                src="/WhatsApp Image 2023-06-24 at 10.28.55 PM.png" 
                alt="Anjali Tiwari"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce delay-300"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Anjali Tiwari
          </h1>
          <p className="text-2xl md:text-3xl text-purple-200 mb-8 animate-fade-in delay-300">
            Creative Technologist & Developer
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto animate-fade-in delay-500">
            Passionate about Python programming and creating innovative solutions. 
            Skilled in graphic designing and delivering captivating visual content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
                <p className="text-white/80 leading-relaxed">
                  Passionate about Python programming and creating innovative solutions. Skilled in graphic designing 
                  and adept at delivering captivating visual content. Experienced in public speaking and connecting 
                  with diverse audiences. Book lover who believes in the power of literature. Proficient in database 
                  management and MySQL. Also skilled in DSA Coding with C++. Always seeking new challenges and growth opportunities.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="text-lg font-semibold text-white">B.Tech in Computer Science and Engineering</h4>
                    <p className="text-purple-200">Bennett University (2023–2027)</p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="text-lg font-semibold text-white">12th Grade</h4>
                    <p className="text-purple-200">Kendriya Vidyalaya Sangthan</p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="text-lg font-semibold text-white">10th Grade</h4>
                    <p className="text-purple-200">Kendriya Vidyalaya Sangthan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Experience</h2>
          
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Cpu className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">AI-driven Education Loan Approval Automation</h3>
                  <p className="text-purple-200 mb-2">Internship at Bennett University</p>
                  <p className="text-white/80">
                    Developed an AI-driven system for automating education loan approval processes for Indian banks, 
                    improving efficiency and reducing processing time.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <BookOpen className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">LaTeX Mathematical Quizzes</h3>
                  <p className="text-purple-200 mb-2">Freelance Work</p>
                  <p className="text-white/80">
                    Created LaTeX-based mathematical quizzes for college faculty using engineering calculus 
                    and linear algebra, ensuring high-quality typesetting and mathematical accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <skillGroup.icon className="text-purple-300" size={24} />
                  <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white px-3 py-1 rounded-full text-sm border border-purple-300/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-white/80">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className={`h-32 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4">
                    <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-white/80 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white px-2 py-1 rounded text-xs border border-purple-300/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="text-purple-300" size={24} />
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-white/80">anjali33357@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-purple-300" size={24} />
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <p className="text-white/80">+91 9329937932</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Linkedin className="text-purple-300" size={24} />
                    <div>
                      <p className="text-white font-semibold">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/anjali-tiwari-880676273/" className="text-purple-300 hover:text-purple-200 transition-colors">
                        View Profile
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Github className="text-purple-300" size={24} />
                    <div>
                      <p className="text-white font-semibold">GitHub</p>
                      <a href="https://github.com/Anjali-357" className="text-purple-300 hover:text-purple-200 transition-colors">
                        View Repositories
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2025 Anjali Tiwari. All rights reserved. Built with passion and creativity.
          </p>
        </div>
      </footer>

      {/* Floating Elements */}
      <div className="fixed top-1/4 left-4 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse opacity-60"></div>
      <div className="fixed top-1/2 right-8 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce opacity-60"></div>
      <div className="fixed bottom-1/4 left-8 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse delay-500 opacity-60"></div>
    </div>
  );
}

export default App;