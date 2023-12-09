import { AdvertsList } from 'components/AdvertsList/AdvertsList';
import { Footer } from 'components/Footer/Footer';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Container } from 'components/SharedLayout/SharedLayout.styled';

const Catalog = () => {
  return (
    <Container>
      <SearchForm />
      <AdvertsList />
      <Footer />
    </Container>
  );
};

export default Catalog;
