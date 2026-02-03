import HomeworkList from '@/features/HomeworkTasks/HomeworkList/HomeworkList.tsx';
import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";
import {useParams} from "react-router-dom";
import {SubjectId} from "@/models/Themes.ts";
import {useEffect, useState} from "react";
import {type Task} from "@/shared/types/TaskTypes";
import {mathTasks} from "@/shared/constants/mathTasks.ts";
import {physicTasks} from "@/shared/constants/physicTasks.ts";

const StudentHomeworkPage = () => {
  const { subjectId } = useParams<{ subjectId: SubjectId }>();
  const [homeworkItems, setHomeworkItems] = useState<Task[]>([]);
  console.log(subjectId);
  useEffect(() => {
    if(subjectId === "emath"){
      setHomeworkItems(mathTasks);
    }
    if(subjectId==="ephysic"){
      setHomeworkItems(physicTasks);
    }
  },[subjectId])

  return (
    <>
      <Header />
      <HomeworkList homeworkItems={homeworkItems} />
      <Footer />
    </>
  );
};

export default StudentHomeworkPage;
