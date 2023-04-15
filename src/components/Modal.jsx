import React from "react";
import "./styles/modal.css";

import { IoClose } from "react-icons/io5";

const Modal = ({ closeModal }) => {
  return (
    <article className="modal__background">
      <div className="modal__container">
        <IoClose className="close__modal__btn" onClick={closeModal} />
        <div className="modal__title">
          <h2>How to guide on how to use the Olukowe App</h2>
        </div>
        <div className="modal__body">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reiciendis, harum impedit similique, libero ex blanditiis explicabo
            expedita magni earum qui eum voluptas voluptatum, aut ipsum?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reiciendis, harum impedit similique, libero ex blanditiis explicabo
            expedita magni earum qui eum voluptas voluptatum, aut ipsum? Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis,
            harum impedit similique, libero ex blanditiis explicabo expedita
            magni earum qui eum voluptas voluptatum, aut ipsum?
          </p>
        </div>
        <div className="modal__footer">
          <button onClick={closeModal} id="cancle__btn">
            Skip
          </button>
          <button>Continue</button>
        </div>
      </div>
    </article>
  );
};

export default Modal;
