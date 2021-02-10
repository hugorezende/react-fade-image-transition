import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

interface ICardProps {
  image: string;
  left: string;
  top: string;
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
  const { image, left, top } = props;
  const [opacity, setOpacity] = useState(0);

  React.useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setOpacity(1);
    };
    img.src = image;
  }, [image]);

  return (
    <CardWrapper>
      <div className='content'>
        <div style={{ marginBottom: "50px", fontSize: "16px" }}>Info</div>
        <div style={{ fontSize: "16px" }}>New</div>
        <div style={{ fontSize: "48px" }}>911</div>
        <div>Carrera S</div>

        <div style={{ fontSize: "30px", margin: "40px 0px" }}>
          A Car that does not obey something.
        </div>

        <div style={{ fontSize: "14px", fontWeight: 400, marginTop: "40px" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla fugiat
          possimus illo repudiandae doloribus veniam suscipit exercitationem
          obcaecati distinctio
        </div>
      </div>

      <div
        className='bg'
        style={{
          left: `calc(-${left} - 102px)`,
          top: `calc(-${top} - 124px)`,
          opacity: opacity,
          backgroundImage: `url(${image})`,
        }}
      ></div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 300px;
  height: 500px;
  border: solid 4px #ffffff;
  padding: 25px;
  color: #fff;
  font-weight: 600;
  font-size: 22px;
  position: relative;
  overflow: hidden;
  .content {
    position: relative;
    z-index: 10;
  }
  .bg {
    opacity: 0;
    transition: opacity 500ms;
    z-index: 1;
    position: absolute;
    width: 100vw;
    height: calc(100vh - 40px);
    background-position: center;
    min-height: 665px;
    filter: blur(6px);
    background-size: cover;
  }
`;
export default Card;
