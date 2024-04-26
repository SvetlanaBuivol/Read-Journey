import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { stopReadingBookAsync } from '../../../../redux/books/booksOperations';
import FilterTitle from '../FilterTitle/FilterTitle';
import FilterForm from '../FilterForm/FilterForm';
import { Button, InputWrapper } from './FilterStopPage.styled';
import FilterInput from '../FilterInput/FilterInput';
import { getReadingBook } from '../../../../redux/books/booksSelectors';

const FilterStopPage = ({ id, openModal }) => {
  const { totalPages } = useSelector(getReadingBook);
  const dispatch = useDispatch();

  const onSubmit = ({ page }) => {
    dispatch(stopReadingBookAsync({ page, id }))
      .unwrap()
      .catch(error =>
        Notiflix.Notify.failure(`${error}`, { position: 'center-center' })
      );
    if (+page === totalPages) {
      openModal();
    }
  };
  return (
    <div>
      <FilterTitle title="Stop page:" />
      <FilterForm onSubmit={onSubmit} initialValues={{ page: '' }}>
        <InputWrapper>
          <FilterInput
            label="Page number:"
            placeholder="0"
            type="text"
            name="page"
          />
        </InputWrapper>
        <Button type="submit">To stop</Button>
      </FilterForm>
    </div>
  );
};

export default FilterStopPage;
