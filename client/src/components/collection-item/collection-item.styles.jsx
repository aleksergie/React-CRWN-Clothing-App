import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  height: 330px;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: all 0.4s ease;
  backface-visibility: hidden;
  margin-bottom: 40px;

  &:hover {
    transform: translateY(-10px) scale(1.04);
    .image {
      box-shadow: 0px -1px 26px -2px rgba(31, 31, 31, 1);
      opacity: 0.9;
      border: none;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const AddButton = styled(CustomButton)`
  top: 235px;
  width: 80%;
  opacity: 0.7;
  position: absolute;
  display: none;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  box-shadow: 0px -4px 40px -1px rgba(31, 31, 31, 1);
  transition: all 0.4s ease;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
  transition: all 0.6s ease-in-out;
`;

export const PriceContainer = styled.span`
  width: 10%;
  transition: all 0.6s ease-in-out;
`;
