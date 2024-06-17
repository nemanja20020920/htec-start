/* eslint-disable react/prop-types */
import { createFilter } from 'react-search-input';
import { useEffect, useState } from 'react';
import mails from '../mails';
import { CustomSearchInput } from '../styles/CustomSearch';

const KEYS_TO_FILTERS = ['user.name', 'subject'];

const CustomSearch = ({ setFilteredMails }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    filterMails();
  }, [searchTerm]);

  const filterMails = () => {
    setFilteredMails(mails.filter(createFilter(searchTerm, KEYS_TO_FILTERS)));
  };

  return (
    <div>
      <CustomSearchInput onChange={setSearchTerm} />
    </div>
  );
};

export default CustomSearch;
