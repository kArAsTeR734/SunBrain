import classes from "./modal.module.css";
import Button from "../Button/Button.tsx";
import {useModal} from "../../hooks/useModal.ts";
import React, {FC, useState} from "react";
import Input from "../Input/Input.tsx";

const Modal: FC = () => {
    const [titleValue, setTitleValue] = useState('');
    //const [subjectValue, setSubjectValue] = useState('');
    // const [typeValue, setTypeValue] = useState('');
    const [taskValue, setTaskValue] = useState('');
    const {modal, setActive} = useModal();
    const is: boolean = false;
    return (
        <div onClick={() => setActive(modal)}
             className={modal ? classes.modal : [classes.modal, classes.hide].join(' ')}
        >
            <div className={classes.modal__wrapper}
                 onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                <div className={classes.icon_house_wrapper}>
                    <img rel="icon"
                         src="/src/client/modules/TeacherPage/icons/houseIcon.png"
                         alt=""
                         className={classes.modal_icon}/>
                </div>
                <div className={classes.closeBtnWrapper}>
                    <div className={classes.closeModalBtn} onClick={() => setActive(modal)}></div>
                </div>
                <div className={classes.modal_info}>
                    <div className={classes.modal_header} id="modal_header"></div>
                    <div className={classes.modal_subheader}>
                        Заполните все поля для создания новой задачи
                    </div>
                    <form
                        className={classes.add_item_form}>
                        <div className={classes.title}>
                            <label
                                htmlFor="title"
                                className={classes.label}>
                                ФИО ученика
                            </label>
                            <br/>
                            <Input
                                value={titleValue}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitleValue(e.target.value)}
                                type="text"
                                className={classes.field}
                                id="title"
                                name="title"
                                placeholder="Иван Иванов Иванович"
                                required/>
                            <div id="titleErrors"></div>
                        </div>

                        <div>
                            <label
                                htmlFor="subject"
                                className={classes.label}>
                                Предмет
                            </label>
                            <br/>
                            <div className={classes.field}>
                                <select className={classes.select}>
                                    <option hidden>Предмет</option>
                                    <option>Математика</option>
                                    <option>Физика</option>
                                    <option>Информатика</option>
                                </select>
                            </div>

                            <div id="subjectErrors"></div>
                        </div>

                        <div className={classes.item}>
                            <label
                                htmlFor="type"
                                className={classes.label}>
                            Вид экзамена
                            </label>
                            <br/>
                            <div className={classes.field}>
                                <select className={classes.select}>
                                    <option hidden>Вид</option>
                                    <option>ЕГЭ</option>
                                    <option>ОГЭ</option>
                                    <option></option>
                                </select>
                            </div>
                            <div id="codeErrors"></div>
                        </div>

                        <div className={classes.description}>
                            <label
                                htmlFor="description"
                                className={classes.label}>
                                Номер задачи
                            </label>
                            <br/>
                            <select
                                value={taskValue}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTaskValue(e.target.value)}
                                className={classes.field}
                                id="task"
                                name="task">
                                <option hidden>Номер задания</option>
                                <option >1</option>
                                <option >2</option>
                                <option >3</option>
                                <option >4</option>
                                <option >5</option>
                                <option >6</option>
                                <option >7</option>
                            </select>
                            <div id="descriptionErrors"></div>
                        </div>
                        <div className={classes.modal_buttons} id="0">
                            <Button
                                onClick={() => setActive(false)}
                                className={classes.cancel_btn}>
                                Отмена
                            </Button>

                            <Button
                                onClick={() => setActive(false)}
                                className={classes.confirm_btn}>
                                Подтвердить
                            </Button>

                            <Button
                                onClick={() => console.log('Hello')}
                                className={is ? classes.change_btn : [classes.change_btn, classes.hide].join(' ')}>
                                Изменить
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;