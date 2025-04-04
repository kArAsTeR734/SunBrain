import Footer from "../../shared/Footer/Footer.tsx";
import ObjectsCatalog from "./components/ObjectsCatalog/ObjectsCatalog.tsx";
import StudentAccountHeader from "../StudentPersonalAccoutn/components/StudentAccountHeader/StudentAccountHeader.tsx";

const StudentObjectCatalogPage= () => {
    return (
        <>
            <StudentAccountHeader/>
            <ObjectsCatalog/>
            <Footer/>
        </>
    );
};

export default StudentObjectCatalogPage;