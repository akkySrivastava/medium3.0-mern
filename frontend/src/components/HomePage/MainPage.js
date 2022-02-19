import React from "react";
import { AuthModal } from "../Modals/AuthModal";
import "./css/MainPage.css";

// gt-super, Georgia, Cambria, "Times New Roman", Times, serif

const MainPage = ({ signInPopup }) => {
  const [modal, setModal] = React.useState(false);

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-content">
          <h3>
            Medium is a place <br /> to write, read, and <br /> connect
          </h3>
          <h6>
            It's easy and free to post your thinking on any topic and connect
            with millions of readers.
          </h6>
          <button onClick={() => setModal(true)}>Start Writing</button>
        </div>
      </div>
      <div>
        <AuthModal signInPopup={signInPopup} open={modal} setOpen={setModal} />
      </div>
    </div>
  );
};

export default MainPage;
