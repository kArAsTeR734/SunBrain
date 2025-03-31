import classes from './objectsCatalog.module.css'
import CatalogHeader from "../CatalogHeader/CatalogHeader.tsx";
import CatalogHints from "../CatalogHints/CatalogHints.tsx";
import CatalogObjectCards from "../CatalogObjectCards/CatalogObjectCards.tsx";
import {Route, Routes} from "react-router-dom";
import TaskThemeList from "../TaskThemeList/TaskThemeList.tsx";

const ObjectsCatalog = () => {
    return (
        <>
            <section className={classes.objectsCatalog}>
                <div className="container">
                    <CatalogHeader/>
                    <CatalogHints/>
                    <Routes>
                        <Route path="/" element={<CatalogObjectCards/>}/>
                        <Route path="/*" element={<TaskThemeList/>}/>
                    </Routes>
                </div>
            </section>
        </>
    );
};

export default ObjectsCatalog;