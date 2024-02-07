import styled from "styled-components";

export const View = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.div<{ size?: number; hoverColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-family: "Roboto";

  &:hover {
    ${({ hoverColor }) => hoverColor && `color: ${hoverColor} !important;`}
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
           font-size: ${size - 2}px;
        }
        @media only screen and (min-width: 992px) {
           font-size: ${size - 1}px;
        }
        @media only screen and (min-width: 1200px) {
           font-size: ${size}px;
        }
   `}
`;

export const TouchableOpacity = styled.div`
  display: flex;
`;
export const Image = styled.div`
  display: flex;
  background-size: cover;
`;

export const TextOneLine = styled.div<{ size?: number; hoverColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-family: "Roboto";
  color: ${(props) => props.theme.COLORS.textw};
  white-space: nowrap; /* 텍스트 줄 바꿈 방지 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* 넘치는 텍스트를 ...으로 대체 */

  &:hover {
    ${({ hoverColor }) => hoverColor && `color: ${hoverColor} !important;`}
  }

  ${({ size }) =>
    size &&
    `
        @media only screen and (max-width: 370px) {
           font-size: ${size - 5}px;
        }
        @media only screen and (min-width: 600px) {
           font-size: ${size - 3}px;
        }
        @media only screen and (min-width: 768px) {
           font-size: ${size - 2}px;
        }
        @media only screen and (min-width: 992px) {
           font-size: ${size - 1}px;
        }
        @media only screen and (min-width: 1200px) {
           font-size: ${size}px;
        }
   `}
`;

export const ScrollView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`;
