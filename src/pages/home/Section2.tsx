import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layer_1 from '../../img/home/Layer_1.png';
import Layer_3 from '../../img/home/Layer_3.png';
import { style1, style1Type } from '../../state/style/style1';

export interface Section2Props {
  scroll: number;
}

const Section2: React.FC<Section2Props> = ({ scroll }) => {
  const inputRef = useRef<any>({});
  // const scrollHandler = () => {
  //   console.log(inputRef.current.getBoundingClientRect());
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", scrollHandler, true);
  //   return () => {
  //     window.removeEventListener("scroll", scrollHandler, true);
  //   };
  // }, []);
  // console.log(window.innerHeight);

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', e => {
      setScrollY(
        inputRef.current.getBoundingClientRect().y - window.innerHeight
      );
    });
  }, []);

  // console.log(scrollY);

  return (
    <Section
      ref={inputRef}
      styled={style1}
      animate={scrollY <= -1 ? 'start' : 'end'}
    >
      <figure>
        <motion.img
          src={Layer_1}
          alt=""
          variants={{
            start: { x: 0, transition: { duration: 1 } },

            end: { x: '-200px', transition: { duration: 0 } }
          }}
        />
        <motion.img
          src={Layer_3}
          alt=""
          variants={{
            start: { x: 0, transition: { duration: 1 } },
            end: { x: '200px', transition: { duration: 0 } }
          }}
        />
      </figure>
      <motion.article
        variants={{
          start: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          end: { opacity: 0, y: '1000px', transition: { duration: 0 } }
        }}
      >
        <h2>about</h2>
        <span>WE CREATE DELICIOUS MEMORIES</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          consequatur, omnis soluta reprehenderit quidem totam perspiciatis
          excepturi quod iusto delectus numquam optio aliquam officia molestias
          quasi earum! Officiis laudantium quod nihil hic soluta, rem, sapiente
          tempore dignissimos pariatur totam, iure quos magnam id unde sint.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          assumenda iste ipsam omnis hic dolore veniam nam animi rem magni.
        </p>
        <Link to="/about">...</Link>
      </motion.article>
    </Section>
  );
};

export default Section2;

const Section = styled(motion.section)<style1Type>`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 5px;
  & > figure {
    margin: 0 auto;
    padding: 20px 0px;

    display: flex;
    flex-direction: column;
    & > img:first-child {
      align-self: flex-end;
      display: block;
      width: 90%;
    }
    & > img:last-child {
      align-self: flex-start;
      margin: -50px 0 0 0;
      display: block;
      width: 90%;
    }
  }
  & > article {
    margin: 0 auto;
    width: auto;
    max-width: 500px;
    padding: 20px 0px;
    & > h2 {
      text-align: end;
      margin: 20px 0;
    }
    & > span {
      color: ${props => props.styled.nav.navActive};
      letter-spacing: 3px;
      font-size: 1.2em;
    }
    & > p {
      margin: 20px 0;
    }
    & > a {
      display: block;
      font-size: 2.5em;
      letter-spacing: 3px;
      padding: 20px 0 0 0;
      color: #000;
    }
  }
  @media screen and (min-width: 550px) {
    & > figure {
      width: 500px;
    }
  }
  @media screen and (min-width: 1000px) {
    flex-direction: row;
    & > figure {
      margin: 0 50px;
    }
    & > article {
      margin: 0 50px;
      & > p {
        margin: 20px 0;
        width: 90%;
      }
    }
  }
`;
