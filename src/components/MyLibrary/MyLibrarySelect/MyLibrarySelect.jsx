import { useState } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { customStyles } from './MyLibrarySelect.styled';
import { getOwnBooksAsync } from '../../../redux/books/booksOperations';

const MyLibrarySelect = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState('All books');

  const options = [
    { value: 'all', label: 'All books' },
    { value: 'unread', label: 'Unread' },
    { value: 'in-progress', label: 'In progress' },
    { value: 'done', label: 'Done' },
  ];

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    dispatch(getOwnBooksAsync(selectedOption.value));
  };
  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder={selectedOption}
        styles={customStyles}
      />
    </div>
  );
};

export default MyLibrarySelect;
