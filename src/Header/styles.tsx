import styled, { css } from "styled-components";

export const HeaderSection = styled.div`
  width: 100vw;
  height: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: #fff;
  .btn-home {
    background-size: 100% 100%;
    display: inline-block;
    z-index: 1;
    cursor: pointer;
    text-decoration: none;
    font-weight: 400;
    line-height: 1.4;
    color: #fff;
  }
  z-index: 1111;
  transition: background-color 0.3s;
`;
export const ProgressBar = styled.div<{ width?: string }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px; // Height of the progress bar
  background-color: #68b7a8; // Color of the progress bar
  width: ${(props) => props.width}%; // Width based on scroll progress
`;
export const ListSections = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  z-index: 11;
`;

export const ListitemSection = styled.div`
  height: 100%;
  width: 100px;
  display: flex;
  font-weight: 900;
  flex-direction: "row";
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const NavbarModalSection = styled.div<{ isVisible?: boolean }>`
  position: absolute;
  width: 100vw;
  height: 50vh;
  background: #fff;
  transition: top 0.3s ease, transform 0.3s ease;
  top: 0;
`;
