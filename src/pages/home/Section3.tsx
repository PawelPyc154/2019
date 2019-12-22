import React, {useState} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';
import {style1Type, style1} from '../../state/style/style1';
import ID600x400px from '../../img/home/ID600x400px.png';
import ID560x373px from '../../img/home/ID560x373px.png';
import ID530x320px from '../../img/home/ID530x320px.png';
import ID500x333px from '../../img/home/ID500x333px.png';

export interface Section3Props {}

const Section3: React.SFC<Section3Props> = () => {
  const [slider, setSlider] = useState(0);
  return (
    <Section styled={style1}>
      <article>
        <div>
          <h2>lunch</h2>
          <span>OF THE DAY</span>
        </div>
        <div>
          <motion.figure animate={`${slider}`}>
            <motion.img
              src={ID600x400px}
              alt=""
              variants={
                window.screen.width < 1000
                  ? {
                      0: {x: 0, transition: {duration: 0.5}},
                      1: {x: '-100%', transition: {duration: 0.5}},
                      2: {x: '-200%', transition: {duration: 0.5}},
                      3: {x: '-300%', transition: {duration: 0.5}}
                    }
                  : {
                      0: {x: 0, scale: 1, opacity: 1, zIndex: -10},
                      1: {x: '-80px', scale: 0.9, opacity: 0.7, zIndex: -20},
                      2: {x: '-160px', scale: 0.8, opacity: 0.6, zIndex: -30},
                      3: {x: '-220px', scale: 0.7, opacity: 0.5, zIndex: -40}
                    }
              }
            />
            <motion.img
              src={ID560x373px}
              alt=""
              variants={
                window.screen.width < 1000
                  ? {
                      0: {x: 0, transition: {duration: 0.5}},
                      1: {x: '-100%', transition: {duration: 0.5}},
                      2: {x: '-200%', transition: {duration: 0.5}},
                      3: {x: '-300%', transition: {duration: 0.5}}
                    }
                  : {
                      0: {x: 0, scale: 1, opacity: 0.7, zIndex: -20},
                      1: {x: '-70px', scale: 1.07, opacity: 1, zIndex: -10},
                      2: {x: '-140px', scale: 1, opacity: 0.7, zIndex: -20},
                      3: {x: '-210px', scale: 0.9, opacity: 0.6, zIndex: -30}
                    }
              }
            />
            <motion.img
              src={ID530x320px}
              alt=""
              variants={
                window.screen.width < 1000
                  ? {
                      0: {x: 0, transition: {duration: 0.5}},
                      1: {x: '-100%', transition: {duration: 0.5}},
                      2: {x: '-200%', transition: {duration: 0.5}},
                      3: {x: '-300%', transition: {duration: 0.5}}
                    }
                  : {
                      0: {x: 0, scale: 1, opacity: 0.6, zIndex: -30},
                      1: {x: '-70px', scale: 1.05, opacity: 0.7, zIndex: -20},
                      2: {x: '-135px', scale: 1.15, opacity: 1, zIndex: -10},
                      3: {x: '-200px', scale: 1.05, opacity: 0.7, zIndex: -20}
                    }
              }
            />
            <motion.img
              src={ID500x333px}
              alt=""
              variants={
                window.screen.width < 1000
                  ? {
                      0: {x: 0, transition: {duration: 0.5}},
                      1: {x: '-100%', transition: {duration: 0.5}},
                      2: {x: '-200%', transition: {duration: 0.5}},
                      3: {x: '-300%', transition: {duration: 0.5}}
                    }
                  : {
                      0: {x: 0, scale: 1, opacity: 0.5, zIndex: -40},
                      1: {x: '-50px', scale: 1.05, opacity: 0.6, zIndex: -30},
                      2: {
                        x: '-111px',
                        scale: 1.15,
                        opacity: 0.7,
                        zIndex: -20
                      },
                      3: {x: '-179px', scale: 1.25, opacity: 1, zIndex: -10}
                    }
              }
            />
            <div>
              <button
                onClick={() => setSlider(0)}
                style={slider === 0 ? {border: 'none'} : {}}
              />
              <button
                onClick={() => setSlider(1)}
                style={slider === 1 ? {border: 'none'} : {}}
              />
              <button
                onClick={() => setSlider(2)}
                style={slider === 2 ? {border: 'none'} : {}}
              />
              <button
                onClick={() => setSlider(3)}
                style={slider === 3 ? {border: 'none'} : {}}
              />
            </div>

            <div>
              <button
                onClick={() => setSlider(slider + 1)}
                disabled={slider === 3}
                style={slider === 3 ? {border: 'none'} : {}}
              >
                <MdKeyboardArrowLeft />
              </button>
              <button
                onClick={() => setSlider(slider - 1)}
                disabled={slider === 0}
                style={slider === 0 ? {border: 'none'} : {}}
              >
                <MdKeyboardArrowRight />
              </button>
            </div>
          </motion.figure>
          <div>
            <p>Homemade bagette</p>
            <span>Monday</span>
          </div>
        </div>
      </article>
    </Section>
  );
};

export default Section3;

const Section = styled.section<style1Type>`
  padding: 5px;
  /* height: 510px; */
  display: flex;
  justify-content: center;
  & article {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div:first-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > h2 {
      }
      & > span {
        color: ${props => props.styled.nav.navActive};
        font-size: 1.1em;
        margin: 10px 0 30px 0;
      }
    }

    & > div:last-child {
      & > figure {
        max-width: 600px;
        display: grid;
        grid-template-columns: 100% 100% 100% 100%;
        grid-template-rows: 1fr;
        overflow: hidden;
        position: relative;
        & > img {
          max-width: 600px;
          transform: translateX(0);
          top: 0;
          left: 0;

          width: 100%;
          height: auto;
        }

        & > div:nth-of-type(1) {
          position: absolute;
          display: grid;
          grid-template-columns: repeat(4, 15px);
          grid-gap: 15px;
          bottom: 30px;

          justify-self: center;
          & > button {
            background-color: transparent;
            /* width: 15px; */
            height: 15px;
            border: 2px solid white;
            border-radius: 7.5px;
            z-index: 300px;
          }
        }
        & > div:nth-of-type(2) {
          display: none;
        }
      }
      text-align: center;
      & > div {
        & > p {
          font-size: 1.5em;
        }
        & > span {
          font-size: 2em;
          letter-spacing: 3px;
          color: #babcc7;
          line-height: 2.4em;
        }
      }
    }
  }

  @media screen and (min-width: 1100px) {
    padding: 70px 5px;
    & article {
      flex-direction: row;
      & > div:first-child {
        margin: 0 100px 0 0;
        & > h2 {
        }
        & > span {
        }
      }

      & > div:last-child {
        & > figure {
          overflow: visible;
          display: flex;
          align-items: center;

          & > img {
            display: block;
            height: 100%;
            &:nth-child(1) {
              display: block;
              margin: 0;
              z-index: -10;
              /* margin: 0 0 0 -50px; */
            }
            &:nth-child(2) {
              display: block;
              margin: 0 0 0 -510px;
              z-index: -20;
              /* width: 90%; */
              transform: scale(0.9);
              opacity: 0.7;
            }

            &:nth-child(3) {
              display: block;
              margin: 0 0 0 -480px;
              transform: scale(0.8);
              z-index: -30;
              opacity: 0.6;
            }
            &:nth-child(4) {
              display: block;
              transform: scale(0.7);
              margin: 0 0 0 -460px;
              z-index: -40;
              opacity: 0.5;
            }
          }
          & > div:nth-of-type(1) {
            display: none;
          }
          & > div:nth-of-type(2) {
            position: absolute;
            width: 125px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            & > button {
              width: 55px;
              height: 55px;
              background-color: transparent;
              border: none;
              color: #000;
              font-size: 2.8em;
              padding-top: 3px;
              margin: 5px;
            }
          }
        }
        & > div {
          display: flex;
          justify-content: space-between;
          & > p {
          }
          & > span {
          }
        }
      }
    }
  }
`;
