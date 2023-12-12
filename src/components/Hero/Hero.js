import { Link } from 'react-router-dom';
import {
  BtnCatalog,
  Div,
  SectionHero,
  TextHero,
  TitleHero,
} from './Hero.styled';

export const Hero = () => {
  return (
    <SectionHero>
      <Div>
        <div>
          <TitleHero>
            Renatal cars
            <br />
            can be exrience
          </TitleHero>
          <TextHero>Find your best match</TextHero>
        </div>
        <Link to="/catalog">
          <BtnCatalog>Select a car</BtnCatalog>
        </Link>
      </Div>
    </SectionHero>
  );
};
