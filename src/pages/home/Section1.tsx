import React, {useState} from "react";
import styled from "styled-components";
import Layer_26 from "../../img/home/Layer_26.png";
import Layer_27 from "../../img/home/Layer_27.png";
import Layer_28 from "../../img/home/Layer_28.png";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import {style1, style1Type} from "../../state/style/style1";
import {motion} from "framer-motion";

export interface Section1Props {}

const Section1: React.SFC<Section1Props> = () => {
  const images = [Layer_26, Layer_27, Layer_28];
  const [slider, setSlider] = useState(0);
  console.log(slider);

  return (
    <Section>
      <div></div>
      <div>
        <Slider animate={`${slider}`}>
          {images.map(image => (
            <motion.div
              variants={{
                0: {x: 0, transition: {duration: 0.6}},
                1: {x: "-100%", transition: {duration: 0.6}},
                2: {x: "-200%", transition: {duration: 0.6}}
              }}
              key={image}
              // style={{background: `url(${image})`}}
            ></motion.div>
          ))}
        </Slider>
        <div>
          <div>
            <Content styled={style1}>
              <div>
                <h3>made with love</h3>
                <span>for you</span>
              </div>
              <div>
                <button
                  onClick={() => setSlider(slider - 1)}
                  disabled={slider === 0 ? true : false}
                  style={slider === 0 ? {border: "none"} : {}}
                >
                  <MdKeyboardArrowLeft />
                </button>
                <button
                  onClick={() => setSlider(slider + 1)}
                  disabled={slider === 2 ? true : false}
                  style={slider === 2 ? {border: "none"} : {}}
                >
                  <MdKeyboardArrowRight />
                </button>
              </div>
            </Content>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Section1;

const Section = styled.section`
  top: 0;
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: -10;
  display: grid;
  grid-template-rows: 85px 1fr;
  & > div:first-child {
    background-color: white;
  }
  & > div:last-child {
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    position: relative;
    & > div:last-child {
      display: grid;
      grid-template-rows: 1fr;
      overflow: hidden;
      position: absolute;
      background-color: rgba(30, 38, 51, 0.3);
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (min-width: 1000px) {
    grid-template-rows: 100px 1fr;
  }
`;
interface SliderProps {
  animate: number | string;
}
const Slider = styled(motion.div)<SliderProps>`
  display: grid;
  grid-template-columns: 100vw 100vw 100vw;
  grid-template-rows: 1fr;
  overflow: hidden;
  & > div {
    background-repeat: no-repeat;
    background-position: center;
    transform: translateX(-100%);

    &:nth-child(1) {
      background: url(${Layer_26});
      background-position: -450px;
    }
    &:nth-child(2) {
      background: url(${Layer_27});
      background-position: -900px;
    }
    &:nth-child(3) {
      background: url(${Layer_28});
      background-position: -1100px;
    }
    @media screen and (min-width: 1000px) {
      &:nth-child(1) {
        background: url(${Layer_26});
        background-position: center;
      }
      &:nth-child(2) {
        background: url(${Layer_27});
        background-position: center;
      }
      &:nth-child(3) {
        background: url(${Layer_28});
        background-position: center;
      }
    }
  }
`;

const Content = styled.div<style1Type>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 20px 100px 20px;
  & > div:first-child {
    width: auto;
    max-width: 500px;
    margin: 0 0 20px 0;
    & > h3 {
      font-size: 2.8em;
      letter-spacing: 2px;
      color: #fff;
      font-weight: 400;
      margin: 10px 0;
    }
    & > span {
      font-size: 2.2em;
      color: ${props => props.styled.nav.navActive};
      letter-spacing: 2px;
    }
  }
  & > div:last-child {
    width: 125px;
    display: flex;
    justify-content: space-between;
    & > button {
      width: 55px;
      height: 55px;
      background-color: transparent;
      border: 1px solid white;
      color: white;
      font-size: 2.8em;
      padding-top: 3px;
    }
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    & > div:first-child {
      order: 1;
      width: 400px;
      margin: 0;

      & > h3 {
        font-size: 5em;
        margin: initial;
      }
      & > span {
        font-size: 3em;
      }
    }
  }
`;
