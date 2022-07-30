import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./AuthModal.css";

export const AuthModal = ({ open, setOpen, signInPopup }) => {
  //   const [open, setOpen] = useState(false);

  //   const onOpenModal = () => setOpen(true);
  //   const onCloseModal = () => setOpen(false);

  const closeIcon = (
    <svg class="jh" width="29" height="29">
      <path
        d="M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"
        fillRule="evenodd"
      ></path>
    </svg>
  );

  return (
    <Modal
      classNames={{
        overlayAnimationIn: "customEnterOverlayAnimation",
        overlayAnimationOut: "customLeaveOverlayAnimation",
        modalAnimationIn: "customEnterModalAnimation",
        modalAnimationOut: "customLeaveModalAnimation",
        overlay: "customOverlay",
        modal: "customModal",
      }}
      closeIcon={closeIcon}
      animationDuration={800}
      open={open}
      onClose={() => setOpen(false)}
      center
    >
      <div className="modal">
        <h2>Welcome back</h2>
        <div className="signInButtons">
          <button onClick={signInPopup}>
            <svg width="25" height="25" class="nk gz y">
              <g fill="none" fillRule="evenodd">
                <path
                  d="M20.66 12.7c0-.61-.05-1.19-.15-1.74H12.5v3.28h4.58a3.91 3.91 0 0 1-1.7 2.57v2.13h2.74a8.27 8.27 0 0 0 2.54-6.24z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M12.5 21a8.1 8.1 0 0 0 5.63-2.06l-2.75-2.13a5.1 5.1 0 0 1-2.88.8 5.06 5.06 0 0 1-4.76-3.5H4.9v2.2A8.5 8.5 0 0 0 12.5 21z"
                  fill="#34A853"
                ></path>
                <path
                  d="M7.74 14.12a5.11 5.11 0 0 1 0-3.23v-2.2H4.9A8.49 8.49 0 0 0 4 12.5c0 1.37.33 2.67.9 3.82l2.84-2.2z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M12.5 7.38a4.6 4.6 0 0 1 3.25 1.27l2.44-2.44A8.17 8.17 0 0 0 12.5 4a8.5 8.5 0 0 0-7.6 4.68l2.84 2.2a5.06 5.06 0 0 1 4.76-3.5z"
                  fill="#EA4335"
                ></path>
              </g>
            </svg>
            Continue with Google
          </button>
          {/* <button>
            <svg width="25" height="25" class="nk gz y">
              <path d="M4 6v13h17V6H4zm5.9 7.97l2.6 2.12 2.6-2.12 4.14 4.02H5.76l4.15-4.02zm-4.88 3.32V9.97l4.1 3.35-4.1 3.97zm10.87-3.97l4.1-3.35v7.32l-4.1-3.97zm4.1-6.3v1.64l-7.49 6.12-7.48-6.13V7.01h14.96z"></path>
            </svg>
            Continue with email
          </button> */}

          {/* <div className="modal-body">
            Already sign up? <span>Sign In</span>
          </div> */}
        </div>

        <div className="modal-footer">
          <span>
            Click “Sign Up” to agree to Medium's Terms of Service and
            acknowledge that Medium's Privacy Policy applies to you.
          </span>
        </div>
      </div>
    </Modal>
  );
};
