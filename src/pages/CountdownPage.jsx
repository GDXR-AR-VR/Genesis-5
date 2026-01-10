import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./CountdownPage.css";

export default function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-02-14T00:00:00");

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown-page">
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
        <h1 className="nav-title">BATTLE BEGINS IN</h1>
      </motion.div>

      {/* Background */}
      <motion.div
        className="countdown-bg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src="/assets/images/coundown.jpg"
          alt="Background"
          className="countdown-bg-img"
        />

        {/* Countdown Timer */}
        <motion.div
          className="countdown-timer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="timer-display">
            <div className="time-unit">
              <span className="time-value">{timeLeft.days}</span>
              <span className="time-label">Days</span>
            </div>
            <div className="time-unit">
              <span className="time-value">{timeLeft.hours}</span>
              <span className="time-label">Hours</span>
            </div>
            <div className="time-unit">
              <span className="time-value">{timeLeft.minutes}</span>
              <span className="time-label">Minutes</span>
            </div>
            <div className="time-unit">
              <span className="time-value">{timeLeft.seconds}</span>
              <span className="time-label">Seconds</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./CountdownPage.css";

export default function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-02-14T00:00:00");

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown-page">
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
        <h1 className="nav-title">BATTLE BEGINS IN</h1>
      </motion.div>

      {/* Background */}
      <motion.div
        className="countdown-bg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src="/assets/images/coundown.jpg"
          alt="Background"
          className="countdown-bg-img"
        />

        {/* Countdown Timer */}
        <motion.div
          className="countdown-timer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="timer-display">
            <div className="time-unit">
              <span className="time-value">{timeLeft.days}</span>
              <span className="time-label">Days</span>
            </div>
            <div className="time-unit">
              <span className="time-value">{timeLeft.hours}</span>
              <span className="time-label">Hours</span>
            </div>
            <div className="time-unit">
              <span className="time-value">{timeLeft.minutes}</span>
              <span className="time-label">Minutes</span>
            </div>
            <div className="time-unit">
              <span className="time-value">{timeLeft.seconds}</span>
              <span className="time-label">Seconds</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
