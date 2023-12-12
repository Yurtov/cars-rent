import { AdvertsListItem } from "components/AdverstListItem/AdverstListItem";
import { AdvertsListStyled, Advert, StyledButton } from "./AdvertsListComponent.styled";

export const AdvertsListComponet = ({adverts, openModal}) => {
  return (
    <AdvertsListStyled>
      {adverts.length !== 0 ? (
        adverts.map(advert => (
          <Advert key={advert.id}>
            <AdvertsListItem advert={advert} />
            <StyledButton type="button" onClick={openModal} id={advert.id}>
              Learn more
            </StyledButton>
          </Advert>
        ))
      ) : (
        <div>Not found Adverts</div>
      )}
    </AdvertsListStyled>
  );
};
