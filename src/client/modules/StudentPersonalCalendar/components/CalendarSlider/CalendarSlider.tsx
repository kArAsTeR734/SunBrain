import classes from './calendarSlider.module.css'
import CalendarItem from "../CalendarItem/CalendarItem.tsx";
import {useEffect, useState} from "react";
import {tasks} from "../../../StudentObjectCatalog/components/db/tasks.ts";
import {data} from "../../db/data.ts";
const CalendarSlider = () => {

    const [task,setTask] = useState(tasks);
    useEffect(()=>{
        setTask(tasks);
    },[])
    const [dataTime,setDataTime] = useState<typeof data>(data);

    useEffect(()=>{
        setDataTime(data);
    },[])
    console.log(data);
    return (
        <>
            <section className={classes.calendar}>
                <div className={classes.calendar__wrapper}>
                    <CalendarItem dataTime={dataTime[0]} {...task[0]}/>
                    <CalendarItem dataTime={dataTime[1]} {...task[1]}/>
                    <CalendarItem dataTime={dataTime[2]} {...task[7]} />
                    <CalendarItem dataTime={dataTime[3]} {...task[2]}/>
                    <CalendarItem dataTime={dataTime[4]} {...task[7]} />
                    <CalendarItem dataTime={dataTime[5]} {...task[7]}/>
                    <CalendarItem dataTime={dataTime[6]} {...task[3]}/>
                    <CalendarItem dataTime={dataTime[7]} {...task[7]}/>
                    <CalendarItem dataTime={dataTime[8]} {...task[7]}/>
                    <CalendarItem dataTime={dataTime[9]} {...task[4]}/>
                    <CalendarItem dataTime={dataTime[10]} {...task[7]}/>
                    <CalendarItem dataTime={dataTime[11]} {...task[5]}/>
                    <CalendarItem dataTime={dataTime[12]} {...task[6]}/>
                    <CalendarItem dataTime={dataTime[13]} {...task[7]}/>
                </div>
            </section>
        </>
    );
};

export default CalendarSlider;