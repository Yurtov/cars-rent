import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { fetchSearchAdverts } from '../../redux/adverts/operations';
import makes from '../../data/makes.json';
import {
  Button,
  Div,
  StyledLabel,
  StyledForm,
  StyledField,
  InputMileage,
} from './SearchForm.styled';

export const SearchForm = () => {
  const dispatch = useDispatch();

  const carBrands = makes.sort((a, b) => a.localeCompare(b));
  const priceOptions = Array.from(
    { length: 50 },
    (_, index) => (index + 1) * 10
  );

  const onSubmit = values => {
    const params = {
      make: values.carBrand,
      rentalPrice: values.price,
      mileage: {
        from: values.mileage.from,
        to: values.mileage.to,
      },
    };

    dispatch(fetchSearchAdverts(params));
  };

  return (
    <Formik
      initialValues={{
        carBrand: '',
        price: '',
        mileage: {
          from: '',
          to: '',
        },
      }}
      onSubmit={onSubmit}
    >
      <StyledForm>
        <Div>
          <StyledLabel htmlFor="carBrand">Car brand</StyledLabel>
          <Field
            as="select"
            id="carBrand"
            name="carBrand"
            style={{
              padding: '14px 18px',
              border: 'none',
              fontSize: '18px',
              color: '#121417',
              backgroundColor: '#f7f7fb',
            }}
          >
            <option value="" label="Enter the text" />
            {carBrands.map(brand => (
              <option key={brand} value={brand} label={brand} />
            ))}
          </Field>
        </Div>

        <Div>
          <StyledLabel htmlFor="price">Price/ 1 hour</StyledLabel>
          <Field
            as="select"
            id="price"
            name="price"
            style={{
              padding: '14px 18px',
              border: 'none',
              fontSize: '18px',
              color: '#121417',
              backgroundColor: '#f7f7fb',
            }}
          >
            <option value="" label="To $" />
            {priceOptions.map(price => (
              <option key={price} value={price} label={`${price}`} />
            ))}
          </Field>
        </Div>

        <Div>
          <StyledLabel htmlFor="mileage.from">Сar mileage / km</StyledLabel>
          <InputMileage>
            <StyledField
              type="text"
              id="mileage.from"
              name="mileage.from"
              placeholder="From"
            />

            <StyledField
              type="text"
              id="mileage.to"
              name="mileage.to"
              placeholder="To"
            />
          </InputMileage>
        </Div>

        <Button type="submit">Search</Button>
      </StyledForm>
    </Formik>
  );
};
