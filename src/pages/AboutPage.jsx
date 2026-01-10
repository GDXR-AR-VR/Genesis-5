import { motion } from "framer-motion";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <section className="about-page">
      {/* Background Image */}
      <motion.div
        className="background-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.73 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.img
          src="/assets/8d169005389a6a17d38e8e059f24644c 1@3x.png"
          alt="Background"
          className="background-image"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.1 }}
        />
      </motion.div>

      {/* Decorative blur element */}
      <motion.div
        className="blur-overlay"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false, amount: 0.1 }}
      ></motion.div>

      {/* Top Navigation Bar */}
      <motion.div
        className="top-nav-bar"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src="/assets/Group 1000012493.png"
          alt="Nav Bar Background"
          className="nav-bar-bg"
        />
        {/* Navigation Title */}
        <motion.h1
          className="about-nav-title"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          ABOUT GENESIS
        </motion.h1>
      </motion.div>

      {/* Main Content Box */}
      <motion.div
        className="content-box"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="text-container">
          {/* Page Title */}

          <motion.p
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Rev your engines and fasten your seat belts as the GDXR Club
            kick-starts the Fifth Edition of Genesis - your ticket to an
            adventure that hits closer to home than ever! Returning after the
            2025 Last Edition, this 2026 Genesis isn't just about pixels and
            coding; it's about bringing the spirit of games to life.
          </motion.p>
        </div>
      </motion.div>

      {/* Player Character */}
      <motion.div
        className="player-character"
        initial={{ opacity: 0, x: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          type: "spring",
          stiffness: 100,
        }}
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src="/assets/images/player-character.png"
          alt="Player"
          className="player-image"
        />
      </motion.div>
    </section>
  );
}
