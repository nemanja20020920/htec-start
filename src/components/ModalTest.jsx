/* eslint-disable react/prop-types */
import React from 'react';
import { CustomModal } from '../styles/Modal';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

const ModalTest = ({ mail }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button style={{ marginBottom: '10px' }} onClick={openModal}>
        Open Modal
      </button>
      <CustomModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{mail.subject}</h2>
        <p>Name: {mail.user.name}</p>
        <p>Job: {mail.user.job}</p>
        <p>Company: {mail.user.company}</p>
        <button onClick={closeModal}>close</button>
      </CustomModal>
    </div>
  );
};

export default ModalTest;
