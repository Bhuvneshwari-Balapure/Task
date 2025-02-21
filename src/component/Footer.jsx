import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="bg" className="bg-light text-center text-white">
      <div className="p-4 pb-0">
        <section className="mb-4">
          <a
            href="#!"
            className="m-1"
            style={{
              backgroundColor: "#3b5998",
              padding: "10px",
              borderRadius: "50%",
              color: "white",
              display: "inline-block",
            }}
          >
            <FaFacebookF />
          </a>
          <a
            href="#!"
            className="m-1"
            style={{
              backgroundColor: "#55acee",
              padding: "10px",
              borderRadius: "50%",
              color: "white",
              display: "inline-block",
            }}
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.google.co.in/"
            className="m-1"
            style={{
              backgroundColor: "#dd4b39",
              padding: "10px",
              borderRadius: "50%",
              color: "white",
              display: "inline-block",
            }}
          >
            <FaGoogle />
          </a>
          <a
            href="#!"
            className="m-1"
            style={{
              backgroundColor: "#ac2bac",
              padding: "10px",
              borderRadius: "50%",
              color: "white",
              display: "inline-block",
            }}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/bhuvneshwari-balapure-126702209/"
            className="m-1"
            style={{
              backgroundColor: "#0082ca",
              padding: "10px",
              borderRadius: "50%",
              color: "white",
              display: "inline-block",
            }}
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Bhuvneshwari-Balapure"
            className="m-1"
            style={{
              backgroundColor: "#333333",
              padding: "10px",
              borderRadius: "50%",
              color: "white",
              display: "inline-block",
            }}
          >
            <FaGithub />
          </a>
        </section>
      </div>

      <div
        className="text-center p-3 text-black"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a className="text-blue" href="https://mdbootstrap.com/">
          {" "}
          MDBootstrap.com{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
