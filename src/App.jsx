import { useState } from 'react';
import './App.css';
import CustomSearch from './components/CustomSearch';
import Pagination from './components/Pagination';
import mails from './mails';
import { CustomWrapper } from './styles/Pagination';

function App() {
  const [filteredMails, setFilteredMails] = useState(mails);

  return (
    <>
      <CustomWrapper>
        <h1>Mailbox</h1>
        <p>Type the name of email sender or subject of email to search.</p>
      </CustomWrapper>
      <CustomSearch setFilteredMails={setFilteredMails} />
      <Pagination items={filteredMails} itemsPerPage={2} />
    </>
  );
}

export default App;
