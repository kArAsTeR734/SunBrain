import { ReactNode } from 'react';
import './CalendarCell.scss'

const CalendarCell = ({ children }: { children: ReactNode }) => {
  return (
    <div className="calendar-cell">
      {children}
    </div>
  );
};

export default CalendarCell;