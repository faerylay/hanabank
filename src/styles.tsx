import styled from "styled-components";
import heroImage from "./assets/hero-image.png";
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
    /* Adjust the width of the scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #68b7a8;
    /* Color of the thumb */
  }

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    /* Color of the track */
  }
`;
export const HeroImageContainer = styled.div`
  width: 100%;
  height: 640px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: rgb(0, 145, 120);
  @media only screen and (max-width: 600px) {
    height: 590px;
    flex-direction: column;
  }
`;

export const HeroImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media only screen and (max-width: 600px) {
    background-size: 200% 100%;
    background-origin: border-box;
    /* background-position: center;
    background-attachment: fixed; */
    /* background-origin: border-box; */
  }
`;
