import { useState } from 'react';
import Select from 'react-select'
import { customStyles } from './MyLibrarySelect.styled';

const MyLibrarySelect = () => {
    const [selectedOption, setSelectedOption] = useState('All books');

    const options = [
        { value: 'all', label: 'All books' },
        { value: 'unread', label: 'Unread' },
        { value: 'in-progress', label: 'In progress' },
        {value: 'done', label: 'Done'},
    ]

  const handleChange = selectedOption => {
      setSelectedOption(selectedOption);
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
