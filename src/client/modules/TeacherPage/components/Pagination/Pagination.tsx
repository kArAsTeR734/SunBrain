import classes from './pagination.module.css'
import Button from "../../UI/Button/Button.tsx";

const Pagination = () => {
    return (
        <>
            <section className={classes.pagination}>
                <div className={classes.item_pages}>
                    <Button
                        onClick={()=>console.log('Hello')}
                        className={[classes.arrow, classes.rotated].join(' ')}>
                        <img src="/src/client/modules/TeacherPage/icons/arrow-right.png" alt="arrow"/>
                    </Button>
                    <span
                        className={[classes.page,classes.active].join(' ')}>
                        1
                    </span>
                    <span
                        className={classes.page}>
                        2
                    </span>
                    <span
                        className={classes.page}>
                        3
                    </span>
                    <span
                        className={classes.page}>
                        4
                    </span>
                    <Button
                        onClick={()=>console.log('Hello')}
                        className={classes.arrow}>
                        <img src="/src/client/modules/TeacherPage/icons/arrow-right.png" alt="arrow"/>
                    </Button>
                </div>

                <div className={classes.page_count}>
                    <div className={classes.count_text}>Показывать по:</div>
                    <select className={classes.selection_list}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </section>
        </>
    )
};

export default Pagination;