import classes from './advantages.module.css'

const Advantages = () => {
    return (
        <section className={classes.advantages}>
            <div className="container">
                <div id="about" className={classes.advantagesTitle}>О нас</div>
                <div className={classes.cardList}>
                    <div className={classes.cardItem}>
                        <div className={classes.cardTitle}>Индивидуальный план подготовки</div>
                        <div className={classes.cardDescription}>
                            Искусственный интеллект
                            анализирует успехи ученика на основе первичного теста и создает персональный учебный план.
                        </div>
                    </div>
                    <div className={classes.cardItem}>
                        <div className={classes.cardTitle}>Анализ прогресса</div>
                        <div className={classes.cardDescription}>
                            Наш ИИ не просто дает задания, но и следит за тем, как ученик решает задачи.
                            На основе анализа результатов, он корректирует дальнейший учебный процесс,
                            помогая лучше подготовиться к экзаменам.
                        </div>
                    </div>
                    <div className={classes.cardItem}>
                        <div className={classes.cardTitle}>Поддержка и мотивация</div>
                        <div className={classes.cardDescription}>
                            Искусственный интеллект
                            анализирует успехи ученика на основе первичного теста и создает персональный учебный план.
                        </div>
                    </div>
                    <div className={classes.cardItem}>
                        <div className={classes.cardTitle}>Эффективное распределение времени</div>
                        <div className={classes.cardDescription}>
                            ИИ помогает ученикам не тратить время на те темы, которые они уже усвоили.
                            Время будет направлено на наиболее сложные для ребенка предметы,
                            чтобы улучшить знания именно там, где это необходимо.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;