import classes from './dashBoard.module.css'

const DashBoard = () => {

    return (
        <>
                <section className={classes.products}>
                    <table className={classes.product_table}>
                        <tbody>
                        <tr className={classes.header_row}>
                            <td><strong>ФИО Ученика</strong></td>
                            <td><strong>Класс</strong></td>
                            <td><strong>Предмет</strong></td>
                            <td><strong>Статус</strong></td>
                            <td><strong>Номер задания</strong></td>
                            <td><strong></strong></td>
                        </tr>
                        </tbody>
                    </table>
                </section>
        </>
    )
};

export default DashBoard;