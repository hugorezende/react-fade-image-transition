import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import styled from "styled-components";
import "./App.css";
import BgImage from "./components/BgImage/BgImage";
import Card from "./components/Card/Card";
import Menu from "./components/Menu/Menu";

const positionCard = {
  top: "83px",
  left: "25vw",
};

function App() {
  const [showImg, setShowImg] = useState(false);
  const [img, setImg] = useState<any>("");

  const carsData = [
    {
      name: "718",
      model: "Cayman GT4",
      image:
        "https://files.porsche.com/filestore/wallpaper/multimedia/none/modelseries-718gt4-wallpaper-01/wallpaper/aa508cbc-8393-11e9-80c4-005056bbdc38;twebp065;l63696433116;w1920;h1080/porsche-wallpaper.webp",
    },
    {
      name: "911",
      model: "Carrera",
      image:
        "https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/modelseries-911carrera992-outdoor-11/zoom2/b99ddac5-e75d-11e8-bec8-0019999cd470;sI;twebp065/porsche-zoom2.webp",
    },
    {
      name: "Cayenne",
      model: "adsad",
      image:
        "https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/cayenne-models-gallery-image-21/zoom2/d9768664-153c-11eb-80cf-005056bbdc38;sH;twebp065/porsche-zoom2.webp",
    },
    {
      name: "911",
      model: "adsad",
      image:
        "https://unsplash.com/photos/7cumSLKrYFY/download?force=true&w=2400",
    },
    {
      name: "911",
      model: "adsad",
      image:
        "https://unsplash.com/photos/7cumSLKrYFY/download?force=true&w=2400",
    },
    {
      name: "911",
      model: "adsad",
      image:
        "https://unsplash.com/photos/7cumSLKrYFY/download?force=true&w=2400",
    },
  ];

  const [selectedCar, setSelectedCar] = useState(0);
  const [currentImage, setCurrentImage] = useState("");

  React.useEffect(() => {
    const img = new Image();
    img.src = carsData[selectedCar].image;
    img.onload = () => {
      setCurrentImage(img.src);
      console.log("Loaded");
    };
  }, [selectedCar]);

  return (
    <CSSTransition
      in={true}
      timeout={1000}
      appear
      enter
      classNames='transition_fade'
    >
      <AppWrapper className='App'>
        <Container>
          <Menu />

          <div className='main-content'>
            <div style={{ zIndex: 10 }}>
              <div className='title'>Shaping the future of the sportscar</div>
              <NavWrapper>
                {carsData.map((item, index) => (
                  <div
                    className={`item ${selectedCar === index ? "active" : ""}`}
                    onClick={() => {
                      setShowImg(false);
                      setSelectedCar(index);
                    }}
                  ></div>
                ))}
              </NavWrapper>
            </div>
            <SwitchTransition mode='out-in'>
              <CSSTransition
                key={selectedCar}
                addEndListener={(node, done) => {
                  node.addEventListener("transitionend", done, false);
                }}
                timeout={50000}
                classNames='my-node'
              >
                <Card
                  image={currentImage}
                  left={positionCard.left}
                  top={positionCard.top}
                />
              </CSSTransition>
            </SwitchTransition>
          </div>
        </Container>

        <SwitchTransition mode='out-in'>
          <CSSTransition
            key={selectedCar}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            timeout={50000}
            classNames='my-node'
          >
            <BgImage imageUrl={currentImage} />
          </CSSTransition>
        </SwitchTransition>
      </AppWrapper>
    </CSSTransition>
  );
}

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  .main-content {
    display: flex;
    padding-top: 100px;

    .title {
      margin-top: 50px;
      width: ${positionCard.left};
      padding: 50px;
      font-size: 56px;
      color: #fff;
      font-weight: 800;
    }
  }
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
`;

const NavWrapper = styled.div`
  display: flex;
  width: 200px;
  margin: 0 auto;
  .item {
    margin: 0 10px;
    min-width: 15px;
    height: 15px;
    border: 1px solid #fff;
    border-radius: 20px;
    position: relative;
    &.active {
      &::after {
        content: "";
        top: 4px;
        left: 4px;
        position: absolute;
        width: 7px;
        height: 7px;
        border-radius: 20px;
        background: #fff;
      }
    }
  }
`;
export default App;
