import styled from "styled-components";
import regexifyString from "regexify-string";

const StyledContainer = styled.ul`
  width: 100%;
  position: absolute;
  top: 91px;
  border: 1px solid ${({ theme }) => theme.color.grayLight};
  border-radius: ${({ theme }) =>
    `0 0 ${theme.shape.borderRadiusM} ${theme.shape.borderRadiusM}`};
  overflow: hidden;
`;

const StyledElement = styled.li`
  background-color: white;
  overflow: hidden;

  &:hover {
    background-color: ${({ theme }) => theme.color.grayLightest};
  }
`;

const Styledbutton = styled.button`
  background: transparent;
  -webkit-appearance: none;
  border: 0;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sizeM};
  display: block;
  width: 100%;
  text-align: left;
  &:disabled {
    cursor: default;
  }
`;

const Suggestions = ({ data, value, handleClickSuggestion }) => {
  return (
    <StyledContainer>
      {data.map((item, key) => (
        <StyledElement key={key}>
          <Styledbutton onClick={() => handleClickSuggestion(item.name)}>
            {regexifyString({
              pattern: new RegExp(value, "g"),
              decorator: (match) => {
                return <strong>{match}</strong>;
              },
              input: item.name,
            })}
          </Styledbutton>
        </StyledElement>
      ))}
    </StyledContainer>
  );
};

export default Suggestions;
