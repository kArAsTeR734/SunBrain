import classes from './taskThemeList.module.css'
import {useEffect, useState} from "react";
import {Theme} from "../models/Theme.ts";
import TaskTheme from "../TaskTheme/TaskTheme.tsx";
import {themes} from '../db/themes.ts'

const TaskThemeList = () => {
    const [themesData, setThemes] = useState<Theme[]>([]);
    console.log(themes);
    useEffect(() => {
        setThemes(themes);
    }, [])

    return (
        <>
            <section className={classes.themes}>
                <h3 className={classes.themes__header}>Задания по темам</h3>
                <div className={classes.themes__list}>
                    {themesData.map(theme => <TaskTheme {...theme}/>)}
                </div>
            </section>
        </>
    );
};

export default TaskThemeList;