import FilterRecommended from '../components/Form/FilterForms/FilterRecommended/FilterRecommended';
import Dashboard from '../components/Dashboard/Dashboard';
import CallToAction from '../components/Dashboard/CallToAction/CallToAction';
import Quote from '../components/Dashboard/Quote/Quote';
import PagesTitle from '../components/PagesTitle/PagesTitle';
import RecommendedList from '../components/Recommended/RecommendedList/RecommendedList';

const Recommended = () => {
  return (
    <>
    <Dashboard >
      <FilterRecommended />
      <CallToAction />
      <Quote />
      </Dashboard>

      <PagesTitle title='Recommended' />
      <RecommendedList/>
      </>
  );
};

export default Recommended;
