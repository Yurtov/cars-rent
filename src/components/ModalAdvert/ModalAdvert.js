export const ModalAdvert = ({ advert, closeModal }) => {
  const address = advert.address;
  const addressParts = address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];
  const rentalCondition = advert.rentalConditions;
  const rentalConditionParts = rentalCondition.split('\n');
  const minAge = rentalConditionParts[0];
  const licence = rentalConditionParts[1];
  const depositOrInsurance = rentalConditionParts[2];
  const mileageWithComma = advert.mileage
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const price = advert.rentalPrice.replace('$', '');

  return (
    <>
      <button type="button" onClick={closeModal}>
        bac
      </button>
      <img src={advert.img} alt="car" width="461" height="248" loading="lazy"></img>
      <h3>
        {advert.make} {advert.model}, {advert.year}
      </h3>
      <ul>
        <li>{city}</li>
        <li>{country}</li>
        <li>{advert.rentalCompany}</li>
        <li>{advert.type}</li>
        <li>{advert.model}</li>
        <li>{advert.id}</li>
        <li>{advert.functionalities[0]}</li>
      </ul>
      <p>{advert.description}</p>
      <p>Accessories and functionalities:</p>
      <ul>
        {advert.accessories.map(accessories => (
          <li key={accessories}>{accessories}</li>
        ))}
      </ul>
      <p>Rental Conditions:</p>
      <ul>
        <li>{minAge}</li>
        <li>{licence}</li>
        <li>{depositOrInsurance}</li>
        <li>Mileage: {mileageWithComma}</li>
        <li>Price: {price}$</li>
      </ul>
      <a href="tel:+380730000000">Rental car</a>
    </>
  );
};
