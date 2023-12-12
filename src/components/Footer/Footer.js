import { Container } from 'components/SharedLayout/SharedLayout.styled';
import {
  LinkFooter,
  ListFooter,
  StyledFooter,
  TextFooter,
  TitleFooter,
} from './Footer.styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <TitleFooter>For car rental contact Us</TitleFooter>
        <ListFooter>
          <li>
            <TextFooter>Email:</TextFooter>
            <LinkFooter href="mailto:gta_rent@gmail.com">
              gta_rent@gmail.com
            </LinkFooter>
          </li>
          <li>
            <TextFooter>Phone:</TextFooter>
            <LinkFooter href="tel:+380730000000">+38(073)000-00-00</LinkFooter>
          </li>
        </ListFooter>
      </Container>
    </StyledFooter>
  );
};
