import { Advantages } from 'components/Advantages/Advantages';
import { Footer } from 'components/Footer/Footer';
import { Hero } from 'components/Hero/Hero';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { Values } from 'components/Values/Values';

const Home = () => {
  return (
    <Container>
      <Hero />
      <Advantages />
      <Values />

      <Footer />
    </Container>
  );
};

export default Home;
