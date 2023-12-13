import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { AdvertsListComponet } from 'components/AdvertsListComponent/AdvertsListComponent';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/adverts/selectors';
import { ModalAdvert } from 'components/ModalAdvert/ModalAdvert';
import { FilterFavorites } from 'components/FilterFavorites/FilterFavorites';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '541px',
    height: '752px',
    borderRadius: '24px',
    padding: '40px',
  },
};

const Favorites = () => {
  const favoritesAdverts = useSelector(selectFavorites);
  const [filterFavoritesAdvert, SetFilterFavoritesAdvert] =
    useState(favoritesAdverts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdvert, setSelectedAdvert] = useState(null);

  useEffect(() => {
    SetFilterFavoritesAdvert(favoritesAdverts);
  }, [favoritesAdverts]);

  const openModal = e => {
    const advertId = e.currentTarget.id;
    setIsModalOpen(true);
    const findedAdvertById = favoritesAdverts.find(
      advert => advert.id === Number(advertId)
    );
    setSelectedAdvert(findedAdvertById);
  };

  const closeModal = () => setIsModalOpen(false);

  const heandleChange = e => {
    const car = e.target.value;
    const ModelCar = car.split(' ');
    if (!car) {
      return SetFilterFavoritesAdvert(favoritesAdverts);
    }
    const filtredModel = favoritesAdverts.find(
      favorit => favorit.model === ModelCar[1]
    );
    SetFilterFavoritesAdvert([filtredModel]);
  };

  return (
    <div>
      <FilterFavorites
        heandleChange={heandleChange}
        favoritesAdverts={favoritesAdverts}
      />
      <AdvertsListComponet
        adverts={filterFavoritesAdvert}
        openModal={openModal}
      />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <ModalAdvert advert={selectedAdvert} closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default Favorites;
