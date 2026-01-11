import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./TimelinePage.css";

const TimelinePage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="timeline-page"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Cloud Transition Effects */}
      {/* Left to Right Clouds */}
      <motion.img
        src="/assets/cloud1.png"
        alt=""
        className="cloud-transition cloud-1"
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: "120%", opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, ease: "linear" }}
        viewport={{ once: false, amount: 0.2 }}
      />
      <motion.img
        src="/assets/cloud 2.png"
        alt=""
        className="cloud-transition cloud-2"
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: "120%", opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, delay: 0.5, ease: "linear" }}
        viewport={{ once: false, amount: 0.2 }}
      />
      <motion.img
        src="/assets/cloud1.png"
        alt=""
        className="cloud-transition cloud-3"
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: "120%", opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3.5, delay: 1, ease: "linear" }}
        viewport={{ once: false, amount: 0.2 }}
      />

      {/* Right to Left Clouds */}
      <motion.img
        src="/assets/cloud 2.png"
        alt=""
        className="cloud-transition cloud-4"
        initial={{ x: "120%", opacity: 0 }}
        whileInView={{ x: "-100%", opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3.5, delay: 0.3, ease: "linear" }}
        viewport={{ once: false, amount: 0.2 }}
      />
      <motion.img
        src="/assets/cloud1.png"
        alt=""
        className="cloud-transition cloud-5"
        initial={{ x: "120%", opacity: 0 }}
        whileInView={{ x: "-100%", opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4.5, delay: 0.8, ease: "linear" }}
        viewport={{ once: false, amount: 0.2 }}
      />
      <motion.img
        src="/assets/cloud 2.png"
        alt=""
        className="cloud-transition cloud-6"
        initial={{ x: "120%", opacity: 0 }}
        whileInView={{ x: "-100%", opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3.8, delay: 1.5, ease: "linear" }}
        viewport={{ once: false, amount: 0.2 }}
      />

      <img
        src="/assets/timeline.png"
        alt="Timeline"
        className="timeline-image timeline-desktop"
      />
      <img
        src="/assets/timelinephone.png"
        alt="Timeline"
        className="timeline-image timeline-mobile"
      />
      <motion.img
        src="/assets/images/Group 1000012550.png"
        alt="Track Rail"
        className="track-rail-image"
        animate={isInView ? "animate" : "initial"}
        variants={{
          initial: { y: 0 },
          animate: { y: "90vh" },
        }}
        transition={{ duration: 8, ease: "linear" }}
      />
    </motion.div>
  );
};

export default TimelinePage;
