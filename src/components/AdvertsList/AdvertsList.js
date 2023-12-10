import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectAdverst, selectIsLoading } from '../../redux/adverts/selectors';
import { fetchAdverts } from '../../redux/adverts/operations';
import { AdvertsListItem } from 'components/AdverstListItem/AdverstListItem';
import { AdvertsListStyled, Advert, StyledButton } from './AdvertsList.styled';
import Modal from 'react-modal';
import { ModalAdvert } from 'components/ModalAdvert/ModalAdvert';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const AdvertsList = () => {
  const adverts = useSelector(selectAdverst);
  // const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdvert, setSelectedAdvert] = useState(null);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const openModal = e => {
    const advertId = e.currentTarget.id;
    setIsModalOpen(true);
    const findedAdvertById = adverts.find(
      advert => advert.id === Number(advertId)
    );
    setSelectedAdvert(findedAdvertById);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <AdvertsListStyled>
        {adverts.length !== 0 ? (
          adverts.map(advert => (
            <Advert key={advert.id}>
              <AdvertsListItem advert={advert} />
              <StyledButton type="button" onClick={openModal} id={advert.id}>
                Learn more
              </StyledButton>
            </Advert>
          ))
        ) : (
          <div>Not found</div>
        )}
      </AdvertsListStyled>
      <button>Load more</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ModalAdvert advert={selectedAdvert} closeModal={closeModal} />
      </Modal>
    </div>
  );
};
