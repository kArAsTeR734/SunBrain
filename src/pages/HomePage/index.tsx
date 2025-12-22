import Header from '../../widgets/Header/Header.tsx';
import Footer from '../../widgets/Footer/Footer.tsx';
import Promo from './components/Promo/Promo.tsx';
import Advantages from './components/Advantages/Advantages.tsx';
import Help from './components/Help/Help.tsx';

const HomePage = () => {
  return (
    <>
      <Header />
      <Promo />
      <Advantages />
      <Help />
      <Footer />
    </>
  );
};

export default HomePage;
