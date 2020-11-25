import Icon from "../Icon/";
import Spinner from "../Spinner/";
import styled, { useTheme } from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sizeM} 0;
  margin-bottom: ${({ theme }) => theme.spacing.sizeL};
  z-index: 1;
`;

const StyledLabel = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.font.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.sizeS};
  white-space: nowrap;

  @media (max-width: 370px) {
    font-size: 13px;
    text-align: center;
  }
`;

const StyledButton = styled.button`
  position: absolute;
  right: 2px;
  bottom: 17px;
  padding: ${({ theme }) => `9px ${theme.spacing.sizeM}`};
  transition: all 200ms ease-in-out;
`;

const StyledInput = styled.input`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color.grayLight};
  border-radius: ${({ theme }) => theme.shape.borderRadiusM};
  color: ${({ theme }) => theme.color.grayDark};
  padding: ${({ theme }) => theme.spacing.sizeM};
  overflow: hidden;
  width: 100%;
  font-size: ${({ theme }) => theme.global.fontSize};

  + button > svg > path {
    transition: all 200ms ease-in-out;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.grayLightest};
    border-color: ${({ theme }) => theme.color.gray};

    &::placeholder {
      color: ${({ theme }) => theme.color.grayDarker};
    }
    + button > svg > path {
      &:first-child,
      &:nth-child(2) {
        fill: ${({ theme }) => theme.color.brandPrimary};
      }
    }
  }

  &.loading,
  &:focus {
    background-color: white;
    border-color: ${({ theme }) => theme.color.brandPrimary};
    box-shadow: 0px 0px 8px 0px rgba(255, 115, 0, 0.2);

    &::placeholder {
      color: ${({ theme }) => theme.color.gray};
    }

    + button > svg > path {
      &:first-child,
      &:nth-child(2) {
        fill: ${({ theme }) => theme.color.grayDarker};
      }
    }
  }
`;

const Search = ({ handleSubmit, handleSearch, value, isLoading }) => {
  const theme = useTheme();

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit}>
        <StyledLabel>Encuentra profesionales de confianza</StyledLabel>
        <StyledInput
          type="text"
          value={value}
          onChange={handleSearch}
          placeholder="Qué necesitas..."
        />
        <StyledButton type="submit">
          {isLoading ? (
            <Spinner />
          ) : (
            <Icon name="search" customColor={theme.color.gray} />
          )}
        </StyledButton>
      </form>
    </StyledContainer>
  );
};

export default Search;
