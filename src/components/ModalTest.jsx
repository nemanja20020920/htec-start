/* eslint-disable react/prop-types */
import { useState } from 'react';
import { CustomModal } from '../styles/Modal';

const ModalTest = ({ mail }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  return (
    <div>
      <button style={{ marginBottom: '10px' }} onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      <CustomModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Custom Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{mail.subject}</h2>
        <p>Name: {mail.user.name}</p>
        <p>Job: {mail.user.job}</p>
        <p>Company: {mail.user.company}</p>
        <button onClick={() => setIsOpen(false)}>close</button>
      </CustomModal>
    </div>
  );
};

export default ModalTest;
