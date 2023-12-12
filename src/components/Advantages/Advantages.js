import {
  ListAdvantages,
  ListItemAdvantages,
  ListItemAdvantagesText,
  ListItemAdvantagesTitle,
  SectionAdvantages,
  TitleAdvantages,
} from './Advantages.styled';
import { FaCarSide, FaBell  } from 'react-icons/fa6';
import { MdBookOnline } from "react-icons/md";

export const Advantages = () => {
  return (
    <SectionAdvantages>
      <TitleAdvantages>Advantages of Our Company</TitleAdvantages>
      <ListAdvantages>
        <ListItemAdvantages>
          <FaCarSide size={35} color={'#3470ff'}/>
          <ListItemAdvantagesTitle>Worry-Free Journeys with Guaranteed Comfort</ListItemAdvantagesTitle>
          <ListItemAdvantagesText>
            Our cars undergo regular maintenance, ensuring your safety and
            comfort on the road. With a wide selection of modern models and
            flexible rental terms, we make your choice easy and your trip
            unforgettable.
          </ListItemAdvantagesText>
        </ListItemAdvantages>
        <ListItemAdvantages>
        <MdBookOnline size={35} color={'#3470ff'}/>
          <ListItemAdvantagesTitle>Simplicity and Convenience with Online Booking</ListItemAdvantagesTitle>
          <ListItemAdvantagesText>
            Our website provides you with a user-friendly and intuitive
            interface for online car reservations. Without unnecessary paperwork
            and long waits, you can reserve your car in just a few clicks. We
            value your time and make the rental process as straightforward as
            possible.
          </ListItemAdvantagesText>
        </ListItemAdvantages>
        <ListItemAdvantages>
        <FaBell size={35} color={'#3470ff'}/>
          <ListItemAdvantagesTitle>Exceptional Customer Service - Always at Your Service</ListItemAdvantagesTitle>
          <ListItemAdvantagesText>
            Our team of professionals is ready to answer your questions and
            address any issues 24/7. We value each customer and strive to make
            your car rental experience pleasant and worry-free. With us, you can
            be confident in support at every stage of your journey.
          </ListItemAdvantagesText>
        </ListItemAdvantages>
      </ListAdvantages>
    </SectionAdvantages>
  );
};
