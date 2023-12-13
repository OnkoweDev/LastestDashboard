import React, { useState } from "react";
import "./styles/modal.css";

import { IoClose } from "react-icons/io5";

const Modal = ({ closeModal }) => {
  const [count, setCount] = useState(0);

  const modalContent = [
    { title: "Step1", content1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at hendrerit libero. Phasellus eget lacus finibus felis tempor placerat vitae eu c ", content2: "content2" },

    { title: "Step2", content1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at hendrerit libero. Phasellus eget lacus finibus felis tempor placerat vitae eu ", content2: "content4" },
    { title: "Step3", content1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at hendrerit libero. Phasellus eget lacus finibus felis tempor placerat vitae eu ", content2: "content6" },
  ];

  const handleNext = () => {
    if (count < modalContent.length - 1) {
      setCount((count) => (count += 1));
    }
  };

  const handlePrev = () => {
    if (count > 0) {
      setCount((count) => (count -= 1));
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
        <section className="modal__wrapper">
          <header className="modal__title">
            <h2>{modalContent[count].title}</h2>
          </header>
          <article className="modal__body">
            <p>{modalContent[count]?.content1}</p>
            <p>{modalContent[count]?.content2}</p>
          </article>

          <div className="modal__footer">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={closeModal} id="cancle__btn">
            Skip
          </button>
          <button onClick={handleNext}>Next</button>
        </div>
        </section>
        
        </div>
        </article>

    );

}

export default Modal;
