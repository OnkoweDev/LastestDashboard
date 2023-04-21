import React, { useState } from "react";
import "./styles/modal.css";

import { IoClose } from "react-icons/io5";

const Modal = ({ closeModal }) => {
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  // modal contents
  const modalContent = [
    {
      title: "Heading 1",
      first:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, harum impedit similique, libero ex blanditiis explicabo expedita magni earum qui eum voluptas voluptatum, aut ipsum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, harum impedit similique, libero ex blanditiis explicabo expedita magni earum qui eum voluptas voluptatum, aut ipsum?",
      second:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, harum impedit similique, libero ex blanditiis explicabo expedita magni earum qui eum voluptas voluptatum, aut ipsum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, harum impedit similique, libero ex blanditiis explicabo expedita magni earum qui eum voluptas voluptatum, aut ipsum?",
    },
    {
      title: "Heading 2",
      first:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, harum impedit similique, libero ex blanditiis explicabo expedita magni earum qui eum voluptas voluptatum, aut ipsum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, harum impedit similique, libero ex blanditiis explicabo expedita magni earum qui eum voluptas voluptatum, aut ipsum?",
      second:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, harum impedit similique, libero ex blanditiis explicabo expedita magni earum qui eum voluptas voluptatum, aut ipsum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, harum impedit similique, libero ex blanditiis explicabo expedita magni earum qui eum voluptas voluptatum, aut ipsum?",
    },
    {
      title: "Heading 3",
      first:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, harum impedit similique, libero ex blanditiis explicabo expedita magni earum qui eum voluptas voluptatum, aut ipsum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, harum impedit similique, libero ex blanditiis explicabo expedita magni earum qui eum voluptas voluptatum, aut ipsum?",
      second:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, harum impedit similique, libero ex blanditiis explicabo expedita magni earum qui eum voluptas voluptatum, aut ipsum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, harum impedit similique, libero ex blanditiis explicabo expedita magni earum qui eum voluptas voluptatum, aut ipsum?",
    },
  ];

  const handleNext = (e) => {
    e.preventDefault();
    if (count < modalContent.length - 1) {
      setCount((count) => (count += 1));
      console.log(count);
    } else {
      setCount(modalContent.length - 1);
    }

    // disable continue button when end of modal is reached
    if (count === modalContent.length - 1) {
      setDisable(true);
      console.log(disable);
    }
  };

  return (
    <article className="modal__background" onClick={closeModal}>
      <div
        className="modal__container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <IoClose className="close__modal__btn" onClick={closeModal} />
        <div className="modal__title">
          <h2>{modalContent[count].title}</h2>
        </div>
        <div className="modal__body">
          <p>{modalContent[count].first}</p>
          <p>{modalContent[count].second}</p>
        </div>

        <div className="modal__footer">
          <button onClick={closeModal} id="cancle__btn">
            Skip
          </button>
          <button
            onClick={handleNext}
            disabled={disable}
            style={
              disable
                ? {
                    cursor: "not-allowed",
                    background: "grey",
                    color: "#faf",
                    borderColor: "transparent",
                  }
                : { cursor: "pointer" }
            }
          >
            Continue
          </button>
        </div>
      </div>
    </article>
  );
};

export default Modal;
