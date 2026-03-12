import HomeworkList from "@/widgets/HomeworkList";

export const StudentHomework = () => {
  return(
    <>
      <section className="homework" aria-label='homework'>
        <div className="container">
          <HomeworkList/>
        </div>
      </section>
    </>
    )
};
