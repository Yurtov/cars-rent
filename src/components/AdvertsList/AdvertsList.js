import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectAdverst } from '../../redux/adverts/selectors';
import {
  fetchAdverts,
  fetchLoadMoreAdverts,
} from '../../redux/adverts/operations';
import { AdvertsListItem } from 'components/AdverstListItem/AdverstListItem';
import {
  AdvertsListStyled,
  Advert,
  StyledButton,
  ButtonLoadMore,
} from './AdvertsList.styled';
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
    width: '541px',
    height: '752px',
    borderRadius: '24px',
    padding: '40px',
  },
};

Modal.setAppElement('#root');

export const AdvertsList = () => {
  const adverts = useSelector(selectAdverst);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdvert, setSelectedAdvert] = useState(null);
  const [params, setParams] = useState(2);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const heandleLoadMore = () => {
    setParams(prevState => prevState + 1);
    dispatch(fetchLoadMoreAdverts(params));
  };

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
      {adverts.length !== 32 && (
        <ButtonLoadMore onClick={heandleLoadMore}>Load more</ButtonLoadMore>
      )}

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
