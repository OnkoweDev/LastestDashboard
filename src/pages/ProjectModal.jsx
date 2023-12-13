import React, { useState } from 'react';
import '../pages/styles/projectModal.css'; 
import "../components/styles/modal.css";


const Modal = ({closeModal}) => {

  return (
    <div className='modal__background'>
      <div className='modal__container'>
        <button className='close__modal__btn' onClick={()=>closeModal(false)}>X</button>

        <div className='modal__title'>
          <h1>Create Project</h1>
        </div>
        <div className='modal__body'>
              <input className='input' type='text' placeholder='Enter Project Name' />          
              <input className='input' type='text'  placeholder='Enter Project Title'/>
        </div>
        <div className='modal__footer'>
          <button className='btn' onClick={()=>closeModal(false)}>Cancel</button>
          <button className='btn'>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
