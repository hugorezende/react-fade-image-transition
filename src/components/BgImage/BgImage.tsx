import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

interface IBgImageProps {
  imageUrl: string;
}

const BgImage: React.FunctionComponent<IBgImageProps> = (props) => {
  const { imageUrl } = props;
  const [showImg, setShowImg] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(0);
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setShowImg(true);
      setOpacity(1);
    };
  }, [imageUrl]);

  return (
    <Wrapper
      imageUrl={showImg ? imageUrl : ""}
      //style={{ opacity: opacity }}
    >
      <div
        style={{
          opacity: opacity,
          transition: "all 1s",
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ imageUrl: string }>`
  div {
    transition: opacity 500ms !important;
    opacity: 0;
    width: 100%;
    min-height: calc(100vh - 40px);
    //background-color: #cccccc;
    background-size: cover;
    background-position: center;
    top: 0;
    //transform: scale(0.5);
  }
`;
export default BgImage;
