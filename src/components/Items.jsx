/* eslint-disable react/prop-types */
import { SingleMailWrapper } from '../styles/CustomSearch';
import ModalTest from './ModalTest';

const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((mail) => (
          <SingleMailWrapper key={mail.id}>
            <p>Name:{mail.user.name}</p>
            <p>Name:{mail.user.name}</p>
            <ModalTest mail={mail} />
          </SingleMailWrapper>
        ))}
    </>
  );
};

export default Items;
