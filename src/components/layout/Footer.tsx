import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={styles.header}>
      <div style={styles.logo}></div>

      <nav style={styles.nav}>
        <Link to="/contact" style={styles.link}>
          Contact Us
        </Link>
        <Link to="/private" style={styles.link}>
          Private & Confidential
        </Link>
      </nav>
      <div style={styles.nav}>© 2026, Template.com</div>
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    backgroundColor: "#1e293b",
    color: "white",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default Footer;
