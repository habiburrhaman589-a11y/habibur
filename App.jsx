import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PortfolioWebsite() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Habibur Rahman - Portfolio";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Navbar */}
      <header className="fixed w-full bg-gray-900/80 backdrop-blur text-white px-6 py-4 flex justify-between items-center shadow-lg z-50">
        <h1 className="text-2xl font-bold">Habibur Rahman</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-yellow-300">About</a>
          <a href="#education" className="hover:text-yellow-300">Education</a>
          <a href="#projects" className="hover:text-yellow-300">Projects</a>
          <a href="#skills" className="hover:text-yellow-300">Skills</a>
          <a href="#contact" className="hover:text-yellow-300">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          Hi, I'm <span className="text-yellow-300">Habibur Rahman</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl max-w-2xl mb-8"
        >
          HSC Batch 2027 | Science Student | Self Employer | Prompt Engineer
        </motion.p>
        <a
          href="#projects"
          className="px-6 py-3 bg-yellow-300 text-black rounded-full font-semibold shadow-lg hover:scale-105 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 md:px-20 bg-white text-black text-center"
      >
        <h3 className="text-4xl font-bold mb-6">About Me</h3>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          I'm Habibur Rahman, a science student from Balarhat, Shariatpur,
          Dhaka. Passionate about technology and problem-solving. I aim to
          create innovative solutions and pursue excellence in academics and
          beyond.
        </p>
        <p className="mt-4 text-lg">📞 Phone: 01713383589</p>
        <p className="mt-1 text-lg">📍 Address: Balarhat, Shariatpur, Dhaka</p>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 md:px-20 bg-gray-900 text-center"
      >
        <h3 className="text-4xl font-bold mb-6">Contact Me</h3>
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl focus:outline-none text-black"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl focus:outline-none text-black"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl focus:outline-none text-black h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-yellow-300 text-black rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        ) : (
          <p className="text-green-400 text-xl font-semibold">
            ✅ Message submitted successfully (Demo)!
          </p>
        )}
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black/50 text-center">
        <p>© 2025 Habibur Rahman. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
