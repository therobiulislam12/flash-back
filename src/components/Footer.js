import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <p>
          Flash Back Industries Ltd.
          <br />
          Providing reliable camera since 2020
          <br />
          Copyright © {new Date().getFullYear()} - All right reserved 
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a href="/#" className="link link-hover">
          Used Camera
        </a>
        <a href="/#" className="link link-hover">
          Buyers and seller connect
        </a>
        <a href="/#" className="link link-hover">
          Advertisement
        </a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a href="/#" className="link link-hover">
          About us
        </a>
        <a href="/#" className="link link-hover">
          Contact
        </a>
        <a href="/#" className="link link-hover">
          Jobs
        </a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a href="/#" className="link link-hover">
          Terms of use
        </a>
        <a href="/#" className="link link-hover">
          Privacy policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
