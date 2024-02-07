import React, { useState } from "react";
import { View } from "./styling/reactnative";
import Header from "./Header";
import { Container, HeroImage, HeroImageContainer } from "./styles";

const App = () => {
  const [startScroll, setStartScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = (e: any) => {
    const element = e?.currentTarget;
    const scrollPosition = element.scrollTop;
    if (scrollPosition > 50) {
      setStartScroll(true);
    } else {
      setStartScroll(false);
    }

    const maxScroll = element.scrollHeight - element.clientHeight; // Total scrollable height
    const scrollPercentage = (scrollPosition / maxScroll) * 100; // Scroll progress as a percentage

    setScrollProgress(scrollPercentage);
  };
  return (
    <Container onScroll={handleScroll}>
      <HeroImageContainer>
        <Header startScroll={startScroll} scrollProgress={scrollProgress} />
        <HeroImage></HeroImage>
      </HeroImageContainer>
      <View
        style={{
          width: "100%",
          height: 1000,
          background: "#333",
        }}
      ></View>
    </Container>
  );
};

export default App;
