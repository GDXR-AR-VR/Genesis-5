import { motion } from "framer-motion";
import "./PrizePoolPage.css";

export default function PrizePoolPage() {
  // Figma image assets
  const imgC55Fd304E31Eedca4521C551C0D499601 =
    "/assets/gold.png";
  const imgD1641B7A333147Fc2984Ad5D09Dda7951 =
    "/assets/silver.png";
  const img5176357Efef6D35201F9A7Ff45655Bb21 =
    "/assets/bronze.png";
  const img148E55193F6Ab08E8Bfbe72C0F24Aa231 =
    "/assets/plat.png";
  const img527D90Bfea8C2Adcbc88Ebacc807303B1 =
    "/assets/platblue.png";
  const imgImage5 =
    "/assets/image 5.png";
  const imgBlockOfEmerald28Texture29Je4Be31 =
    "https://www.figma.com/api/mcp/asset/ee8c1ca5-b36e-4201-90f1-2cb22190f3a8";
  const imgBlockOfGold28Texture29Je5Be31 =
    "https://www.figma.com/api/mcp/asset/6eeac0e4-7018-45d8-ac17-b4356bde3070";
  const imgBlockOfDiamond28Texture29Je4Be31 =
    "https://www.figma.com/api/mcp/asset/fe20f632-90d1-498c-a0ed-b90007fa31d9";
  const imgGroup1000012447 = "/assets/Group 1000012493.png";

  return (
    <section className="prize-pool-page">
      {/* Background - keeping existing for consistency */}
      <div className="prize-pool-bg-blur" />

      {/* Navigation Bar with Separator */}
      <motion.div
        className="prize-pool-nav-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="prize-pool-separator-container">
          <img
            src={imgGroup1000012447}
            alt="Separator"
            className="prize-pool-separator-img"
          />
        </div>
        <h1 className="prize-pool-title">PRIZE POOL</h1>
      </motion.div>

      {/* First Row - Main Game Jam Track Prizes */}
      <div className="prize-tiles-row top-row">
        <motion.div
          className="prize-tile prize-1st"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="prize-tile-header gold">
            <span className="rank">1</span>
            <span className="rank-suffix">st</span>
            <span className="label">PRIZE</span>
          </div>
          <div className="prize-tile-body gold-bg">
            <img
              src={imgC55Fd304E31Eedca4521C551C0D499601}
              alt="1st prize icon"
              className="prize-icon"
            />
            <div className="prize-amount">₹ 17500</div>
          </div>
        </motion.div>

        <motion.div
          className="prize-tile prize-2nd"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="prize-tile-header silver">
            <span className="rank">2</span>
            <span className="rank-suffix">nd</span>
            <span className="label">PRIZE</span>
          </div>
          <div className="prize-tile-body silver-bg">
            <img
              src={imgD1641B7A333147Fc2984Ad5D09Dda7951}
              alt="2nd prize icon"
              className="prize-icon"
            />
            <div className="prize-amount">₹ 15000</div>
          </div>
        </motion.div>

        <motion.div
          className="prize-tile prize-3rd"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="prize-tile-header bronze">
            <span className="rank">3</span>
            <span className="rank-suffix">rd</span>
            <span className="label">PRIZE</span>
          </div>
          <div className="prize-tile-body bronze-bg">
            <img
              src={img5176357Efef6D35201F9A7Ff45655Bb21}
              alt="3rd prize icon"
              className="prize-icon"
            />
            <div className="prize-amount">₹ 12500</div>
          </div>
        </motion.div>
      </div>

      {/* VR Track Button */}
      <div className="vr-track-container">
        <motion.div
          className="vr-track-button"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.08, y: -5 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          <div className="vr-track-image">
            <img src={imgImage5} alt="VR track thumbnail" />
          </div>
          <div className="vr-track-label">VR TRACK</div>
        </motion.div>
      </div>

      {/* Second Row - VR Track Prizes */}
      <div className="prize-tiles-row bottom-row">
        <motion.div
          className="prize-tile prize-4th"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="prize-tile-header deep">
            <span className="rank">1</span>
            <span className="rank-suffix">st</span>
            <span className="label">PRIZE</span>
          </div>
          <div className="prize-tile-body deep-bg">
            <img
              src={img148E55193F6Ab08E8Bfbe72C0F24Aa231}
              alt="VR 1st prize icon"
              className="prize-icon"
            />
            <div className="prize-amount">₹ 10000</div>
          </div>
        </motion.div>

        <motion.div
          className="prize-tile prize-5th"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="prize-tile-header blue">
            <span className="rank">2</span>
            <span className="rank-suffix">nd</span>
            <span className="label">PRIZE</span>
          </div>
          <div className="prize-tile-body blue-bg">
            <img
              src={img527D90Bfea8C2Adcbc88Ebacc807303B1}
              alt="VR 2nd prize icon"
              className="prize-icon"
            />
            <div className="prize-amount">₹ 5000</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
