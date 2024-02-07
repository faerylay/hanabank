import React from "react";
import {
  HeaderSection,
  ListSections,
  ListitemSection,
  ProgressBar,
} from "./styles";
import { Text, View } from "../styling/reactnative";

import { IconPlus, IconH1, IconWorld, IconMenu2 } from "@tabler/icons-react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import BtnItems from "./BtnItems";
import NavbarModal from "./NavbarModal";

const Header = ({ startScroll, scrollProgress }: any) => {
  const { width } = useWindowDimensions();
  const [visibleModal, setVisibleModal] = React.useState(false);
  const handleMouseEnter = () => {
    setVisibleModal(true);
  };

  const handleMouseLeave = () => {
    setVisibleModal(false);
  };
  return (
    <HeaderSection
      style={{
        background: startScroll || visibleModal ? "#fff" : "transparent",
      }}
    >
      <ProgressBar width={scrollProgress} />
      <View style={{ paddingLeft: 32, flex: 1 }}>
        <Text size={14}>
          <a
            href="/"
            aria-label="하나금융그룹"
            title="홈으로"
            className="btn-home"
            style={{
              color: startScroll || visibleModal ? "rgb(0, 145, 120)" : "#fff",
            }}
          >
            <h1>하나금융그룹</h1>
          </a>
        </Text>
      </View>
      {width > 1030 ? (
        <ListSections
          style={{
            flex: 1,
            justifyContent: "center",
            color: startScroll || visibleModal ? "#333" : "#fff",
            zIndex: 9999,
          }}
        >
          <ListitemSection
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            그룹소개
          </ListitemSection>
          <ListitemSection
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            기업지배구조
          </ListitemSection>
          <ListitemSection
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            ESG경영
          </ListitemSection>
          <ListitemSection
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            투자정보
          </ListitemSection>
          <ListitemSection
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            PR센터
          </ListitemSection>
        </ListSections>
      ) : null}
      {visibleModal && <NavbarModal />}

      <ListSections
        style={{ flex: 1, justifyContent: "flex-end", paddingRight: 32 }}
      >
        <BtnItems
          icon={
            <IconPlus color={startScroll || visibleModal ? "#333" : "#fff"} />
          }
        />
        <BtnItems
          icon={
            <IconH1 color={startScroll || visibleModal ? "#333" : "#fff"} />
          }
        />
        <BtnItems
          icon={
            <IconWorld color={startScroll || visibleModal ? "#333" : "#fff"} />
          }
        />
        <BtnItems
          icon={
            <IconMenu2 color={startScroll || visibleModal ? "#333" : "#fff"} />
          }
        />
      </ListSections>
    </HeaderSection>
  );
};

export default Header;
