import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import FilterForm from '../FilterForm/FilterForm';
import FilterInput from '../FilterInput/FilterInput';
import FilterTitle from '../FilterTitle/FilterTitle';
import { Button, InputWrapper } from './FilterStartPage.styled';
import { startReadingBookAsync } from '../../../../redux/books/booksOperations';

const FilterStartPage = ({ id }) => {
  const dispatch = useDispatch();

  const onSubmit = ({ page }) => {
    dispatch(startReadingBookAsync({ page, id }))
      .unwrap()
      .catch(error =>
        Notiflix.Notify.failure(`${error}`, { position: 'center-center' })
      );
  };
  return (
    <div>
      <FilterTitle title="Start page:" />
      <FilterForm onSubmit={onSubmit} initialValues={{ page: '' }}>
        <InputWrapper>
          <FilterInput
            label="Page number:"
            placeholder="0"
            type="text"
            name="page"
          />
        </InputWrapper>
        <Button type="submit">To start</Button>
      </FilterForm>
    </div>
  );
};

export default FilterStartPage;
