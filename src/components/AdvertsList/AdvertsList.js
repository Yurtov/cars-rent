import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectAdverst, selectIsLoading } from '../../redux/adverts/selectors';
import { fetchAdverts } from '../../redux/adverts/operations';
import { AdvertsListItem } from 'components/AdverstListItem/AdverstListItem';
import { AdvertsListStyled, Advert } from './AdvertsList.styled';

export const AdvertsList = () => {
  const adverts = useSelector(selectAdverst);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <div>
      <AdvertsListStyled>
        {adverts.length !== 0 ? (
          adverts.map(advert => (
            <Advert key={advert.id}>
              <AdvertsListItem advert={advert} />
              <button>Learn more</button>
            </Advert>
          ))
        ) : (
          <div>Not found</div>
        )}
      </AdvertsListStyled>
      <button>Load more</button>
    </div>
  );
};
