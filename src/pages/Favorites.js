import Modal from 'react-modal';
import { useState } from 'react';
import { AdvertsListComponet } from 'components/AdvertsListComponent/AdvertsListComponent';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/adverts/selectors';
import { ModalAdvert } from 'components/ModalAdvert/ModalAdvert';

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
  const favoritesAdvers = useSelector(selectFavorites);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdvert, setSelectedAdvert] = useState(null);

  const openModal = e => {
    const advertId = e.currentTarget.id;
    setIsModalOpen(true);
    const findedAdvertById = favoritesAdvers.find(
      advert => advert.id === Number(advertId)
    );
    setSelectedAdvert(findedAdvertById);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <AdvertsListComponet adverts={favoritesAdvers} openModal={openModal} />

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
