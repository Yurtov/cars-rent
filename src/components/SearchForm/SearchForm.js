import { Formik, Field, Form} from 'formik';
import makes from '../../data/makes.json'

export const SearchForm = () => {
  const carBrands = makes.sort((a, b) => a.localeCompare(b))
  const priceOptions = Array.from({ length: 10 }, (_, index) => (index + 1) * 10);

  console.log(carBrands);

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
          <label htmlFor="carBrand">Марка автомобиля</label>
          <Field
            as="select"
            id="carBrand"
            name="carBrand"
          >
            <option value="" label="Введите текст" />
            {carBrands.map(brand => (
              <option key={brand} value={brand} label={brand} />
            ))}
          </Field>
        </div>

        <div>
          <label htmlFor="price">Цена за 1 час</label>
          <Field
            as="select"
            id="price"
            name="price"
          >
            <option value="" label="До $" />
            {priceOptions.map(price => (
              <option key={price} value={price} label={`$${price}`} />
            ))}
          </Field>
        </div>

        <div>
          <label htmlFor="mileage.from">Пробег автомобиля (От)</label>
          <Field
            type="text"
            id="mileage.from"
            name="mileage.from"
            placeholder="Введите пробег от"
          />
        </div>

        <div>
          <label htmlFor="mileage.to">Пробег автомобиля (До)</label>
          <Field
            type="text"
            id="mileage.to"
            name="mileage.to"
            placeholder="Введите пробег до"
          />
        </div>

        <button type="submit">Отправить</button>
      </Form>
    </Formik>
  );
};
