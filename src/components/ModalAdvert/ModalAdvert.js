import { AiOutlineClose } from 'react-icons/ai';
import {
  BtnClose,
  ConditionsList,
  Img,
  ColorAccent,
  StyledListItemModal,
  StyledListModal,
  Text,
  Title,
  TitleH4,
  ConditionsListItem,
  LinkCall,
  MoadalContainer,
} from './ModalAdvert.styled';

export const ModalAdvert = ({ advert, closeModal }) => {
  const address = advert.address;
  const addressParts = address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];
  const rentalCondition = advert.rentalConditions;
  const rentalConditionParts = rentalCondition.split('\n');
  const minAge = rentalConditionParts[0];
  const minAgeParts = minAge.split(': ');
  const age = minAgeParts[1];
  const licence = rentalConditionParts[1];
  const depositOrInsurance = rentalConditionParts[2];
  const mileageWithComma = advert.mileage
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const price = advert.rentalPrice.replace('$', '');

  return (
    <MoadalContainer>
      <BtnClose type="button" onClick={closeModal}>
        <AiOutlineClose size={24} />
      </BtnClose>

      <Img
        src={advert.img}
        alt="car"
        width="461"
        height="248"
        loading="lazy"
      ></Img>
      <Title>
        {advert.make} <ColorAccent>{advert.model}</ColorAccent>, {advert.year}
      </Title>
      <StyledListModal>
        <StyledListItemModal>{city}</StyledListItemModal>
        <StyledListItemModal>{country}</StyledListItemModal>
        <StyledListItemModal>{advert.rentalCompany}</StyledListItemModal>
        <StyledListItemModal>{advert.type}</StyledListItemModal>
        <StyledListItemModal>{advert.model}</StyledListItemModal>
        <StyledListItemModal>{advert.id}</StyledListItemModal>
        <StyledListItemModal>{advert.functionalities[0]}</StyledListItemModal>
        <StyledListItemModal>
          Fuel consumption: {advert.fuelConsumption}
        </StyledListItemModal>
        <StyledListItemModal>
          Engine Size: {advert.engineSize}
        </StyledListItemModal>
      </StyledListModal>
      <Text>{advert.description}</Text>
      <TitleH4>Accessories and functionalities:</TitleH4>
      <StyledListModal>
        {advert.accessories.map(accessories => (
          <StyledListItemModal key={accessories}>
            {accessories}
          </StyledListItemModal>
        ))}
        {advert.functionalities.map(functionalite => (
          <StyledListItemModal key={functionalite}>
            {functionalite}
          </StyledListItemModal>
        ))}
      </StyledListModal>
      <TitleH4>Rental Conditions:</TitleH4>
      <ConditionsList>
        <ConditionsListItem>
          Minimum age : <ColorAccent>{age}</ColorAccent>
        </ConditionsListItem>
        <ConditionsListItem>{licence}</ConditionsListItem>
        <ConditionsListItem>{depositOrInsurance}</ConditionsListItem>
        <ConditionsListItem>
          Mileage: <ColorAccent>{mileageWithComma}</ColorAccent>
        </ConditionsListItem>
        <ConditionsListItem>
          Price: <ColorAccent>{price}$</ColorAccent>
        </ConditionsListItem>
      </ConditionsList>

      <LinkCall href="tel:+380730000000">Rental car</LinkCall>
    </MoadalContainer>
  );
};
