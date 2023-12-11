import { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import {
  Image,
  StyledList,
  Model,
  TitleAdvert,
  StyledListItem,
  BtnFavorite,
  DivListItem,
} from './AdverstListItem.styled';

export const AdvertsListItem = ({ advert }) => {
  const [favorite, setFavorite] = useState(false);
  const address = advert.address;
  const addressParts = address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];
  const functionalities = advert.functionalities[0];
  const functionalitiesСropped = functionalities
    .split(' ')
    .slice(0, 2)
    .join(' ');

  const addToFavorits = () => {
    if (!favorite) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  };

  return (
    <DivListItem>
      <BtnFavorite onClick={addToFavorits}>
        {!favorite ? (
          <FaRegHeart size={18} color="#FFFFFF" />
        ) : (
          <FaHeart size={18} color="#3470FF" />
        )}
      </BtnFavorite>
      <Image
        src={advert.img}
        alt="car"
        width={274}
        height={268}
        loading="lazy"
      ></Image>
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
