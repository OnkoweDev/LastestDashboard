import React, { useState } from "react";
import "./styles/modal.css";

import { IoClose } from "react-icons/io5";

const Modal = ({ closeModal }) => {
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  // modal contents
  const modalContent = [
    {
      title: "How it works",
      first:
        "1. Hey everyone! Are you ready to learn about the fascinating and mysterious world of SS? In this video, I'll show you how to use SS with the target keywords to get the most out of it. So let's get started and dive right in! 2. Hi there! Are you ready to explore the incredible world of SS? In this video, I'll show you how to use SS with the target keywords to take your experience to the next level. So let's get going and have some fun! 3. Hi everyone! Are you ready to unlock the power of SS? In this video, I'll show you how to use SS with the target keywords and get the most out of it. So let's get started and find out how SS can benefit you!",
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

  const handleBack = (e) => {
    e.preventDefault();
    if (count < modalContent.length + 1) {
      setCount((count) => (count -= 1));
      console.log(count);
    } else {
      setCount(modalContent.length + 1);
    }
  };

  console.log(modalContent.length);

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
        {/* {modalContent.map((item) => {
          return (
            <div className="wrapper">
              <div className="modal__title">
                <h2>{item[count]?.title}</h2>
              </div>
              <div className="modal__body">
                <p>{item[count].first}</p>
                <p>{item[count].second}</p>
              </div>
            </div>
          );
        })} */}
        <div className="modal__footer">
        <button onClick={count ? handleBack : closeModal}>back</button>
          <button onClick={handleNext}>Next</button>
          <button onClick={closeModal} id="cancle__btn">Skip</button>

      
        </div>
        </div>
      </article>
    );
  };
}

export default Modal;
