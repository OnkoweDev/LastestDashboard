import React, { useState } from "react";
import "./styles/modal.css";

import { IoClose } from "react-icons/io5";

const Modal = ({ closeModal }) => {
  const [count, setCount] = useState(0);

  const modalContent = [
    { title: "title1", content1: "content1", content2: "content2" },
    { title: "title2", content1: "content3", content2: "content4" },
    { title: "title3", content1: "content5", content2: "content6" },
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
        </section>
        <div className="modal__footer">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={closeModal} id="cancle__btn">
            Skip
          </button>
          <button onClick={handleNext}>Next</button>
=======
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

<<<<<<< HEAD
      
        </div>
=======
          <div className="modal__footer">
            <button onClick={count ? handleBack : closeModal}>back</button>
            <button onClick={handleNext}>Next</button>
            <button onClick={closeModal} id="cancle__btn">
              Skip
            </button>
          </div>

>>>>>>> d2c3dfb6f38c903f1167ff443dfb1a5e6441f5ea
        </div>
      </article>
    );
  };
}

export default Modal;
