import { useDispatch } from "react-redux";
import {stopReadingBookAsync } from "../../../../redux/books/booksOperations";
import FilterTitle from "../FilterTitle/FilterTitle";
import FilterForm from "../FilterForm/FilterForm";
import { Button, InputWrapper } from "./FilterStopPage.styled";
import FilterInput from "../FilterInput/FilterInput";

const FilterStopPage = ({id}) => {
    const dispatch = useDispatch();

  const onSubmit = ({ page }, actions) => {
       dispatch(stopReadingBookAsync({  page, id }));
    }
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
}

export default FilterStopPage