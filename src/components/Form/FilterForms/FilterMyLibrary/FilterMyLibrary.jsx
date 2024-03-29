import { useDispatch } from 'react-redux';
import FilterForm from '../FilterForm/FilterForm';
import FilterInput from '../FilterInput/FilterInput';
import FilterTitle from '../FilterTitle/FilterTitle';
import { Button, InputWrapper } from './FilterMyLibrary.styled';
import { addBookAsync } from '../../../../redux/books/booksOperations';

const FilterMyLibrary = () => {
  const dispatch = useDispatch()

  const onSubmit = ({title, author, pages}, actions) => {
    dispatch(addBookAsync({
      title,
      author,
      totalPages: pages,
      }))
        // console.log("onSubmit  values", values)
        actions.resetForm();
    }
  return (
    <div>
      <FilterTitle title="Create your library:" />
      <FilterForm onSubmit={onSubmit} initialValues={{ title: '', author: '', pages: '' }}>
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
          <FilterInput
            label="Number of pages:"
            placeholder="Enter text"
            type="number"
            name="pages"
          />
        </InputWrapper>
        <Button type="submit">Add book</Button>
      </FilterForm>
    </div>
  );
};

export default FilterMyLibrary;
