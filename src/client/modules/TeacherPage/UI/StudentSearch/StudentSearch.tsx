import classes from './detail_search.module.css'
import {FC} from "react";
//import {useSearchProvider} from "../../hooks/useSearch.ts";
import SearchStudentButton from "../../components/SearchStudentButton/SearchStudentButton.tsx";
import '../../components/SearchStudentButton/searchStudentButton.css'

const StudentSearch:FC = () => {
//    const {handleSearch,value,onChange} = useSearchProvider();

    return (
        <div className={classes.item_actions}>
            <div className={classes.item_search}>
                <img src="/src/client/modules/TeacherPage/icons/SearchOutDivider.png" className={classes.item_search_icon} alt=""/>
                <input
//                    value={value}
//                    onChange={onChange}
                    type="text"
                    placeholder="Поиск по названию"
                    className={classes.search_input}
                />
                <SearchStudentButton
//                    onClick={() => handleSearch()}
                    className="searchButton">
                    Поиск
                </SearchStudentButton>
            </div>
        </div>
    );
};

export default StudentSearch;