import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

function App() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState('bg-transparent');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setBgColor(scrollY > 50 ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent');
      setShowScrollTop(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = (e, section) => {
    e.preventDefault();
    const targetSection = document.getElementById(section);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-screen min-h-screen font-sans relative overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full p-5 transition-all duration-300 z-50 ${bgColor} text-white`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <a href="#" className="text-xl font-bold text-white">MauriceVF</a>
          <div className="hidden md:flex space-x-8 text-lg">
            <a href="#about" className="hover:text-gray-400" onClick={(e) => handleScroll(e, 'about')}>Over mij</a>
            <a href="#skills" className="hover:text-gray-400" onClick={(e) => handleScroll(e, 'skills')}>Skills</a>
            <a href="#projects" className="hover:text-gray-400" onClick={(e) => handleScroll(e, 'projects')}>Projecten</a>
            <a href="#contact" className="hover:text-gray-400" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-black py-4 space-y-4 text-center">
            <a href="#about" className="block py-2 hover:text-gray-400" onClick={(e) => handleScroll(e, 'about')}>Over mij</a>
            <a href="#projects" className="block py-2 hover:text-gray-400" onClick={(e) => handleScroll(e, 'projects')}>Projecten</a>
            <a href="#skills" className="block py-2 hover:text-gray-400" onClick={(e) => handleScroll(e, 'skills')}>Skills</a>
            <a href="#contact" className="block py-2 hover:text-gray-400" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
          </div>
        )}
      </nav>

      {/* Updated Header with Background Image */}
      <header
        className="h-[100vh] flex flex-col items-center justify-center text-center bg-cover bg-center px-6 text-white"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/31527881/pexels-photo-31527881/free-photo-of-dramatic-black-and-white-coastal-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
        }}
      >
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold" data-aos="fade-up">Maurice van Felius</h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200" data-aos="fade-up" data-aos-delay="200">
            Van idee naar indrukwekkende digitale ontwikkelingen
          </p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="400">
            <a
              href="#contact"
              className="bg-black/70 text-white py-2 px-4 rounded-lg hover:bg-black"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Neem Contact Op
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="w-full h-[100vh] bg-gray-100 text-black flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">Over Mij</h2>
          <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Ik ben een gepassioneerde webontwikkelaar met expertise in moderne frameworks zoals React en Tailwind CSS.
            Mijn doel is om innovatieve en gebruiksvriendelijke websites te maken. Momenteel ben ik op zoek naar een stage bij een internetbureau of marketing bedrijf.
            Ook sta ik open om projecten op zzp basis te gaan doen voor bedrijven, denk hierbij bijvoorbeeld aan een website, video editing of een mobiele applicatie.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full min-h-[110vh] bg-gray-200 text-black flex items-center justify-center py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8" data-aos="fade-up">Mijn Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[{ name: 'JavaScript', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', description: 'Een krachtige programmeertaal voor webapplicaties.' },
              { name: 'Express', img: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png', description: 'Een minimalistisch framework voor Node.js voor het bouwen van webapplicaties.' },
              { name: 'CSS', img: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg', description: 'De stijltaal die de visuele presentatie van HTML-webpagina\'s regelt.' },
              { name: 'Tailwind', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/640px-Tailwind_CSS_Logo.svg.png', description: 'Een utility-first CSS framework voor snelle webontwikkeling.' },
              { name: 'HTML', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png', description: 'De standaard voor het structureren van webpagina\'s.' },
              { name: 'Video Editing', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Mp4logo.png/640px-Mp4logo.png', description: 'Professionele videobewerkingssoftware voor het creëren van video-inhoud.' },
              { name: 'Photoshop', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Adobe_Photoshop_CS6_icon.svg/640px-Adobe_Photoshop_CS6_icon.svg.png', description: 'Gebruik voor grafisch ontwerp en fotobewerking.' },
              { name: 'Adobe XD', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/640px-Adobe_XD_CC_icon.svg.png', description: 'Ontwerptool voor prototyping en user interface ontwerpen.' },
              { name: 'PHP', img: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg', description: 'Server-side scriptingtaal voor dynamische webpagina\'s.' },
              { name: 'Java', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', description: 'Veelgebruikte programmeertaal voor server- en desktoptoepassingen.' },
              { name: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', description: 'Een populaire JavaScript-bibliotheek voor het bouwen van gebruikersinterfaces.' },
              { name: 'React Native', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', description: 'Een framework voor het bouwen van mobiele apps met JavaScript.' }]
              .map((skill, index) => (
                <div key={index} className="bg-gray-300 p-6 shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300" data-aos="zoom-in-up" data-aos-delay={index * 100}>
                  <img src={skill.img} alt={skill.name} className="w-12 h-12 mb-4 mx-auto" />
                  <h3 className="text-2xl font-semibold mb-2 text-black">{skill.name}</h3>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full h-[100vh] bg-gray-300 text-black flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">Mijn Projecten</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ name: 'Open Hiring', img: '../public/images.png', text: 'Een platform voor het snel en efficiënt aannemen van nieuwe medewerkers, met een focus op het automatiseren van het proces.' },
              { name: 'Excalibur Game', img: '../public/download.png', text: 'Een spannend platformspel waarin de speler een man bestuurt die stenen blokken moet ontwijken en appels moet verzamelen om te overleven.' },
              { name: 'Restaurant App', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png', text: 'Een app die klanten in staat stelt om eenvoudig gerechten te bestellen en te betalen, met extra functionaliteiten zoals reserveringen en menukaarten.' }]
              .map((project, index) => (
                <div key={index} className="bg-gray-800 p-6 shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300" data-aos="zoom-in-up" data-aos-delay={index * 200}>
                  <div className="w-full h-40 mb-4 overflow-hidden">
                    <img src={project.img} alt={project.name} className="w-full h-full object-contain rounded-lg" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">{project.name}</h3>
                  <p className="text-gray-400">{project.text}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full min-h-[100vh] bg-gray-400 text-black flex items-center justify-center py-16">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-8" data-aos="fade-up">Contact</h2>
          <p className="text-lg mb-8" data-aos="fade-up" data-aos-delay="200">
            Heb je interesse in een samenwerking of heb je vragen? Neem dan gerust contact met mij op.
          </p>
          <a
            href="mailto:maurice@mauricevf.nl"
            className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Email Mij
          </a>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-black/80 hover:bg-black transition duration-300 text-white shadow-lg z-50"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        <p>&copy; 2025 Maurice van Felius. Alle rechten voorbehouden.</p>
      </footer>
    </div>
  );
}

export default App;
