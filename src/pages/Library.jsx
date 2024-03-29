import RecommendedBooks from "components/Dashboard/RecommendedBooks/RecommendedBooks";
import Dashboard from "../components/Dashboard/Dashboard";
import FilterMyLibrary from "../components/Form/FilterForms/FilterMyLibrary/FilterMyLibrary";
import MyLibraryList from "../components/MyLibrary/MyLibraryList/MyLibraryList";

const Library = () => {
    return (
        <>
            <Dashboard>
                <FilterMyLibrary />
                <RecommendedBooks/>
            </Dashboard>
            <MyLibraryList/>
        </>
    )
}

export default Library;