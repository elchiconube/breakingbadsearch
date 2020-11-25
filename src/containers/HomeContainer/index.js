import { useEffect, useState } from "react";
import {
  fetchInitCharacters,
  fetchCharacters,
  fetchSuggestions,
} from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading/";
import Character from "../../components/Character/";
import Suggestions from "../../components/Suggestions/";
import styled from "styled-components";
import Search from "../../components/Search";

const StyledContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.sizeL};
`;

const StyledWrapper = styled.div`
  position: relative;
  max-width: 460px;
`;

const StyledList = styled.ul`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(calc(120px + 12vmin), 100%), 1fr)
  );
  grid-gap: 1.5rem;
`;

const StyledLabel = styled.h1`
  display: block;
  font-family: ${({ theme }) => theme.font.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.sizeM};
  text-align: center;
`;
const HomeContainer = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const { isLoading, isSearchLoading, characters, suggestions } = useSelector(
    (state) => state.homepage
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(fetchSuggestions(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(search ? fetchCharacters(search) : fetchInitCharacters());
  };

  const handleClickSuggestion = (value) => {
    dispatch(fetchCharacters(value));
    setSearch(value);
  };

  useEffect(() => {
    dispatch(fetchInitCharacters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledContainer>
      <StyledWrapper>
        <Search
          value={search}
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}
          isLoading={isSearchLoading}
        />
        {search && !isSearchLoading && (
          <Suggestions
            value={search}
            handleClickSuggestion={handleClickSuggestion}
            data={suggestions}
          />
        )}
      </StyledWrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <StyledLabel>Listado de profesionales</StyledLabel>
          <StyledList>
            {characters.map((item, key) => (
              <Character key={key} data={item} />
            ))}
          </StyledList>
        </>
      )}
    </StyledContainer>
  );
};

export default HomeContainer;
