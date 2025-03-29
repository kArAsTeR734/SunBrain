import {FC} from 'react';
import './product-table.module.css'
import {StudentItem} from "../../../../models/StudentItem.ts";

export interface DashboardItemProps {
    student: StudentItem,
    onEdit: (position: StudentItem) => void,
}

const DashBoardItem: FC<DashboardItemProps> = ({student, onEdit}) => {
    return (
        <>
            <tr className="row">
                <td className="col">{student.FIO.name + student.FIO.surname + student.FIO.patronymic}</td>
                <td className="col">{student.classNumber}</td>
                <td className="col">{student.subject}</td>
                <td className="col">{student.status}</td>
                <td className="col">{student.taskNumber}</td>
                <td className="col">
                    <div onClick={() => onEdit(student)} className="icon">
                        <img src="../../icons/pencil.png" alt=""/>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default DashBoardItem;