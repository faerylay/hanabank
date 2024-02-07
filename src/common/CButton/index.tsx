import React from "react";
import { StyledButton } from "./styles";

interface IProps {
  title?: any;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: any;
  border?: { width: string; color?: string; style?: string };
  backgroundHover?: any;
  textHover?: any;
  icon?: any;
  iconLeft?: boolean;
  size?: number;
  textStyle?: React.CSSProperties;
}
const CButton = ({
  title,
  icon,
  onClick,
  style,
  border,
  backgroundHover,
  textHover,
  iconLeft,
  size,
}: IProps) => {
  return (
    <StyledButton
      size={size}
      className={"customBtn"}
      type="button"
      backgroundHover={backgroundHover}
      textHover={textHover}
      style={{
        borderStyle: border?.style !== undefined ? border.style : "solid",
        borderWidth: border?.width !== undefined ? border.width : 0,
        borderColor: border?.color !== undefined ? border.color : "transparent",
        flexDirection: icon ? "row" : "column",
        border: `1px solid #d4d5d6`,
        ...style,
      }}
      onClick={onClick}
    >
      {/* 왼 쪽 아이콘 */}
      {iconLeft && icon ? icon : null}
      {/* 제목 */}
      {title}
      {/* 오른 쪽 아이큰 */}
      {!iconLeft && icon ? icon : null}
    </StyledButton>
  );
};

export default React.memo(CButton);
