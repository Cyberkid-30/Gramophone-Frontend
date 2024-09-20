import { useState } from "react";
import "./LandingPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Modal from "./Modal";
import backgroundImage from "/background-2.jpg";

function LandingPage() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar />
      <div
        className="section-1"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="welcome-text">
          WELCOME TO OUR <br />
          STUDENT SERVICES
        </h1>
        <p style={{ color: "#fff" }}>WE ARE GLAD TO HAVE YOU HERE WITH US.</p>
        <button className="login-btn" onClick={handleOpenModal}>
          LOGIN
        </button>
        <Modal show={showModal} handleClose={handleCloseModal} />
      </div>
    </div>
  );
}

export default LandingPage;
