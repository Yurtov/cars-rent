import {
  StyledFormFavorite,
  StyledSelectFavorite,
} from './FilterFavorites.styled';

export const FilterFavorites = ({ heandleChange, favoritesAdverts }) => {
  return (
    <StyledFormFavorite onChange={heandleChange}>
      <label>
        <StyledSelectFavorite>
          <option value="" label="Choose a Car" />
          {favoritesAdverts.map(favorit => (
            <option
              key={favorit.make + ' ' + favorit.model}
              value={favorit.make + ' ' + favorit.model}
              label={favorit.make + ' ' + favorit.model}
            />
          ))}
        </StyledSelectFavorite>
      </label>
    </StyledFormFavorite>
  );
};
