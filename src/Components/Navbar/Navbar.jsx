import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const pageList = ["Home", "About", "Projects", "Skills", "Contact Me"];

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#Home">
          <img
            src={require("../../Assets/Images/signature-logo.png")}
            alt="logo"
          />
        </a>
      </div>

      <ul className="navbar-links">
        {pageList.map((item) => (
          <li className="navbar-links-format" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="navbar-menu">
        <MdMenu onClick={handleToggle} />
        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              // whileInView={{ x: [300, 0] }}
              // transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX onClick={handleToggle} />
              <ul className="navbar-menu-ul">
                {pageList.map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={handleToggle}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
