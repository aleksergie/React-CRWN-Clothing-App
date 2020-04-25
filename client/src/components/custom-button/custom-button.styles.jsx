import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
  outline: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  &:active {
    outline: none;
    transform: scale(0.95);
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  outline: none;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }

  &:active {
    outline: none;
    transform: scale(0.95);
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;
  outline: none;

  &:hover {
    background-color: #104dad;
    border: none;
  }

  &:active {
    outline: none;
    transform: scale(0.95);
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 17px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  transition: all 0.2s linear;

  @media screen and (max-width: 800px) {
    padding: 0 5px;
    font-size: 10px;
    line-height: 10px;
  }

  ${getButtonStyles}
`;
