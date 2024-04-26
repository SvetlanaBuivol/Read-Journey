import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import FilterInput from '../FilterInput/FilterInput';
import { Button, InputWrapper } from './FilterRecommended.styled';
import FilterTitle from '../FilterTitle/FilterTitle';
import FilterForm from '../FilterForm/FilterForm';
import { recommendedBooksAsync } from '../../../../redux/books/booksOperations';

const FilterRecommended = () => {
  const dispatch = useDispatch();

  const onSubmit = ({ title, author }, actions) => {
    if (title || author) {
      dispatch(recommendedBooksAsync({ title, author }));
      actions.resetForm();
    } else {
      Notiflix.Notify.warning('At least one field must be filled in', {
        position: 'center-center',
      });
    }
  };
  return (
    <div>
      <FilterTitle title="Filter:" />
      <FilterForm onSubmit={onSubmit} initialValues={{ title: '', author: '' }}>
        <InputWrapper>
          <FilterInput
            label="Book title:"
            placeholder="Enter text"
            type="text"
            name="title"
          />
          <FilterInput
            label="The author:"
            placeholder="Enter text"
            type="text"
            name="author"
          />
        </InputWrapper>
        <Button type="submit">To apply</Button>
      </FilterForm>
    </div>
  );
};

export default FilterRecommended;
