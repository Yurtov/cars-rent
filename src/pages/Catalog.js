import { AdvertsList } from 'components/AdvertsList/AdvertsList';
import { Footer } from 'components/Footer/Footer';
import { SearchForm } from 'components/SearchForm/SearchForm';

const Catalog = () => {
  return (
    <>
      <SearchForm />
      <AdvertsList />
      <Footer />
    </>
  );
};

export default Catalog;
