import { Formik, Field, Form} from 'formik';
import makes from '../../data/makes.json'

export const SearchForm = () => {
  const carBrands = makes.sort((a, b) => a.localeCompare(b))
  const priceOptions = Array.from({ length: 50 }, (_, index) => (index + 1) * 10);

  return (
    <Formik
      initialValues={{
        carBrand: '',
        price: '',
        mileage: {
          from: '',
          to: '',
        },
        // onSubmit={onSubmit}
      }}
    >
      <Form>
        <div>
          <label htmlFor="carBrand">Car brand</label>
          <Field
            as="select"
            id="carBrand"
            name="carBrand"
          >
            <option value="" label="Enter the text" />
            {carBrands.map(brand => (
              <option key={brand} value={brand} label={brand} />
            ))}
          </Field>
        </div>

        <div>
            <label htmlFor="price">Price/ 1 hour</label>
            <Field
              as="select"
              id="price"
              name="price"
            >
              <option value="" label="To $" />
              {priceOptions.map(price => (
                <option key={price} value={price} label={`${price}`} />
              ))}
            </Field>
          </div>


        <div>
          <label htmlFor="mileage.from">Сar mileage / km</label>
          <Field
            type="text"
            id="mileage.from"
            name="mileage.from"
            placeholder="From"
          />
        </div>

        <div>
          <label htmlFor="mileage.to"></label>
          <Field
            type="text"
            id="mileage.to"
            name="mileage.to"
            placeholder="To"
          />
        </div>
        
      

        <button type="submit">Отправить</button>
      </Form>
    </Formik>
  );
};
