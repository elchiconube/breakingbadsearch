import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.shape.borderRadiusL};
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

const StyledImage = styled.div`
  height: 400px;
  width: 100%;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
`;

const StyledLabel = styled.p`
  padding: ${({ theme }) => theme.spacing.sizeM};
  text-align: center;
`;

const Character = ({ data }) => {
  const { name, img } = data;
  return (
    <StyledContainer>
      <StyledImage style={{ backgroundImage: `url(${img})` }} />
      <StyledLabel>{name}</StyledLabel>
    </StyledContainer>
  );
};

export default Character;
