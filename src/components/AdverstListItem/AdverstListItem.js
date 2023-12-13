import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/adverts/selectors';
import {
  addFavorites,
  deleteFavorites,
} from '../../redux/adverts/favoritesReducer';
import {
  Image,
  StyledList,
  Model,
  TitleAdvert,
  StyledListItem,
  BtnFavorite,
  DivListItem,
} from './AdverstListItem.styled';
import { useState } from 'react';

export const AdvertsListItem = ({ advert }) => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  const address = advert.address;
  const addressParts = address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];
  const functionalities = advert.functionalities[0];
  const functionalitiesСropped = functionalities
    .split(' ')
    .slice(0, 2)
    .join(' ');

  const addToFavorits = e => {
    if (!favorites.some(favorit => favorit.id === advert.id)) {
      dispatch(addFavorites(advert));
    } else {
      dispatch(deleteFavorites(advert.id));
    }
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const handleImageError = () => {
    setIsImageLoaded(false);
  };

  return (
    <DivListItem>
      <BtnFavorite onClick={addToFavorits}>
        {!favorites.some(favorit => favorit.id === advert.id) ? (
          <FaRegHeart size={18} color="#FFFFFF" />
        ) : (
          <FaHeart size={18} color="#3470FF" />
        )}
      </BtnFavorite>
      {isImageLoaded ? (
        <Image
          src={advert.img}
          alt="car"
          width={274}
          height={268}
          loading="lazy"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      ) : (
        <Image
          src="https://i.ibb.co/h9wmRL0/strub.jpg"
          alt="car-strub"
          width={274}
          height={268}
          loading="lazy"
        />
      )}
      <TitleAdvert>
        <p>
          {advert.make} <Model>{advert.model}</Model>, {advert.year}
        </p>
        <p>{advert.rentalPrice}</p>
      </TitleAdvert>

      <StyledList>
        <StyledListItem>{city}</StyledListItem>
        <StyledListItem>{country}</StyledListItem>
        <StyledListItem>{advert.rentalCompany}</StyledListItem>
        <StyledListItem>{advert.type}</StyledListItem>
        <StyledListItem>{advert.model}</StyledListItem>
        <StyledListItem>{advert.id}</StyledListItem>
        <StyledListItem>{functionalitiesСropped}</StyledListItem>
      </StyledList>
    </DivListItem>
  );
};
