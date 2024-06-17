import styled from 'styled-components';
import Modal from 'react-modal';

export const CustomModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  background-color: #fff;
  border: 2px solid grey;
  border-radius: 5px;
  min-width: 30%;
  padding: 20px 0;
  margin: 0 auto;

  .Overlay {
    background-color: rebeccapurple;
  }
`;
