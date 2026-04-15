import './advantages.scss';
import { CardList } from '@widgets/Home/Advantages/ui/CardList';
import { useGetTaskFromAI } from '@features/Test/models/hooks/useGetTaskFromAI.ts';

export const Advantages = () => {
  const aiResult = useGetTaskFromAI();

  console.log(aiResult);
  return (
    <section className="advantages">
      <div className="container">
        <div id="about" className="advantages__title">
          О нас
        </div>
        <CardList />
      </div>
    </section>
  );
};
