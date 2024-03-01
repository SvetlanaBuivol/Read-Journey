import FilterInput from '../FilterInput/FilterInput';
import { Button, InputWrapper } from './FilterRecommended.styled';
import FilterTitle from '../FilterTitle/FilterTitle';
import FilterForm from '../FilterForm/FilterForm';

const FilterRecommended = () => {
  const onSubmit = (values, actions) => {
    console.log('onSubmit  values', values);
    actions.resetForm();
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
