import { TitleAdvert } from "./AdverstListItem.styled";


export const AdvertsListItem = ({ advert }) => {
  const address = advert.address;
  const addressParts = address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];
  return (
    <div>
      <img href={advert.img} alt="img" width={264} height={268}></img>
      <TitleAdvert>
        <p>
          {advert.make} {advert.model}, {advert.year}
        </p>
        <p>{advert.rentalPrice}</p>
      </TitleAdvert>
      {/* <ul>
        <li>{city}</li>
        <li>{country}</li>
        <li>{advert.rentalCompany}</li>
        <li>{advert.type}</li>
        <li>{advert.model}</li>
        <li>{advert.id}</li>
        <li>{advert.functionalities[0]}</li>
      </ul> */}
    </div>
  );
};
