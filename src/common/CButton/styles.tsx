import styled from "styled-components";

export const StyledButton = styled.button<{
  backgroundHover: string;
  textHover: string;
  size?: number;
}>`
  ${({ backgroundHover }) =>
    backgroundHover &&
    `
         &.customBtn {
            &:hover {
                background:${backgroundHover};
            }
        }
    `}
  ${({ textHover }) =>
    textHover &&
    `
        &:hover  {
           color: ${textHover}!important;
        }
    `}
    &:hover {
    .viewBtnIcon {
      color: dodgerblue;
    }
  }
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  background-color: transparent;
  outline: 0;
  cursor: pointer;
  height: 35;
  border-radius: 8;
  transition: ease border-bottom 250ms;
  &:active {
    transform: translateY(2px);
  }
  ${({ size }) =>
    size &&
    `
        @media only screen and (max-width: 600px) {
           font-size: ${size - 4}px;
        }
        @media only screen and (min-width: 600px) {
           font-size: ${size - 3}px;
        }
        @media only screen and (min-width: 768px) {
           font-size: ${size - 3}px;
        }
        @media only screen and (min-width: 992px) {
           font-size: ${size - 1}px;
        }
        @media only screen and (min-width: 1200px) {
           font-size: ${size}px;
        }
   `}
`;
