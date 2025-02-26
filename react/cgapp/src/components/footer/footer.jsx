import React from "react";
import "../header/Header.css"; // Reusing the Header.css file

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
